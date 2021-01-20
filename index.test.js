const { sum } = require('./index');

test('5 + 3', () => {
	expect(sum(5, 3)).toBe(8);
});
