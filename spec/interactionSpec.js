"use strict"

describe('Interaction', () => {
  describe('when instantiated with a positive number', () => {
    let deposit;
    beforeEach(() => {
      deposit = new Interaction(100)
    })
    it('has a credit of that amount', () => {
      expect(deposit.credit).toEqual(100)
    })
    it("has today's date in a human format", () => {
      let todayString = dateToString(new Date)
      expect(deposit.date).toEqual(todayString)
    })
  })

  describe('when instantiated with a negative number', () => {
    let withdrawal;
    beforeEach(() => {
      withdrawal = new Interaction(-100)
    })
    it('has a debit of that amount', () => {
      expect(withdrawal.debit).toEqual(100)
    })
    it("has today's date in a human format", () => {
      let todayString = dateToString(new Date)
      expect(withdrawal.date).toEqual(todayString)
    })
  })

  describe('when instantiated with a date as well', () => {
    let deposit, withdrawal, testDate = new Date('2021-05-19');
    beforeEach(() => {
      deposit = new Interaction(100, testDate)
      withdrawal = new Interaction(-100, testDate)
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

})
