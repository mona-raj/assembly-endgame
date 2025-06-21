import clsx from "clsx";
import { getFarewellText } from "../utils";
import { languages } from "../languages";
import type { JSX } from "react";

type GameStatusProps = {
  isGameWon: boolean;
  isGameLost: boolean;
  isGameOver: boolean;
  isLastGuessIncorrect: boolean | "";
  wrongGuessCount: number;
};

export default function GameStatus({
  isGameWon,
  isGameLost,
  isGameOver,
  isLastGuessIncorrect,
  wrongGuessCount,
}: GameStatusProps): JSX.Element {
  const gameStatusClass: string = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  return (
    <section
      aria-live="polite"
      role="status"
      className={
        gameStatusClass +
        " mr-auto ml-auto flex flex-col justify-center items-center text-light w-[100%] max-w[350px] min-h[60px] rounded-[4px] m-[30px]"
      }
    >
      {!isGameOver && isLastGuessIncorrect && (
        <p className="farewell-message italic font-normal">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      )}

      {isGameWon && (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )}

      {isGameLost && (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )}

      {/* If none of the above conditions met, render nothing inside but keep the section */}
    </section>
  );
}
