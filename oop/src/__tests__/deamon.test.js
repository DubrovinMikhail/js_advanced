import Deamon from '../js/deamon';

test('testing creat Deamon', () => {
  const person = {
    name: 'Dmitry',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = new Deamon('Dmitry');
  expect(result).toEqual(person);
});
