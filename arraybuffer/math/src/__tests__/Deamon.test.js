import Deamon from '../js/Deamon';

test('test attack', () => {
  const person = new Deamon();
  person.setStoned(true);
  person.setAttack(2);
  const result = {
    attack: 85,
    stoned: true,
  };
  expect(person).toEqual(result);
});
