var register = require("../../model/register.js");


describe("The Input Values", function() {

  it("should be a string that is 16 characters long with dashes after the first 3 groups of 4 characters ", function() {

    // Three valid codes passed in a string should return an array with length of three
    var testSetOne = "A12T-4GH7-QPL9-3N4M;YRT6-72AS-K736-L4AR;65P1-UDGM-XH2M-LQW2";

    var testArray1 = register.parseProductCodes(testSetOne);
    expect(testArray1.length).toBe(3);

  });

  it("should throw an error if it does not have dashes separating the digits", function() {
    // 16 characters code without dashes should throw error
    var testSetTwo = "A12T4GH7QPL93N4M";

    expect(function() {
      register.parseProductCodes(testSetTwo);
    }).toThrow();
  });

  it ("should throw an error if there are more than or less than 16 characters", function() {
    // More than 16 characters should throw error
    var testSetThree = "YRRT6-72ASD-K736-L4SAR";
    var testSetFour = "RT6-7SD-K36-LSAR";

    expect(function() {
      register.parseProductCodes(testSetThree);
    }).toThrow();

    expect(function() {
      register.parseProductCodes(testSetFour);
    }).toThrow();
  });

  it ("should allow a user to leave a semi colon at the end of a string", function() {
    // Semi colon at the edge of a string still passes
    var testSetFive = "65P1-UDGM-XH2M-LQW2;";

    var testArray2 = register.parseProductCodes(testSetFive);
    expect(testArray2.length).toBe(1);
  });

  it("should be case insensitive", function(){});
});

// describe("The Output", function(){
//   it("should be a string", function(){});
//   it("should start with '$'");
//
// });
