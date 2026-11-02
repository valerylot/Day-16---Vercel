# 🎮 Who's That Pokémon? (Day 16)

A silhouette guessing game. 10 rounds, 4 choices each. Guess right to build a streak 🔥.
The data comes from [PokéAPI](https://pokeapi.co), free with no key.

| File | Job |
| --- | --- |
| `index.html` | The page. Loads `scripts.js` with `type="module"` |
| `styles.css` | The look, including the `.silhouette` trick (`filter: brightness(0)`) |
| `api.js` | Helper functions that talk to PokéAPI. Shares them with `export` |
| `utils.js` | Small helpers with no fetch and no page (random ids, shuffle, capitalize) |
| `scripts.js` | Brings the helpers in with `import` and runs the game |
| `utils.test.js` | Tests for `utils.js`. Run with `npm test` |
| `.github/workflows/ci.yml` | Tells GitHub Actions to run `npm test` on every push and PR |

## Run it on your laptop

Right-click `index.html` → **Open with Live Server**.
Modules don't work from a double-click (`file:///`).

## Run the tests

```bash
npm test
```

No `npm install` needed: the tests use Node's built-in test runner.

## 🚀 Deploy to Vercel

1. Push this folder to a **public GitHub repo**.
2. vercel.com → **Add New… → Project** → **Import** your repo.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty → **Deploy**.
4. Every push to `main` makes a new deploy. Every pull request gets its own **preview URL**.

## 🤖 GitHub Actions (afternoon code-along)

1. Fill in the 4 TODOs in `utils.test.js`, then run `npm test` until you see 4 ✔.
2. Create the folders and file `.github/workflows/ci.yml` (exact spelling: a dot, plural `workflows`, `.yml`).
3. Type the workflow from the slides: check out the code → use Node 20 → `npm test`.
4. `git add .` → `git commit -m "Add CI"` → `git push`, then open the **Actions** tab on GitHub.
