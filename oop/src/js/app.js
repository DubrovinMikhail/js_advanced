class Character {
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

exports.Bowerman = class Bowerman extends Character {
  constructor(name, type = 'Bowerman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
};

exports.Deamon = class Deamon extends Character {
  constructor(name, type = 'Deamon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
};

exports.Magician = class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
};

exports.Swordsman = class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
};

exports.Undead = class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
};

exports.Zombie = class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
};
