var expect = require('chai').expect,
    FILL_ME_IN;

/**
 * @constructor Muppet
 * @param {Number} age
 * @param {String} hobby
 */
function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = function(){
    return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby); // Reuse `Muppet` constructor...

  this.mood = mood;

  this.cook = function() {
    return "Mmmm soup!";
  }
}

SwedishChef.prototype = new Muppet(); // Extend Muppet...

describe("About inheritance", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
    this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).to.equal("Mmmm soup!");
  });

  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).to.equal("Everything's cool!");
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.swedishChef.age).to.equal(2);
    expect(this.swedishChef.hobby).to.equal("cooking");
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.swedishChef.mood).to.equal("chillin");
  });
});

// http://javascript.crockford.com/prototypal.html
Object.prototype.beget = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby);
  this.trick = trick;

  this.doTrick = function() {
    return this.trick;
  }
}

//no longer need to call the Muppet (base type) constructor
Gonzo.prototype = Muppet.prototype.beget();

describe("About Crockford's inheritance improvement", function() {
  beforeEach(function(){
    this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.gonzo.doTrick()).to.equal("eat a tire");
  });

  it("should be able to call a method on the base object", function() {
    expect(this.gonzo.answerNanny()).to.equal("Everything's cool!");
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.gonzo.age).to.equal(3);
    expect(this.gonzo.hobby).to.equal("daredevil performer");
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.gonzo.trick).to.equal("eat a tire");
  });
});
