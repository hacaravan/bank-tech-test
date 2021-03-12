/*global Transaction*/
/* exported Account */

"use strict"

class Account {

  constructor() {
    this.transactions = []
    this.balance = 0
  }

  printStatement() {
    let statement = 'date || credit || debit || balance'
    this.transactions.slice().reverse().forEach((transaction, index, transactions) => {
      const reducer = (accumulator, transaction) => {
        return accumulator + (transaction.credit || 0) - (transaction.debit || 0)
      }
      let priorTransactions = transactions.slice().reverse()
      let balance = priorTransactions.slice(0, priorTransactions.length - index).reduce(reducer, 0)
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
    this.transactions.push(transaction)
  }

  format(transaction, balance) {
    return `\n${transaction.transacInfo()} ${balance.toFixed(2)}`
  }

}
