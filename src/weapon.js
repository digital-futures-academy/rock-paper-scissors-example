const RULES = {
  paper: 'rock',
  rock: 'scissors',
  scissors: 'paper'
}

class Weapon {
  constructor(type) {
    this.type = type || this.random()
  }

  random() {
    return Object.keys(RULES)[Math.floor(Math.random() * 3)]
  }

  against(weapon) {
    if (this.type === weapon.type) {
      return 'draw'
    } else if (RULES[this.type] === weapon.type) {
      return 'win'
    } else {
      return 'lose'
    }
  }
}

module.exports = Weapon
