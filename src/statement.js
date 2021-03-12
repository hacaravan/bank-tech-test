/* exported Statement*/

class Statement {
  print(transactions) {
    let statementLines = ['date || credit || debit || balance']
    this.addTransactionLines(statementLines, transactions)
    return statementLines.join('\n')
  }

  format(transaction, balance) {
    return `${transaction.transactionInfo()} ${balance.toFixed(2)}`
  }

  calculateBalance(transactionsArray, index) {
    const reducer = (accumulator, transaction) => {
      return accumulator + (transaction.credit || 0) - (transaction.debit || 0)
    }
    return transactionsArray.slice().reverse().slice(0, transactionsArray.length - index).reduce(reducer, 0)
  }

  addTransactionLines(statementLines, transactions){
    transactions.slice().reverse().forEach((transaction, index, transactionsArray) => {
      let balance = this.calculateBalance(transactionsArray, index)
      statementLines.push(this.format(transaction, balance))
    });
  }
}
