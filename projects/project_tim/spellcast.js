/* © 2022 Tim Niedermeier | Hochschule für Gestaltung - Schwäbisch Gmünd */

/* Creates a dictionary to make use of shortcuts */
const spellOptions = {
  fire: "assets/fire.png",
  water: "assets/water.png",
  plant: "assets/plant.png",
  bloodlust: "assets/blood.png",
};

let PlayerLIFE = 100;
let EnemyLIFE = 100;

const playgame = (play) => {
  /* Function if user made his choise */
  console.log(play); /* Data connection what is clicked */

  // hide the current page
  let start = document.querySelector(".start");
  start.style.display = "none";

  // show next page
  let lifeboard = document.querySelector(".lifeboard");
  lifeboard.style.display = "flex";
  let spells = document.querySelector(".spells");
  spells.style.display = "flex";
  const wizardmessage1 = "I'm glad to see you. we need your help urgently...";
  const wizardmessage2 =
    "Where once there was peace, now there is war. \nAll able men and women are called together...";
  const wizardmessage3 =
    "I will cast a spell on you that will allow you to use magic. \nBut be careful, not everyone is able to use it properly.";
  const wizardmessage4 =
    "Hocus Pocus vires per potentiam, spēks ar jaudu, \nstyrke gennem overlegenhed. Halál minden ellenségre en allen die u met hen hebben geallieerd.";
  /* wizardmessage4 is a mix of various languages, including latin, latvian, danish, hungarian and dutch  */
  /*Translation: Strength through power, strength through force, strength through superiority. Death to all enemies and all those who have allied with them.*/
  alert(wizardmessage1);
  alert(wizardmessage2);
  alert(wizardmessage3);
  alert(wizardmessage4);
};

const pickUserSpell = (spell) => {
  /* Function if user made his choise */
  // hide the current page
  let spells = document.querySelector(".spells");
  spells.style.display = "none";
  // show next page with spell user picked
  let casting = document.querySelector(".casting");
  casting.style.display = "flex";

  /* Set user pick */
  document.getElementById("userPickSpell").src = spellOptions[spell];

  let cpSpell = opponentSpell();
  outcome(spell, cpSpell);
};

const opponentSpell = () => {
  let spells = ["fire", "water", "plant"];
  let cpSpell =
    spells[Math.floor(Math.random() * 3)]; /* To get a random pick */

  /* Set Comuputer spell */
  document.getElementById("adversarySpell").src = spellOptions[cpSpell];

  return cpSpell;
};

const outcome = (spell, cpSpell) => {
  /* Cases in which player would win */
  if (spell == "fire" && cpSpell == "plant") {
    // CREATE GLOBAL VARIABLES FOR THE MESSAGES. USE THEM INSTEAD OF DUPLICATING STRINGS
    setDecision("Round won");
    setDecisionInfo(
      "Your Conflagration demolished enemies Overgrowing. The toxic smoke attacks its lungs."
    );
    setDecisionLife("Enemy lost 20 life points");
    setLifeEnemy(EnemyLIFE - 20);
  }

  if (spell == "water" && cpSpell == "fire") {
    setDecision("Round won");
    setDecisionInfo(
      "Your Inundation stopped enemies Conflagration. The waves have injured your opponent."
    );
    setDecisionLife("Enemy lost 20 life points");
    setLifeEnemy(EnemyLIFE - 20);
  }

  if (spell == "plant" && cpSpell == "water") {
    setDecision("Round won");
    setDecisionInfo(
      "Overgrowing stopped enemies Inundation. Your wild animals have bitten your opponent."
    );
    setDecisionLife("Enemy lost 20 life points");
    setLifeEnemy(EnemyLIFE - 20);
  }

  /* cases in which player would lose */
  if (spell == "fire" && cpSpell == "water") {
    setDecision("Round lost");
    setDecisionInfo(
      "Your Conflagnation was stopped by Inundation. The waves have injured your insides."
    );
    setDecisionLife("You lost 20 life points");
    setLifePlayer(PlayerLIFE - 20);
  }

  if (spell == "water" && cpSpell == "plant") {
    setDecision("Round lost");
    setDecisionInfo(
      "Overgrowing stoped your Inundation. Your opponent's wild animals have bitten you."
    );
    setDecisionLife("You lost 20 life points");
    setLifePlayer(PlayerLIFE - 20);
  }

  if (spell == "plant" && cpSpell == "fire") {
    setDecision("Round lost");
    setDecisionInfo(
      "Your Overgrowing was demolished by Conflagration. The toxic smoke attacks your lungs."
    );
    setDecisionLife("You lost 20 life points");
    setLifePlayer(PlayerLIFE - 20);
  }

  /* This will bound your Blood - Player will be hit but enemy to */
  if (spell == "bloodlust") {
    setDecision("Bloodlust");
    setDecisionInfo(
      "You had been injured, there was nothing to defend with but your opponent suffered the same"
    );
    setDecisionLife("You both lost life points");
    setLifePlayer(PlayerLIFE - [Math.round(Math.random() * 30)]);
    setLifeEnemy(EnemyLIFE - [Math.round(Math.random() * 30)]);
  } /* The original idea of bloodlust was dropped, beacuse it would give the player a far to good advantage */

  /* Could be a tie but not here - both will lose life */
  if (spell == "fire" && cpSpell == "fire") {
    setDecision("Conflagration");
    setDecisionInfo(
      "Your Conflagrations turned into one, to powerful for any of you to bind."
    );
    setDecisionLife("All lost 10 life points");
    setLifePlayer(PlayerLIFE - 10);
    setLifeEnemy(EnemyLIFE - 10);
  }

  if (spell == "water" && cpSpell == "water") {
    setDecision("Inundation");
    setDecisionInfo(
      "Your Inundations caused a Tsunami. Both of you get injured from the Wave."
    );
    setDecisionLife("All lost 10 life points");
    setLifePlayer(PlayerLIFE - 10);
    setLifeEnemy(EnemyLIFE - 10);
  }

  if (spell == "plant" && cpSpell == "plant") {
    setDecision("Overgrowing");
    setDecisionInfo(
      "Your Overgrowing ends up in a mystical forest. To get free you had to perform a pagan ritual."
    );
    setDecisionLife("All lost 10 life points");
    setLifePlayer(PlayerLIFE - 10);
    setLifeEnemy(EnemyLIFE - 10);
  }
  if (ClashWinner()) {
    PlayerLIFE = 100;
    EnemyLIFE = 100;
  }
};

