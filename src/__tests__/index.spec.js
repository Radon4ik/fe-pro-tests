import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries
} from '../index';

describe('changeStringCase()', () => {
  it('should return the modified string uppercase', () => {
    const result = changeStringCase('I love dance', 'uppercase');
    expect(result).toEqual('I LOVE DANCE');
  });
  it('should return the modified string uppercase ', () => {
    const result = changeStringCase('I love DANCE', 'lowercase');
    expect(result).toEqual('i love dance');
  });
  it('should return the modified string default ', () => {
    const result = changeStringCase('1', 'lowercase');
    expect(result).toEqual('1');

  });
});

describe('sumOfArray()', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = sumOfArray(array);
  it('should return the sum of the numbers', () => {
    expect(result).toEqual(45);
  });
  it('should return the sum of numbers only', () => {
    const array = [1, 'test', 3, 4, 5, 6, 7, 8, 9];
    const result = sumOfArray(array);
    expect(result).toEqual(43);
  });
});

describe('objectEntries()', () => {
  it('Should return an new array ', () => {
    const obj = { test: 'test', name: 'Radon', lastName: 'rtsdsf' };
    const result = objectEntries(obj);
    expect(result === obj).toEqual(false);
  });
});

describe('divisibleBy()', () => {
  it('should return a number that is equally divisible by 3', () => {
    const numbers = divisibleBy([1, 2, 3, 4, 5, 6], 3);
    expect(numbers).toEqual([3, 6]);
  });
  it('should return a number that is equally divisible by ', () => {
    const numbers = divisibleBy([1, 2, 3, 4, 5, 6], 2);
    expect(numbers).toEqual([2, 4, 6]);
  });
});

describe('addDotsToString()', () => {
  it('should return a string truncated by the specified number of characters ', () => {
    const result = addDotsToString('testtesttest', 8);
    expect(result).toEqual('testt...');
  });
  it('should return the string unchanged ', () => {
    const string = 'testtesttest';
    const result = addDotsToString(string, 12);
    expect(result.length >= string.length ).toEqual(true)
  });
});
