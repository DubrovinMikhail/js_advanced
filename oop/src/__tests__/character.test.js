import Character from '../js/character';

test('short name error testing', () => {
  expect(() => { new Character('A', 'Bowerman'); }).toThrow(new Error('свойство "name" может быть длиной от 2 до 11 символов'));
});

test('error testing of long name', () => {
  expect(() => { new Character('AllexxxksanderMansuperBoweerr', 'Bowerman'); }).toThrow(new Error('свойство "name" может быть длиной от 2 до 11 символов'));
});

test('error testing of type', () => {
  expect(() => { new Character('Allex', 'bower'); }).toThrow(new Error('свойство "type" может быть одним из списка'));
});

test('testing levelUp', () => {
  const person = new Character('Zack', 'Zombie');
  const result = {
    name: 'Zack',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: person.attack * 1.2,
    defence: person.defence * 1.2,
  };
  person.levelUp();
  expect(result).toEqual(person);
});

test('testing levelUp error', () => {
  const person = new Character('Zack', 'Zombie');
  person.health = -1;
  expect(() => { person.levelUp(); }).toThrow(new Error('Нельзя повысить level умершего'));
});

test('testing damage', () => {
  const person = new Character('Zack', 'Zombie');
  person.attack = 40;
  person.defence = 10;
  const points = 2;
  const result = {
    name: 'Zack',
    type: 'Zombie',
    health: person.health - points * (1 - person.defence / 100),
    level: 1,
    attack: 40,
    defence: 10,
  };
  person.damage(points);
  expect(result).toEqual(person);
});

test('testing damage error', () => {
  const person = new Character('Zack', 'Zombie');
  person.health = -1;
  expect(() => { person.damage(2); }).toThrow(new Error('у персонажа низкий уровень жизни'));
});
