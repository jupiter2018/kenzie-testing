#!/usr/bin/env node

const fs = require('fs');
const {
    exec
} = require('child_process');
const ArgumentParser = require('argparse').ArgumentParser;
const path = require('path')

const parser = new ArgumentParser({
    version: '1.0.0',
    addHelp: true,
    description: 'Kenzie Academy assessment testing tool'
})

parser.addArgument(
    ['assessment'], {
        help: 'assessment to be tested'
    }
)

parser.addArgument(
    ['-g', '--gitlink'], {
        help: 'Github or Gitlab link to assessment file(s)'
    }
)

const args = parser.parseArgs()

const startDir = process.cwd();

const caseInsensitivePattern = new RegExp(args.assessment, 'i')



fs.readdir(`${__dirname}/Tests`, (err, items) => {
    items.forEach((item) => {
        if (caseInsensitivePattern.test(item)) {
            
            process.chdir(`${__dirname}/Tests/${item}`)
            
            const arrayOfFiles = fs.readdirSync(startDir)
            
            let studentFile

            arrayOfFiles.forEach(file => {
                if (caseInsensitivePattern.test(file)) {
                    studentFile = file
                    let filename = file;
                    let src = path.join(startDir, filename)
                    const studentCode = fs.readFileSync(src, {
                        encoding: "utf8"
                    })
                    let tempFile = './test/temp.js'
                    let tempFileStream = fs.createWriteStream(tempFile);

                    tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));
                }
                if (file.includes(".html")) {
                    let htmlFile = file;
                    let src = path.join(startDir, htmlFile)
                    const htmlContent = fs.readFileSync(src, {
                        encoding: "utf-8"
                    })
                    // console.log(arrayOfFiles)
                    // console.log(htmlContent)
                    let oneLineHTML = htmlContent.replace(/\n|\t/g, '')

                    // console.log(JSON.stringify(oneLineHTML))

                    let tempTXT = './test/temp.txt'
                    let tempTXTStream = fs.createWriteStream(tempTXT);
                    tempTXTStream.write(JSON.stringify(oneLineHTML));
                }
            })

            // This installs all required npm modules and awaits the install before continuing to next exec call
            const installPackages = exec('npm i')
            installPackages.on('exit', () => {
                process.exit
                const {gitlink, assessment} = args
                exec(`node run.js ${gitlink ? gitlink : ''}`, (error, stdout, stderr) => {
                    if(error){
                        console.log(error)
                    }
                    console.log(`Testing ${studentFile} in ${startDir}:`)
                    console.log(stdout)
                })
            })

        }
    })
})