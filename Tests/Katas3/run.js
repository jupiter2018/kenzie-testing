const { TestBase } = require("../../testBase");

let test = new TestBase(__dirname, {
  mochaFunctions:
    "kata1, kata2, kata3, kata4, kata5, kata6, kata7, kata8, kata9, kata10, kata11, kata12, kata13, kata14, kata15, kata16, kata17, kata18, kata19, kata20, kata21, kata22, kata23"
});

async function runTests() {
  await test.runMochaTest();
}

runTests();
