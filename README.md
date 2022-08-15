# Situation
Users of the financial app can go to a branch to cash in and/or cash out from their online account. There are commission fees for both cash in and cash out operations. Only supported currency is EUR.

# Program
As a single argument program accepts a path to the input file. Program outputs result to stdout.
Programme is listening to changes to the file.
Result: calculated commission fees for each operation.

# System
###### To start the program, you should:
```
npm install 
```
###### Run the start script passing the path argument to local input file: 
```
node index.js input.json 
```
###### If you want add other json file, path should be relative to the task's root folder:
```
node ./path-to-your/file.json
```
# Test Suite
###### Run test:
```
npm test
```
