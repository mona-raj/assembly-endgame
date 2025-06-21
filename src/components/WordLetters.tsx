import { clsx } from "clsx";
import type { JSX } from "react";

type WordLettersProps = {
  currentWord: string
  guessedLetters: string[]
  isGameLost: boolean
}

export default function WordLetters({
  currentWord,
  guessedLetters,
  isGameLost,
}: WordLettersProps): JSX.Element {
  return (
    <section className="word flex justify-center gap-[2px] mb-[20px]">
      {currentWord.split("").map((letter: string, index: number): JSX.Element => {
        const shouldRevealLetter: boolean =
          isGameLost || guessedLetters.includes(letter);
        const letterClassName: string = clsx(
          isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        );
        return (
          <span
            key={index}
            className={
              letterClassName +
              " h-[40px] w-[40px] bg-[#323232] flex justify-center items-center text-[1.125rem] border-b border-b-solid border-b-light"
            }
          >
            {shouldRevealLetter ? letter.toUpperCase() : ""}
          </span>
        );
      })}
    </section>
  );
}
