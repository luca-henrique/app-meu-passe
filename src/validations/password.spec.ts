import {commonPasswords} from './password';

describe('validate commonPassword', () => {
  test('should is have', () => {
    expect(commonPasswords.length).toBe(4);
  });
});
