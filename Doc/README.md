# Welcome!
Welcome to the Kenzie-Testing.js documentation. 
The current version allows unit testing of local files, github/gitlab repos, and hosted websites such as gitlab pages.

### About
Kenzie-Testing.js is a **[Node.js](https://nodejs.org/en/)** package to easily test front-end assignments at Kenzie Academy. \
The program currently tests Javascript files, as well as hosted web pages utilizing **[Mocha](https://github.com/mochajs/mocha)**, **[Chai](https://github.com/chaijs/chai)**, and **[Test-Cafe](https://github.com/DevExpress/testcafe)**. Students can utilize these tools to run tests on their work as they complete it, giving them instant feedback they can then experiment with. Instructors and coaches can run terminal commands on student url submissions to instantly grade assessments, freeing up valuable face-to-face instruction time.


### Installation
prerequisite: 
**[Node.js is required](https://nodejs.org/en/)**

Install: `npm install -g git+https://github.com/jragard/kenzie-testing`



## Commands
### Kenzie-Test:
`Kenzie-test <AssignmentName>`
Tests a file in the current directory with the proper name. \
**_Example_**: Testing Katas1\
cd to the assignment: `cd /assignment/katas1/`\
Run test: `kenzie-test katas1`


##### Arguments
**Github/Gitlab Repo**\
**`--gitlink -g`**\
Tests a file with the proper name in a given repo.\
_**Example**_: Testing Katas1 that has been pushed to gitlab\
`kenzie-test katas1 -g http://gitlab.com/notreal/katas1`

**Hosted Websites/Gitlab Pages**\
**`--gitpage -l`**\
Runs test cafe tests on a hosted website such as a gitlab pages site.\
**_Example_**: Testing a site with test cafe\
`kenzie-test anagrams1 -l https://notReal.gitlab.io/anagrams1`

Some tests support both Mocha and Test cafe tests.

### Tests
Katas1 

### For Developers

[Index.js](articles/index.md)\
[Run.js](articles/run.md)\
[TestBase](articles/testBase.md)
