const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);
const sword = new Weapon("Épée", 10);
heracles.weapon = sword;
const shield = new Shield(10);
heracles.shield = shield;

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive()
    ? {
        winner: fighter1,
        loser: fighter2,
      }
    : {
        winner: fighter2,
        loser: fighter1,
      };
};

// Combat loop
let round = 1;

while (heracles.isAlive() && boar.isAlive()) {
  console.log(`🕛 Round ${round}`);
  heracles.fight(boar);
  if (boar.isAlive()) {
    boar.fight(heracles);
  }
  console.log(roundDisplay(heracles, boar));
  round++;
}

const finalScore = score(heracles, boar);
console.log(`🏆 ${finalScore.winner.name} est le vainqueur !`);
console.log(`💀 ${finalScore.loser.name} est défait.`);
