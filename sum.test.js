const sum = (a, b) => {
  return a + b;
};

it('2 + 3 equals 5', () => {
  expect(sum(2, 3)).toBe(5);
});

it('12 + 3 equals 15', () => {
  expect(sum(12, 3)).toBe(15);
});

it('7 + 4 should be equal to 4 + 7', () => {
  expect(sum(7, 4)).toBe(sum(4, 7));
});
