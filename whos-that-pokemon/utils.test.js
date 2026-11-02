// utils.test.js · the robot's checklist. Run it with: npm test

import { test } from "node:test";
import assert from "node:assert";
import { randomNumber, pickIds, shuffle, capitalize } from "./utils.js";

// TODO 1: test("capitalize makes the first letter big", function () { ... })
//   - assert.strictEqual(capitalize("pikachu"), "Pikachu");

// TODO 2: test("pickIds gives 4 different numbers", function () { ... })
//   - const ids = pickIds(4, 151);
//   - assert.strictEqual(ids.length, 4);
//   - assert.strictEqual(new Set(ids).size, 4);

// TODO 3: test("shuffle keeps every item", function () { ... })
//   - const shuffled = shuffle([1, 2, 3, 4]);
//   - assert.deepStrictEqual(shuffled.slice().sort(), [1, 2, 3, 4]);

// TODO 4 (bonus): test that randomNumber(151) is between 1 and 151
//   - assert.ok(number >= 1 && number <= 151);
