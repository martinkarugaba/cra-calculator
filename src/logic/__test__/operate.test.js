import operate from '../operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate('5', '7', '+')).toBe('12');
  });

  it('subtracts two numbers', () => {
    expect(operate('9', '3', '-')).toBe('6');
  });

  it('multiplies two numbers', () => {
    expect(operate('3', '7', 'x')).toBe('21');
  });

  it('divides two numbers', () => {
    expect(operate('8', '2', '÷')).toBe('4');
  });

  it('handles division by zero', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('calculates modulus', () => {
    expect(operate('7', '2', '%')).toBe('1');
  });

  it('handles modulus with division by zero', () => {
    expect(operate('10', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });

  it('throws an error for unknown operation', () => {
    expect(() => operate('2', '3', '^')).toThrow(
      "Unknown operation '^'",
    );
  });
});