/* Button to continue the Game */
const restart = () => {
  let start = document.querySelector(".start");
  start.style.display = "none";
  let casting = document.querySelector(".casting");
  casting.style.display = "none";

  // show next page
  let lifeboard = document.querySelector(".lifeboard");
  lifeboard.style.display = "flex";
  let spells = document.querySelector(".spells");
  spells.style.display = "flex";
  updateLife();
  if (EnemyLIFE > 41) {
    document.querySelector(".enemyLIFE h1").style.color = "black";
  }
  if (PlayerLIFE > 41) {
    document.querySelector(".playerLIFE h1").style.color = "black";
  }
};

/* Set the decision Text */
const setDecision = (decision) => {
  document.querySelector(".decision h2").innerText = decision;
};

const setDecisionInfo = (decisionInfo) => {
  document.querySelector(".decisionInfo p").innerText = decisionInfo;
};

const setDecisionLife = (decisionLife) => {
  document.querySelector(".decisionLife b").innerText = decisionLife;
};

/* Update the life */
const setLifePlayer = (playerLIFE) => {
  PlayerLIFE = playerLIFE;
  document.querySelector(".playerLIFE h1").innerText = playerLIFE;
  /* Change the color if enemy life */
  if (PlayerLIFE < 41) {
    document.querySelector(".playerLIFE h1").style.color = "darkred";
  }
};

const setLifeEnemy = (enemyLIFE) => {
  EnemyLIFE = enemyLIFE;
  document.querySelector(".enemyLIFE h1").innerText = enemyLIFE;
  /* Change the color if enemy life */
  if (EnemyLIFE < 41) {
    document.querySelector(".enemyLIFE h1").style.color = "darkred";
  }
};

/* This will update the Life */
function updateLife() {
  document.querySelector(".playerLIFE h1").innerText = PlayerLIFE;
  document.querySelector(".enemyLIFE h1").innerText = EnemyLIFE;
}

function ClashWinner() {
  if (PlayerLIFE < 1 && EnemyLIFE < 1) {
    const draw =
      "The adversary was defeated, \nbut you succumbed to your wounds. \nNext time don't play kamikatze. \nThe magic available is reserved for capable people.";
    alert(draw);
    return true;
  }

  if (PlayerLIFE < 1) {
    const loser =
      "You sirussly died. \nClose this tab to continue and retry. \nBesides you should try harder next time.";
    alert(loser);
    return true;
  }

  if (EnemyLIFE < 1) {
    const winner =
      "You win this fight! \nThere are more enemies to deal with. \nDo not rest, continue the campaign.";
    alert(winner);
    return true;
  }
  return false;
}
