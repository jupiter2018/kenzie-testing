const fs = require('fs');
const axios = require('axios');
const { exec, spawn } = require('child_process');
const { argv } = require('yargs');

const tempFile = "test/s.js";
const tempFileStream = fs.createWriteStream(tempFile);

if (argv._.length === 0) {
  defaultTest();
} else if (argv._[0].includes("github")) {
  const answer = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(argv._[0]);
  const url = `https://raw.githubusercontent.com/${answer[1]}/${
    answer[2]
  }/master/katas7.js`;
  gitTest(url);
} else if (argv._[0].includes("gitlab")) {
  const url = argv._[0] + "/raw/master/katas7.js";
  gitTest(url);
} else {
  console.log(`invalid command line parameter: ${argv._[0]}`);
}

function defaultTest() {
  studentCode = fs.readFileSync("../../temp.js", { encoding: "utf8" });
  runTests(studentCode);
}

function gitTest(url) {
  axios.get(url).then(response => {
    runTests(response.data);
  });
}

function runTests(studentCode) {
  tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));
  tempFileStream.write(
    "\nmodule.exports = { newForEach: (typeof newForEach) === 'function' && newForEach, newMap: (typeof newMap) === 'function' && newMap, newSome: (typeof newSome) === 'function' && newSome, newFind: (typeof newFind) === 'function' && newFind, newFindIndex: (typeof newFindIndex) === 'function' && newFindIndex, newEvery: (typeof newEvery) === 'function' && newEvery, newFilter: (typeof newFilter) === 'function' && newFilter };"
  );
  spawn("mocha", ['--colors'], { stdio: "inherit" }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }
    exec(`rm ${tempFile}`);
  });
}