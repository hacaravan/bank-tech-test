# Simple Bank App

## Intro
A simple bank simulation that can be run in a web console with deposit, withdrawal & statement printing functionality. See [specifications](#specifications).

## Set Up & Installation
To run the app, clone this repo locally and open `bankRunner.html` in your browser. You can then interact with the app using the console in your browser on that page. Instructions describing available functions are listed on the `bankRunner.html` page.

### Running Tests
Tests are written using jasmine. To see test results, go to `specRunner.html` in your browser.

## Approach
- Written in JS
- Testing using [jasmine](https://jasmine.github.io/) standalone
- Code quality checked using ESLint (note, to run the linter, you will have to install ESLint - see [ESLint docs](https://eslint.org/docs/user-guide/getting-started))

### How it works
There are two classes - `Account` and `Transaction` - and a standalone function - `dateToString()`. These are saved in `account.js`, `transaction.js` and `dateHandling.js` respectively, all in the `src` folder.  
Each instance of `Account` has a container for transactions, which is added to using either `deposit()` or `withdraw()`.
Both these functions instantiate a new `Transaction` instance, which is then stored inside the `Account` instance.  
The `Transaction` object has information about the credit or debit for the transaction and the date it was created (which can be specified, but defaults to today).  
You can run `printStatement()` on an account object to see a list of transactions, sorted from most to least recent.

### Planning
Before writing tests or code, I converted the specifications into User Stories. I then pulled out important nouns & actions from these user stories to work out what classes I would need. My planning can be found in [the docs folder](docs/planning.md).

### TDD
Having planned how I thought the outcome would look, I began by writing tests, and passing them one at a time, then refactoring. I built up the suite from here.


## Specifications
* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

Given a client makes a deposit of 1000 on 10-01-2012  
And a deposit of 2000 on 13-01-2012  
And a withdrawal of 500 on 14-01-2012  
When she prints her bank statement  
Then she would see  

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
