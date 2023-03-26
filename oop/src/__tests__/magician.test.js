import Magician from '../js/magician';

test('testing creat Magician', () => {
  const person = {
    name: 'Maxim',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = new Magician('Maxim');
  expect(result).toEqual(person);
});
