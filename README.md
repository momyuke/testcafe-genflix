# testcafe-genflix
Automation Testing with Testcafe for Genflix Web

## Pre-Conditions
You must have NodeJs and NPM on your desktop before running this code

## Install Testcafe
On the terminal please type this `npm install -g testcafe` and enter

After that we have to install reporter for reporting the result after the code has been finished running. 
On the terminal please type this `npm install -g testcafe-reporter-html` and enter

## Run The Code 

On the terminal (Make sure the directory has been directed to the file of code) 
please type this `testcafe chrome  --reporter html:genflix-web-testing.html --skip-js-errors allTest.js ` 
