## Testing

### Other JavaScript environments - node & NPM
- node.js helps JavaScript become a language that can work for both front-end and back-end
- node.js is a separate standalone environment, which can run in multiple settings
    - command-line
    - desktop application
    - back-end
        - (PHP, Python, c#, Ruby, Java) are used before node.js
- with node.js, prople can write full-stack JavaScript programs
- Node.js comes with a package manager called npm, which stands for Node Package Manager.
- `node` command in terminal to run a JavaScript file or to directly execute JavaScript code
- `npm` command to install any node module from the npm repository
- start a new project
    - open the folder, run command
        ```
        npm init
        {
            "name": "my-project",
            "version": "1.0.0"
        }
        ```
    - `package.json` is created, which holds all the instructions on all the node modules that are pulled from the npm repository of open source modules.
    - when share the file to set-up another environment, run command `npm install` can install all the packages(dependencies) needed

### What is testing
- JavaScript testing frameworks
- Tests as expectation-documenting code
    - code syntax that specifies the expected reult of passing specific values to your functions
- JEST
    - `expect(function()).toBe();`
    - consiseness, clarity, repeatability
    - fail: red, pass: green
- refactoring
    - updating code, without affecting the results it produces
- red-green-refactor cycle
- test drive development (TDD)

### Types of testing
- software testing: confirming that software works as specified in the software's requorements
    - functionality intact
    - bug-free
    - satisfies requirements
- e2e (end to end)
    - open, use as end-user(interact with it)
    - not need to be developer
    - slow and time consuming
    - WebdriverJS. Protractor and Cyprus
- integration
    - how parts of the system interact with other parts
    - React testing library, enzyme
    - faster and cheaper
- unit
    - the process of testing the smallest unit (eg. functions or a method) of the source code in isolation
    - self-contained. fast, easy to write
- three level testing pyramid
    - base: unit test, highest speed and lowest cost
    - center: integration, average speed and expense
    - top: e2e, slowest and most expensive

###  Introduction to Jest
- JavaScript doesn't have built-in objects or methods that would allow for tests to be written
    - some libraries: Jasmine, Mocha, Karma, qUnit
- Jest: JavaScript testing framework
    - built by Meta
    - JavaCript-based
    - allow to test: babel, TypeScript, Node, Angular, Vue
    - code coverage: a measure of what percentage of my code is covered by tests
        - 100% coverage doesn't test for every conceivable expectation
        - higher the code coverage -> lower the chance of having unidentidies bugs
        - higher the percentage of code coverage -> lower the amount of time required to write new tests
    - Jest lets developers test a range of code types.
    - Jest allows you to easily work with unit tests.
- Mocking: separating code from related dependencies during testing.
    - to make sure unit testing stand-alone
    - eg. test the front end functionality of your web app by mocking the data as if it came back from a server when in fact it came from the client.
    - Jest has in-built mocking functions, facilitates asynchronous code and snapshot testing
- Snapshot testing: used by developers to verify that there are no regressions in the DOM

### Writing tests with Jest
- jest runs tests for code in current project to **verify the expected output**
```
addFive.js
----
function addFive(val) {
    return val + 5;
};
module.exports = addFive;

npm init -y //for the package.json file, --y is auto answer all questions yes
npm install --save-dev jest // install jest locally for this project // run this piece of code on the command line at the root of your project's folder it will add Jest as a devDependency inside package.json.

package.json
----
"scripts": {
    "test": "jest"
}

addFive.test.js
----
const { default: TestRunner } = require("jest-runner");
const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
})

npm run test

pass
```

### TDD (Test-Driven Development)
- traditional development
    1. receive requirement
    2. write code
    3. test
- TDD is streamlined process of writing code that will satisfy some requirement
    1. receive requirements: feature of the app
    2. write failing test: before app is built
    3. write code to make test pass
    4. code passing test: code to pass test
    5. improve workable code
- write as little code as possible to make the test pass 
```
expect(Function).toBeDefined();
Function();
expect(Function).toBeCalled();
```
