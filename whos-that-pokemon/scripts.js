// =====================================================================
// 🎮 scripts.js · Who's That Pokémon?
// It imports the helpers and runs the game on the page.
// =====================================================================

import { getPokemonList, getPokemon } from "./api.js";
import { pickIds, shuffle, capitalize } from "./utils.js";

const TOTAL_ROUNDS = 10;
const MAX_ID = 151; // the original 151 Pokémon

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const pokemonImg = document.getElementById("pokemon-img");
const message = document.getElementById("message");
const choices = document.getElementById("choices");
const roundText = document.getElementById("round");
const scoreText = document.getElementById("score");
const streakText = document.getElementById("streak");

let allPokemon = []; // the 151 names, loaded once
let round = 0;
let score = 0;
let streak = 0;

function updateScoreboard() {
  roundText.textContent = round;
  scoreText.textContent = score;
  streakText.textContent = streak;

  if (streak >= 3) {
    streakText.textContent = streak + " 🔥"; // on fire!
  }
}

async function startGame() {
  startButton.hidden = true;
  message.textContent = "Loading Pokémon… ⏳";

  // Only fetch the list the first time.
  if (allPokemon.length === 0) {
    allPokemon = await getPokemonList(MAX_ID);
  }

  round = 0;
  score = 0;
  streak = 0;

  await newRound();
}

async function newRound() {
  round = round + 1;
  updateScoreboard();

  nextButton.hidden = true;
  choices.textContent = ""; // clear the old buttons
  message.textContent = "Loading… ⏳";

  // 4 different Pokémon. The first one is the answer.
  const ids = pickIds(4, MAX_ID);
  const answer = await getPokemon(ids[0]);

  // Black it out BEFORE the new picture loads, so nobody sees it early.
  pokemonImg.classList.add("silhouette");
  pokemonImg.src = answer.image;
  pokemonImg.hidden = false;

  message.textContent = "Hint: it's a " + answer.type + " type!";

  for (const id of shuffle(ids)) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = capitalize(allPokemon[id - 1].name);

    button.addEventListener("click", function () {
      checkAnswer(button, answer);
    });

    choices.appendChild(button);
  }
}

function checkAnswer(clickedButton, answer) {
  const answerName = capitalize(answer.name);

  // Reveal the Pokémon in full color.
  pokemonImg.classList.remove("silhouette");

  if (clickedButton.textContent === answerName) {
    score = score + 1;
    streak = streak + 1;
    message.textContent = "✅ It's " + answerName + "!";
  } else {
    streak = 0;
    clickedButton.classList.add("wrong");
    message.textContent = "❌ Nope, it's " + answerName + "!";
  }

  // Lock every button and paint the right answer green.
  for (const button of choices.children) {
    button.disabled = true;

    if (button.textContent === answerName) {
      button.classList.add("correct");
    }
  }

  updateScoreboard();

  if (round === TOTAL_ROUNDS) {
    message.textContent += " 🏁 Final score: " + score + " / " + TOTAL_ROUNDS;
    startButton.textContent = "Play again 🔁";
    startButton.hidden = false;
  } else {
    nextButton.hidden = false;
  }
}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", newRound);
