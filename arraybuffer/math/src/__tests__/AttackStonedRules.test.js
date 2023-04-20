import AttackStonedRules from '../js/AttackStonedRules';

test('test getStoned', () => {
  const person = new AttackStonedRules();
  expect(person.getStoned()).toBe(false);
});

test('test setStoned', () => {
  const person = new AttackStonedRules();
  person.setStoned(true);
  const result = {
    stoned: true,
  };
  expect(person).toEqual(result);
});

test('test getAttack', () => {
  const person = new AttackStonedRules();
  person.attack = 100;
  expect(person.getAttack()).toBe(100);
});

test('test setAttack long distance', () => {
  const person = new AttackStonedRules();
  person.setAttack(12);
  expect(person.attack).toBe(0);
});

test('test setAttack shortr distance without stoned', () => {
  const person = new AttackStonedRules();
  person.attack = 100;
  person.setAttack(2);
  expect(person.attack).toBe(90);
});

test('test setAttack shortr distance with stoned', () => {
  const person = new AttackStonedRules();
  person.attack = 100;
  person.stoned = true;
  person.setAttack(2);
  expect(person.attack).toBe(85);
});
