/*global Statement*/

describe("Statement", () => {
  let deposit, withdrawal, earlyDeposit;
  beforeEach(() => {
    deposit = jasmine.createSpyObj('deposit', ['transactionInfo'], {credit: 100})
    deposit.transactionInfo.and.returnValue('19/05/2021 || 100.00 || ||')
    withdrawal = jasmine.createSpyObj('withdrawal', ['transactionInfo'], {debit: 100})
    withdrawal.transactionInfo.and.returnValue('19/05/2021 || || 100.00 ||')
    earlyDeposit = jasmine.createSpyObj('deposit', ['transactionInfo'], {credit: 100})
    earlyDeposit.transactionInfo.and.returnValue('19/05/2020 || 100.00 || ||')
  })
  describe("print()", () => {
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
  describe("format()", () => {
    it("returns the transactionInfo() of tbe transaction alongside the balance to 2 d.p.", () => {
      expect(Statement.prototype.format(deposit, 500)).toEqual('19/05/2021 || 100.00 || || 500.00')
    })
  })
  describe("calculateBalance()", () => {
    describe("for a single credit", () => {
      it("returns the credit", () => {
        expect(Statement.prototype.calculateBalance([deposit], 0)).toEqual(100)
      })
    })
    describe("for a single debit", () => {
      it("returns the negative of the debit", () => {
        expect(Statement.prototype.calculateBalance([withdrawal], 0)).toEqual(-100)
      })
    })
    describe("for multiple credits", () => {
      describe("for the last credit", () => {
        it("returns the credit", () => {
          expect(Statement.prototype.calculateBalance([deposit, deposit], 1)).toEqual(100)
        })
      })
      describe("for earlier appearing credits", () => {
        it("returns the cumulative sum of the credit", () => {
          expect(Statement.prototype.calculateBalance([deposit, deposit], 0)).toEqual(200)
        })
      })
    })
    describe("for multiple debits", () => {
      describe("for the last debit", () => {
        it("returns the negative of the debit", () => {
          expect(Statement.prototype.calculateBalance([withdrawal, withdrawal], 1)).toEqual(-100)
        })
      })
      describe("for earlier appearing debits", () => {
        it("returns the cumulative sum of the negatives of the debits", () => {
          expect(Statement.prototype.calculateBalance([withdrawal, withdrawal], 0)).toEqual(-200)
        })
      })
    })
    describe("for a mix of debits and credits", () => {
      describe("for the last element", () => {
        describe("when the last element in the array is a credit", () => {
          it("returns the credit", () => {
            expect(Statement.prototype.calculateBalance([withdrawal, deposit], 1)).toEqual(100)
          })
        })
        describe("when the last element in the array is a debit", () => {
          it("returns the negative of the debit", () => {
            expect(Statement.prototype.calculateBalance([deposit, withdrawal], 1)).toEqual(-100)
          })
        })
      })
      describe("for earlier appearing debits and credits", () => {
        it("returns the sum of the credits less the sum of the debits", () => {
          expect(Statement.prototype.calculateBalance([deposit, withdrawal], 0)).toEqual(0)
        })
      })
    })
  })
})
