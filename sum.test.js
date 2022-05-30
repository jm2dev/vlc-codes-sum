const sum = (a, b) => {
  return a + b;
};

describe('sum 2 numbers', () => {
  it('2 + 3 equals 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('12 + 3 equals 15', () => {
    expect(sum(12, 3)).toBe(15);
  });
});

describe('commutative property', () => {
  it('7 + 4 should be equal to 4 + 7', () => {
    expect(sum(7, 4)).toBe(sum(4, 7));
  });
});

describe('associative property', () => {
  it('(7 + 2) + 1 equals to 7 + (2 + 1)', () => {
    const actual = sum(sum(7, 2), 1);
    const expected = sum(7, sum(2, 1));
    expect(actual).toBe(expected);
  });
});
