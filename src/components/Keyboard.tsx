import { clsx } from "clsx";
import type { JSX } from "react";

type KeyboardProps = {
  alphabet: string;
  guessedLetters: string[];
  currentWord: string;
  isGameOver: boolean;
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  alphabet,
  guessedLetters,
  currentWord,
  isGameOver,
  addGuessedLetter,
}: KeyboardProps): JSX.Element {
  const keyboardElements: JSX.Element[] = alphabet
    .split("")
    .map((letter: string): JSX.Element => {
      const isGuessed: boolean = guessedLetters.includes(letter);
      const isCorrect: boolean = isGuessed && currentWord.includes(letter);
      const isWrong: boolean = isGuessed && !currentWord.includes(letter);
      const className: string = clsx({
        correct: isCorrect,
        wrong: isWrong,
      });

      return (
        <button
          className={
            className +
            " text-zinc-900 font-bold h-[35px] w-[35px] bg-[#FCBA29] border border-solid border-[#D7D7D7] cursor-pointer"
          }
          key={letter}
          disabled={isGameOver}
          aria-disabled={isGuessed}
          aria-label={`Letter ${letter}`}
          onClick={() => addGuessedLetter(letter)}
        >
          {letter.toUpperCase()}
        </button>
      );
    });

  return (
    <section className="keyboard flex flex-wrap gap-[8px] justify-center max-w-[450px] mb-[36px]">
      {keyboardElements}
    </section>
  );
}
