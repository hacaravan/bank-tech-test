/*global Transaction*/
/* exported Account */

"use strict"

class Account {

  constructor() {
    this.statements = []
    this.balance = 0
  }

  printStatement() {
    let statement = 'date || credit || debit || balance'
    this.statements.slice().reverse().forEach((transaction, index, statements) => {
      console.log(statements)
      const reducer = (accumulator, transaction) => {
        return accumulator + (transaction.credit || 0) - (transaction.debit || 0)
      }
      let priorStatements = statements.slice().reverse()
      let balance = priorStatements.slice(0, priorStatements.length - index).reduce(reducer, 0)
      statement += this.format(transaction, balance)
    });
    return statement;
  }

  deposit(amount, optionalDate) {
    this.transact(amount, optionalDate)
  }

  withdraw(amount, optionalDate) {
    this.transact(-amount, optionalDate)
  }

  transact(amount, optionalDate) {
    let transaction = new Transaction(amount, optionalDate)
    this.balance += amount
    this.statements.push(transaction)
  }

  format(transaction, balance) {
    return `\n${transaction.transacInfo()} ${balance.toFixed(2)}`
  }
}
