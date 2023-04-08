export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(arg) {
    if (this.members.has(arg)) {
      throw new Error('Юзер с таким именем уже есть в команде');
    } else {
      this.members.add(arg);
    }
  }

  addAll(...args) {
    args.forEach((arg) => {
      this.members.add(arg);
    });
  }

  toArray() {
    const result = [];
    this.members.forEach((arg) => { result.push(arg); });
    return result;
  }
}
