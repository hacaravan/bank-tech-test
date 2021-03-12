/* exported Statement*/

class Statement {
  print(transactions) {
    let statement = 'date || credit || debit || balance'
    transactions.slice().reverse().forEach((transaction, index, transactionsArray) => {
      let balance = this.calculateBalance(transactionsArray, index)
      statement += this.format(transaction, balance)
    });
    return statement
  }

  format(transaction, balance) {
    return `\n${transaction.transacInfo()} ${balance.toFixed(2)}`
  }

  calculateBalance(transactionsArray, index) {
    const reducer = (accumulator, transaction) => accumulator + (transaction.credit || 0) - (transaction.debit || 0)
    return transactionsArray.slice().reverse().slice(0, transactionsArray.length - index).reduce(reducer, 0)
  }
}
