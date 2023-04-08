import Team from '..';

test('test add', () => {
  const dreamTeam = new Team();
  dreamTeam.add('Rico');
  expect(() => { dreamTeam.add('Rico'); }).toThrow(new Error('Юзер с таким именем уже есть в команде'));
});

test('test addAll', () => {
  const dreamTeam = new Team();
  dreamTeam.addAll('Rico', 'Marty', 'Alex');
  const result = new Set(['Rico', 'Marty', 'Alex']);
  expect(dreamTeam.members).toEqual(result);
});

test('test toArray', () => {
  const dreamTeam = new Team();
  dreamTeam.add('Rico');
  dreamTeam.add('Mike');
  dreamTeam.add('Alex');
  const result = ['Rico', 'Mike', 'Alex'];
  expect(dreamTeam.toArray()).toEqual(result);
});
