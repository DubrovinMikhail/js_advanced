import Bowerman from '../js/bowerman';
import Deamon from '../js/deamon';
import Magician from '../js/magician';
import Swordsman from '../js/swordsman';
import Undead from '../js/undead';
import Zombie from '../js/zombie';

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

test('short name error testing', () => {
  expect(() => { new Bowerman('A'); }).toThrow(new Error('свойство "name" может быть длиной от 2 до 11 символов'));
});

test('error testing of long name', () => {
  expect(() => { new Bowerman('AllexxxksanderMansuperBoweerr'); }).toThrow(new Error('свойство "name" может быть длиной от 2 до 11 символов'));
});

test('error testing of type', () => {
  expect(() => { new Bowerman('Allex', 'bower'); }).toThrow(new Error('свойство "type" может быть одним из списка'));
});

test('testing levelUp', () => {
  const person = new Zombie('Zack');
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
  const person = new Zombie('Zack');
  person.health = -1;
  expect(() => { person.levelUp(); }).toThrow(new Error('Нельзя повысить level умершего'));
});

test('testing damage', () => {
  const person = new Zombie('Zack');
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
  const person = new Zombie('Zack');
  person.health = -1;
  expect(() => { person.damage(2); }).toThrow(new Error('у персонажа низкий уровень жизни'));
});
