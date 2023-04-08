import ErrorRepository from '..';

test('test translate unknown error', () => {
  const readPrintError = new ErrorRepository();
  readPrintError.errors.set(101, 'read Error');
  expect(readPrintError.translate(103)).toBe('Unknown error');
});

test('test translate succes', () => {
  const readPrintError = new ErrorRepository();
  readPrintError.errors.set(101, 'read Error');
  expect(readPrintError.translate(101)).toBe('read Error');
});
