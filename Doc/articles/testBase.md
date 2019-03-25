# TestBase.js

This object creates any needed temporary files and runs any applicable unit tests.

##Constructor (directory, options)

**directory** {string} :`'kenzie-testing/Tests/Katas1'`\
Filepath to the directory in kenzie-testing/Tests \
**options** {object}\
An object containing any needed arguments.

#### Options
(mochaTest, mochaFunctions, mochaDom, mochaExtra, testCafeTests, testCafeFixture)


  **mochaTest** {string}: `'test.js'` \
    Name of the file containing the mocha unit tests
    
    
  **mochaFunctions** {string}: `'function 1, function2'` \
  a CSV list of all the functions to test using mocha.  
  
  
  **mochaDom** {string}: `'<html> </html>'` \
  A string containing any needed html for running mocha dom testing. 
  (slightly outdated thanks to test-cafe, but still here for now)
  
  
  **mochaExtra** {string[]}: `['const fs = require('fs')']`\
  A string array with any javascript needed in the students file to run all of the mocha tests.
  
  
  **testCafeTests** {string}: `'testCafe.js'` \
  The name of the file containing all of the unit tests to run in testcafe inside of the /test directory.
  
  
  **testCafeFixture** {string}: `'Running Katas 1 Tests'`\
  A string giving a name to the test cafe fixture, this string is just the name the test will display in the console and makes no functional change.
  
  
 ####Connected Content
 [Run.js](run.md)