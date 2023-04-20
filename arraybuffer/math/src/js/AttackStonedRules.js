export default class AttackStonedRules {
  constructor() {
    this.stoned = false;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(value) {
    this.stoned = value;
  }

  getAttack() {
    return this.attack;
  }

  setAttack(value) {
    if (value > 10) {
      this.attack = 0;
    } else {
      this.attack *= (1 - (value - 1) / 10);
      if (this.stoned) {
        this.attack -= Math.log2(value) * 5;
      }
    }
  }
}
