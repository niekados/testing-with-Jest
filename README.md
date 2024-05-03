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

Jest has function  names that match the English words,  
which make things easier to understand. So here's how a test description would  
look in Jest. 

- Iwant to test calculator
- I am going to test the addition function
- I want to get the result of 42
- I expect 20 + 22 equal 42

``` #JavaScript
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
