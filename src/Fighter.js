const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = null; // Nouvelle propriété pour l'arme
    this.shield = null; // Nouvelle propriété pour le bouclier
  }

  // Launch a fight
  fight(defender) {
    const attackPoints = this.getRandomInt(this.getDamage());
    const damages = Math.max(attackPoints - defender.getDefense(), 0);
    defender.life = Math.max(defender.life - damages, 0);
    console.log(
      `${this.name} attaque ${defender.name} et inflige ${damages} points de dommage.`
    );
  }

  // Generate a random value between 1 and max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  // Determine if a fighter is still alive
  isAlive() {
    return this.life > 0;
  }

  // Get the total damage including weapon
  getDamage() {
    return this.strength + (this.weapon ? this.weapon.damage : 0);
  }

  // Get the total defense including shield
  getDefense() {
    return this.dexterity + (this.shield ? this.shield.protection : 0);
  }
}

module.exports = Fighter;
