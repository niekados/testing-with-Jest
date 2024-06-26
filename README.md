# Jest

## Instalation

**npm - node package manager**

1. To  initialize our Node environment. In terminal run:

`npm init`

You can answer the questions  
here or you can just press enter to keep  the defaults, which is what I'm going to do.  

**The only one we absolutely need  to answer is the "test command".**
Here, type "`jest`". This tells NPM that we're  going to use Jest as our testing environment.

2. So when we get to the end here and answer yes, we've told NPM to use Jest but we haven't actually installed it yet.
To do this, we'll use the Node  Package Manager again, and
type: 

`npm install --save-dev jest` in our case we will specify the jest version `npm install --save-dev jest@26.6.3`

And that --save-dev switch just tells Node that we're  
going to use Jest in a development environment.  It adds Jest to a list called devDependencies,  
which are packages - or dependencies - that  you're going to need to develop your project.
But when it's installed, if you click on the  `package.json` file that you'll see has been  
created on the left hand side. You'll see  there, that Jest is set as our test command.  
And under devDependencies you'll see "jest" listed  with a version number. 

3. So let's go ahead, and run Jest for the first time. 
I'm going to type: `npm test` and when I press return, you'll see  
that we do get some output. It tries to run Jest  but it says, "no tests found exiting with code 1".  
And that's perfectly okay! That means  that Jest is installed and working.
The error is because, as the line  above says, there were no tests found.

## Describing Tests

`calc.js , calc.test.js`

Jest has function  names that match the English words,  
which make things easier to understand. So here's how a test description would  
look in Jest. 

- Iwant to test calculator
- I am going to test the addition function
- I want to get the result of 42
- I expect 20 + 22 equal 42

``` JavaScript
describe("calculator tests",() => {
    describe("addition tests", () => {
        test("should return 42", () => {
            expect(addition(20,22)).toBe(42);
        });
    });
});
```

Now it looks a little bit  complicated, but let's just break it down.
We start by describing our tests. So as we  would say in English, we want to describe  
a "calculator test". Then, we describe the  tests we want to perform. In this case,  
"addition". We say what it should do it should  return "42" and then we pass in our expectation.  
In this case, we expect the result  of our addition function to be 42. 
We could put other tests inside this  addition tests describe block too,  
like checking what happens if we  send in the wrong input, for example. 
Subtraction, division, and multiplication  tests could also be put inside the parent  
calculator test's describe  block, which keeps it all neat.
Notice that we use arrow functions  here, in our test descriptions,  
you've already been introduced to those. And  notice too, that our "to be" statement is here.  
Now this is called a "matcher" and in  Jest we have several "matchers" available.
"to be", which we've used  here, tests for exact equality.  
It's like using the triple equals(===)  sign in JavaScript to test for both value and type.
If we just wanted to test for value  then we could use the "toEqual" matcher instead.

## Storing Tests

Where should we store our tests? Well opinion  on this differs, some people say that unit tests  
should be in the same directory as the code  that we're testing. Others have the convention  
of putting tests in a different directory. For your own project, it depends on your  
preference but just be consistent  with whatever you choose.
For these lessons, I'm going to put  the tests in a separate directory  
inside the scripts directory, called 'tests'.

## Export functions

- export function from our .js `module.exports = addition;`
- in test file we add this line `const addition = require("../calc");`

## Writing test

1. Write test that fails
```javascript
describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42)
        })
    });
});
```
2. Write just enough code for test to pass
```javascript
function addition() {
    return 42;
};
```
3. Improove our code

```javascript
// calc.test.js
   describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42,31)).toBe(73);
        });
    });

// calc.js
function addition(num1, num2) {
    return num1 + num2;
};

```

## Mocking

`index.html , button.js , button.test.js`

With new Jest default config, we need to add this commment at the top of test file: 

```javascript
/**
 * @jest-environment jsdom
 */
```

Jest has a clever way, which is called mocking, providing a simulated environment to run our tests in. 
Rather than loading an entire  web page, we can get Jest  
to simulate parts of the page that  we can then run our tests against. 
Let's start with a simple example.  
Here, you'll see we have a simple web page it  consists of a heading, a button which calls  
the button click function when it's clicked,  and an empty paragraph with the ID of "par".
it's also loading the button.js  script which contains our click button function.
When the button is clicked, the paragraph text  will change to, "you clicked".  

Jest ships with a built-in mock DOM called **jsdom**,  
which we can use.

## Load and attach entire HTML to mock DOM

if  you want to test more than one DOM  
component. Firstly, you could just add all of the components  
to the mock DOM similar to how  we did in the previous video. 
This would work perfectly  well, but with one drawback,  
if you change the original HTML file you'd  also need to change the HTML in your test. 
This isn't an issue when  it's just one HTML fragment,  
but it can become problematic if  you've lots of components to test.
The second approach, then, is to load the  entire HTML page and attach it to the mock DOM. 

we're going to add in the Node `fs` module.  
This is a file system handling module built into  Node that allows us to open read and write files.

```javascript
// button.test.js
beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
```