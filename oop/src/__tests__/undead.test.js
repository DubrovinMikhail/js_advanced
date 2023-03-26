import Undead from '../js/undead';

test('testing creat Undead', () => {
  const person = {
    name: 'Uliy',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Undead('Uliy');
  expect(result).toEqual(person);
});
