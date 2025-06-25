# Assembly Endgame 🎮
A modern twist on Hangman built with React, Vite, TypeScript, and Tailwind CSS. Instead of a hanging figure, each wrong guess causes a programming language to "die". Can you save them all?

Live demo: [Assembly Endgame](https://monaraj.com/assembly-endgame/)

Source code: [GitHub](https://github.com/mona-raj/assembly-endgame)

## 🧩 Features
- Classic Word Guessing: Random word selection from a predefined list.

- Visual Stakes: Each incorrect guess “kills” one programming language as visual feedback.

- Keyboard UI: Clickable and responsive on‑screen keyboard with disabled states for used letters.

- Game Flow: Win when the word is correctly guessed, or lose when all languages are gone.

- Responsive Design: Optimized for desktop and mobile with Tailwind CSS layout.

- Built with Modern Stack: Vite + React + TypeScript + Tailwind CSS + ESLint.

## 🚀 Getting Started
1. Clone the repo

    ```bash
    git clone https://github.com/mona-raj/assembly-endgame.git
    cd assembly-endgame
    ```
2. Install dependencies

    ```bash
    npm install
    # or yarn
    ```

3. Run the development server

    ```bash
    npm run dev
    # or yarn dev
    ```
    Open http://localhost:5173 to play.

## 🎨 How It Works
- Game state managed using React hooks (useState, useEffect).

- Words & languages stored in constants/; game randomly selects one word per round.

- UI Components:

  - HangmanBoard: Displays guessed letters, underscores, and tracks wrong attempts.

  - Keyboard: Interactive UI for guessing letters.

  - LanguageBar: Visual indicator of remaining programming languages.

- Game logic compares player input to word, updates UI, and handles win/loss.

## 🛠️ Contributions
Contributions are welcome!

- Submit bug reports or feature requests via GitHub Issues.

- Fork the repo, create a feature branch, commit & push.

- Open a Pull Request—I'd love to review!

## ✨ Final Thoughts
Assembly Endgame offers an engaging twist on Hangman, combining game mechanics with developer humor—every wrong guess has visual stakes. Built with modern web tooling and good UX in mind, it’s fun to play.

