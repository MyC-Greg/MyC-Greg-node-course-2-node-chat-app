var expect = require ('expect');

var {generateMessage,generateLocationMessage} = require ('./message');

describe('generateMessage', () => {
  it ('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
  });

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Greg';
    var lat = 1;
    var long = 1;
    var location = generateLocationMessage(from, lat, long);

    expect(location.createdAt).toBeA('number');
    expect(location.from).toBe(from);
    expect(location.url).toBe('https://www.google.com/maps?q=1,1');
  });
});
