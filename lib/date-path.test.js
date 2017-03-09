const datePath = require('./date-path');

test('should return 2017/02 when the value of the data is new Date(2017, 1, 12)', () => {
  expect(datePath(new Date(2017, 1, 12))).toBe('2017/02/');
});

test('should return 2016/12 when the value of the data is new Date(2016, 11, 20)', () => {
  expect(datePath(new Date(2016, 11, 20))).toBe('2016/12/');
});
