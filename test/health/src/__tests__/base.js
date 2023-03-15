import healtIndicator from '../index';

test('test error', () => {
  const person = { name: 'Mar', health: 101 };
  const result = healtIndicator(person);
  expect(result).toBe('error');
});

test('test healthy', () => {
  const person = { name: 'Mar', health: 90 };
  const result = healtIndicator(person);
  expect(result).toBe('healthy');
});

test('test wounded', () => {
  const person = { name: 'Mar', health: 40 };
  const result = healtIndicator(person);
  expect(result).toBe('wounded');
});

test('test critical', () => {
  const person = { name: 'Mar', health: 10 };
  const result = healtIndicator(person);
  expect(result).toBe('critical');
});
