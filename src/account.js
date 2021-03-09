"use strict"

class Account {

  constructor() {
    this.statements = []
    this.balance = 0
  }
  printStatement() {
    let statement = 'date || credit || debit || balance'
    this.statements.slice().reverse().forEach(line => {
      statement += `\n${line.transaction.transacInfo(line.balance)}`
    });
    return statement;
  }

  deposit(amount, optionalDate) {
    let deposit = new Transaction(amount, optionalDate)
    this.balance += amount
    this.statements.push({transaction: deposit, balance: this.balance})
  }

  withdraw(amount) {
    let withdrawal = new Transaction(-amount)
    this.balance -= amount
    this.statements.push({transaction: withdrawal, balance: this.balance})
  }
}
