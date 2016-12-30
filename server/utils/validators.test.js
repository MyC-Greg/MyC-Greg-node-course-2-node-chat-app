const expect = require('expect');

//import isRealString
var {isRealString} = require('./validators');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = 3;
    var string = isRealString(str);
    expect(string).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = '   ';
    var string = isRealString(str);
    expect(string).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var str = '   23fr$';
    var string = isRealString(str);
    expect(string).toBe(true);
  });
});
