"use strict"

describe('dateToString()', () => {
  it("returns a date in a human format", () => {
    let testDate = new Date('1995-05-19');
    expect(dateToString(testDate)).toEqual('19/05/1995')
  })
})
