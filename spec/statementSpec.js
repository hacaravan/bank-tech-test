/*global Statement*/

describe("Statement", () => {
  describe("print()", () => {
    let deposit, withdrawal, earlyDeposit;
    beforeEach(() => {
      deposit = jasmine.createSpyObj('deposit', ['transactionInfo'], {credit: 100})
      deposit.transactionInfo.and.returnValue('19/05/2021 || 100.00 || ||')
      withdrawal = jasmine.createSpyObj('withdrawal', ['transactionInfo'], {debit: 100})
      withdrawal.transactionInfo.and.returnValue('19/05/2021 || || 100.00 ||')
      earlyDeposit = jasmine.createSpyObj('deposit', ['transactionInfo'], {credit: 100})
      earlyDeposit.transactionInfo.and.returnValue('19/05/2020 || 100.00 || ||')
    })
    describe("for an empty array", () => {
      it('prints just the headers', () => {
        expect(Statement.prototype.print([])).toEqual('date || credit || debit || balance')
      })
    })
    describe("for a single value with a credit", () => {
      it('prints a single line under the headers with balance equal to the credit', () => {
        expect(Statement.prototype.print([deposit])).toEqual('date || credit || debit || balance\n19/05/2021 || 100.00 || || 100.00')
      })
    })
    describe("for a single value with a debit", () => {
      it('prints a single line under the headers with balance equal to negative the debit', () => {
        expect(Statement.prototype.print([withdrawal])).toEqual('date || credit || debit || balance\n19/05/2021 || || 100.00 || -100.00')
      })
    })
    describe("for multiple values with credits", () => {
      it('prints the lines in the reverse of the order they were passed with the correct balance', () => {
        expect(Statement.prototype.print([earlyDeposit, deposit])).toEqual('date || credit || debit || balance\n19/05/2021 || 100.00 || || 200.00\n19/05/2020 || 100.00 || || 100.00')
      })
    })
    describe("for multiple values with debits", () => {
      it('prints the lines in the reverse of the order they were passed with the correct balance', () => {
        let earlyWithdrawal = jasmine.createSpyObj('withdrawal', ['transactionInfo'], {debit: 100})
        earlyWithdrawal.transactionInfo.and.returnValue('19/05/2020 || || 100.00 ||')
        expect(Statement.prototype.print([earlyWithdrawal, withdrawal])).toEqual('date || credit || debit || balance\n19/05/2021 || || 100.00 || -200.00\n19/05/2020 || || 100.00 || -100.00')
      })
    })
    describe("for multiple values with credits and debits", () => {
      it('prints the lines in the reverse of the order they were passed with the correct balance', () => {
        expect(Statement.prototype.print([earlyDeposit, withdrawal, deposit])).toEqual('date || credit || debit || balance\n19/05/2021 || 100.00 || || 100.00\n19/05/2021 || || 100.00 || 0.00\n19/05/2020 || 100.00 || || 100.00')
      })
    })
  })
})
