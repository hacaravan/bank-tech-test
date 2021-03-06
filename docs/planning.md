# Bank Tech Test Planning

## Original Specification
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
## Converting to User Stories

>As a bank customer  
So I can buy things in future  
I want to deposit money into my account
>

>As a bank customer  
So I can pay for things  
I want to withdraw money from my account
>

>As a bank customer  
So I can track my spending  
I want to see a list of my deposits and withdrawals
>

>As a bank customer  
So I can track my spending  
I want this list to show the date, credit or debit, and current balance for each transaction
>

## Nouns & Actions
Nouns  
* account
* balance
* transactions
* transaction
* date
* credit
* debit

Actions
* deposit money
* withdraw money
* print statement

## Classes & Methods
Class | Properties | Methods
---| --- | ---|
account | balance, transactions | deposit(amount), withdraw(amount), printStatement()
transaction | date, credit, debit |

## Further Planning
- [x] Feature tests
- [x] Calculate balance on creating statement (don't need to store overall balance)
- [x] Extract printing & formatting into classes
- [x] Isolate tests using Time
