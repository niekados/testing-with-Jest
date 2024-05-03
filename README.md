# Instalation

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