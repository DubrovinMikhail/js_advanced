import Bowerman from '../js/bowerman';

test('testing creat Bowerman', () => {
  const person = {
    name: 'Ivan',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Bowerman('Ivan');
  expect(result).toEqual(person);
});
