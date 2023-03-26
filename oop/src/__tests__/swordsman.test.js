import Swordsman from '../js/swordsman';

test('testing creat Swordsman', () => {
  const person = {
    name: 'Swort',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Swordsman('Swort');
  expect(result).toEqual(person);
});
