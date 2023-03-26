import Zombie from '../js/zombie';

test('testing creat Zombie', () => {
  const person = {
    name: 'Zack',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Zombie('Zack');
  expect(result).toEqual(person);
});
