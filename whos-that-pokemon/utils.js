// =====================================================================
// 🧰 utils.js · small helpers with no fetch and no page
// Because they only take values in and give values back, the
// GitHub Actions robot can test them (see utils.test.js).
// =====================================================================

// A random whole number from 1 to max.
function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

// `count` different random numbers from 1 to max. No repeats.
function pickIds(count, max) {
  const ids = [];

  while (ids.length < count) {
    const id = randomNumber(max);

    if (!ids.includes(id)) {
      ids.push(id);
    }
  }

  return ids;
}

// A shuffled copy of the list. The original list is not changed.
function shuffle(list) {
  const copy = list.slice();
  copy.sort(function () {
    return Math.random() - 0.5;
  });
  return copy;
}

// "pikachu" → "Pikachu"
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export { randomNumber, pickIds, shuffle, capitalize };
