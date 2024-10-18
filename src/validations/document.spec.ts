import {isValidCpf} from './document';

describe('validate cpf', () => {
  test('should is not cpf correctly', () => {
    expect(isValidCpf('111.111.111-11')).toBe(false);
  });
  test('should is cpf correctly', () => {
    expect(isValidCpf('775.820.310-83')).toBe(true);
  });
});
