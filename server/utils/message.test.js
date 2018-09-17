var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var res = generateMessage('Hassan', 'Hello!');

        expect(res.from).toBe('Hassan');
        expect(res.text).toBe('Hello!');
        expect(res.createdAt).toBeA('number');
    });
});