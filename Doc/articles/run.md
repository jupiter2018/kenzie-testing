# Run.js

This is a required file in all test directors which calls a new TestBase object passing in anything required for the unit test and executes all of the unit tests.



###Current Template

```const { TestBase } = require("../../testBase");
   
   let test = new TestBase(__dirname, {
     mochaTest: ["test.js"],
     mochaFunctions:
       "function1, function2, function3,",
     testCafeFixture: "Tests"
   });
   
   async function runTests() {
     await test.runMochaTest();
     await test.runTestCafeTest();
   }
   
   runTests();```