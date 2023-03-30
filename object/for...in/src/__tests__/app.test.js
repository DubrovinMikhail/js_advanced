import orderByProps from '../app';

test('orderByProps testing for errror transfer of an empty object', () => {
  const user = {};
  const propsList = ['name', 'health'];
  expect(() => { orderByProps(user, propsList); }).toThrow(new Error('Передаваемый объект пуст'));
});

test('orderByProps testing for errror transfer of an empty propertis list', () => {
  const user = {
    name: 'Alex',
    health: 100,
    level: 1,
    attack: 20,
    defence: 50,
  };
  const propsList = [];
  expect(() => { orderByProps(user, propsList); }).toThrow(new Error('передаваемый список свойств пуст'));
});

test('orderByProps testing for success', () => {
  const user = {
    name: 'Alex',
    health: 100,
    level: 1,
    attack: 20,
    defence: 50,
  };
  const propsList = ['name', 'health'];
  const result = [
    { key: 'name', value: 'Alex' },
    { key: 'health', value: 100 },
    { key: 'attack', value: 20 },
    { key: 'defence', value: 50 },
    { key: 'level', value: 1 },
  ];
  expect(orderByProps(user, propsList)).toEqual(result);
});

test('orderByProps testing for invalid prperty in list', () => {
  const user = {
    name: 'Alex',
    health: 100,
    level: 1,
    attack: 20,
    defence: 50,
  };
  const propsList = ['name', 'balance'];
  const result = [
    { key: 'name', value: 'Alex' },
    { key: 'attack', value: 20 },
    { key: 'defence', value: 50 },
    { key: 'health', value: 100 },
    { key: 'level', value: 1 },
  ];
  expect(orderByProps(user, propsList)).toEqual(result);
});
