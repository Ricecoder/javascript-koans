var expect = require('chai').expect,
    FILL_ME_IN;

describe("About Expects", function() {
  // We shall contemplate truth by testing reality, via spec expectations.
  it("should expect true", function() {
    expect(true).to.be.true; //This should be true
  });

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () {
    var actual = 1 + 1;

    expect(actual === 1 + 1).to.be.true
  });

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () {
    var actual = 1 + 1;

    // to.equal() compares using "strict" equality (===)
    expect(actual).to.equal(1 + 1);
  });

  // Sometimes you need to be really exact about what you "type."
  it("should check the _type_ first", function () {
    var actual = (1 + 1).toString();

    // use to.be.a() to check the type of a value
    expect(actual).to.be.a(FILL_ME_IN);

    expect(actual).to.be(1); // Fails?
  });

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
    expect(1 + 1).to.equal(FILL_ME_IN);
  });
});
