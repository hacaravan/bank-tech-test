/*global Transaction*/

"use strict"

describe('Transaction', () => {
  let testDate;
  beforeEach( () => {
    testDate = new Date('2021-03-17')
    jasmine.clock().install();
    jasmine.clock().mockDate(testDate)
  })

  describe('when instantiated with a positive number', () => {
    let deposit;
    beforeEach(() => {
      deposit = new Transaction(100)
    })
    it('has a credit of that amount', () => {
      expect(deposit.credit).toEqual(100)
    })
    it("has today's date in a human format", () => {
      expect(deposit.date).toEqual("17/03/2021")
    })
  })

  describe('when instantiated with a negative number', () => {
    let withdrawal;
    beforeEach(() => {
      withdrawal = new Transaction(-100)
    })
    it('has a debit of that amount', () => {
      expect(withdrawal.debit).toEqual(100)
    })
    it("has today's date in a human format", () => {
      expect(withdrawal.date).toEqual("17/03/2021")
    })
  })

  describe('transacInfo()', () => {
    describe('for a credit', () => {
      it("returns a string with the date, credit amount and empty column", () => {
        let deposit = new Transaction(100, new Date('2021-05-19'))
        expect(deposit.transacInfo()).toEqual('19/05/2021 || 100.00 || ||')
      })
    })
    describe('for a debit', () => {
      it("returns a string with the date, empty column, and the debit amount", () => {
        let deposit = new Transaction(-100, new Date('2021-05-19'))
        expect(deposit.transacInfo()).toEqual('19/05/2021 || || 100.00 ||')
      })
    })
  })

  describe('when instantiated with a date as well', () => {
    let deposit, withdrawal, testDate = new Date('2021-05-19');
    beforeEach(() => {
      deposit = new Transaction(100, testDate)
      withdrawal = new Transaction(-100, testDate)
    })
    describe('as a positive number', () => {
      it('has that date in human format', () => {
        expect(deposit.date).toEqual('19/05/2021')
      })
      it('has a credit of that amount', () => {
        expect(deposit.credit).toEqual(100)
      })
    })
    describe('as a negative number', () => {
      it('has that date in human format', () => {
        expect(withdrawal.date).toEqual('19/05/2021')
      })
      it('has a debit of that amount', () => {
        expect(withdrawal.debit).toEqual(100)
      })
    })
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })

})
