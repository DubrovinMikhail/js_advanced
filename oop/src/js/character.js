export default class Character {
  static typeList = ['Bowerman', 'Deamon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

  constructor(name, type) {
    if (name.length < 2 || name.length > 11) {
      throw new Error('свойство "name" может быть длиной от 2 до 11 символов');
    }
    if (!Character.typeList.includes(type)) {
      throw new Error('свойство "type" может быть одним из списка');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health < 0) {
      throw new Error('Нельзя повысить level умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('у персонажа низкий уровень жизни');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
