import Magician from '../js/Magician';

test('test attack', () => {
  const person = new Magician();
  person.setStoned(true);
  person.setAttack(2);
  const result = {
    attack: 85,
    stoned: true,
  };
  expect(person).toEqual(result);
});
