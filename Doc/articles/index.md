# Index.js

The index.js handles the original command and runs the appropriate run.js file.



**Description**:
  This script takes several arguments. First the script checks if the required argument <assessment> is a valid assessment name by reading through the kenzie-testing/Tests directory. \
  Next it checks if it needs it needs to generate a temporary file by seeing if there is a git url as one of the arguments. If there is no repo urls it will check the current directory for an appropriately named file to and create a temporary copy of the file to test. If there is a repo url the temp file will be created by TestBase.js.\
  Next the script runs the designated assignments run.js in a child process. 
  The run.js is a test package which handles actual testing.






