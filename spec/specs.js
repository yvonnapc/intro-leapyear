describe('leapYear', function() {
  it("is false for a year that is not divisible by 4, 100, or 400", function() {
    expect(leapYear(1993)).to.equal(false);
  });

  it("is true for years divisible by 4", function() {
    expect(leapYear(2004)).to.equal(true);
  });

  it("is true for years divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });

  it("is true for years divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });

  it("is false for NaN", function() {
    expect(isNaN(leapYear())).to.be.false;
  });

  it("is false for negative", function() {
    expect(year < 0).to.equal(false);
  });

  it("is true for years not equal to 0", function() {
    expect(year != 0).to.equal(true);
  });
});
