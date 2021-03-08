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
})
