var expect = require('chai').expect,
    FILL_ME_IN;

describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    var emptyArray = [];

    expect(typeof(emptyArray)).to.equal('object');
    // A mistake? - http://javascript.crockford.com/remedial.html

    expect(emptyArray.length).to.equal(0);

    expect(emptyArray).to.be.empty;

    var multiTypeArray = [
      0,
      1,
      "two",
      function () { return 3; },
      {value1: 4, value2: 5},
      [6, 7]
    ];

    // What is the value of each element?
    expect(multiTypeArray[0]).to.equal(0);

    expect(multiTypeArray[2]).to.equal("two");

    // Careful, this one is tricky... explain why!
    expect( multiTypeArray[3]()).to.equal(3);

    expect(multiTypeArray[4].value1).to.equal(4);

    // What are those brackets doing there?
    expect(multiTypeArray[4]["value2"]).to.equal(5);

    expect(multiTypeArray[5][0]).to.equal(6);
  });

  it("should understand array literals", function () {
    var array = [];

    expect(array).to.deep.equal([]);

    array[0] = 1;

    expect(array).to.deep.equal([1]);

    array[1] = 2;

    expect(array).to.deep.equal(array);

    array.push(3);

    expect(array).to.deep.equal(array);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).to.equal(4);

    fourNumberArray.push(5, 6);

    expect(fourNumberArray.length).to.equal(6);

    var tenEmptyElementArray = new Array(10);

    expect(tenEmptyElementArray.length).to.equal(10);

    tenEmptyElementArray.length = 5;

    expect(tenEmptyElementArray.length).to.equal(5);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).to.deep.equal(["peanut"]);

    expect(array.slice(0, 2)).to.deep.equal(["peanut", "butter"]);

    expect(array.slice(2, 2)).to.deep.equal([]);

    expect(array.slice(2, 20)).to.deep.equal(["and", "jelly"]);

    expect(array.slice(3, 0)).to.deep.equal([]);

    expect(array.slice(3, 100)).to.deep.equal(["jelly"]);

    expect(array.slice(5, 1)).to.deep.equal([]);
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }

    passedByReference(array);

    expect(array[1]).to.equal("changed in function");

    var assignedArray = array;

    assignedArray[5] = "changed in assignedArray";

    expect(array[5]).to.equal("changed in assignedArray");

    var copyOfArray = array.slice();

    copyOfArray[3] = "changed in copyOfArray";

    expect(array[3]).to.equal("three");
  });

  it("should push and pop", function () {
    var array = [1, 2];

    expect(array.push(3)).to.equal(3);

    expect(array).to.deep.equal([1, 2, 3]);

    var poppedValue = array.pop();

    expect(poppedValue).to.equal(3);

    expect(array).to.deep.equal([1, 2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);

    expect(array).to.deep.equal([3, 1, 2,]);

    var shiftedValue = array.shift();

    expect(shiftedValue).to.deep.equal(3);

    expect(array).to.deep.equal(array);
  });
});
