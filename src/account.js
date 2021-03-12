/*global Transaction*/
/* exported Account */

"use strict"

class Account {

  constructor() {
    this.transactions = []
  }

  printStatement() {
    let statement = 'date || credit || debit || balance'
    this.transactions.slice().reverse().forEach((transaction, index, transactions) => {
      let balance = this.calculateBalance(transactions, index)
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
    this.transactions.push(transaction)
  }

  format(transaction, balance) {
    return `\n${transaction.transacInfo()} ${balance.toFixed(2)}`
  }

  calculateBalance(transactions, index) {
    const reducer = (accumulator, transaction) => accumulator + (transaction.credit || 0) - (transaction.debit || 0)
    return transactions.slice().reverse().slice(0, transactions.length - index).reduce(reducer, 0)
  }

}
