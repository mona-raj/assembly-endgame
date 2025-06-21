import type { JSX } from "react";

type NewGameButtonProps = {
  isGameOver: boolean;
  startNewGame: () => void;
};

export default function NewGameButton({
  isGameOver,
  startNewGame,
}: NewGameButtonProps): JSX.Element | null {
  if (!isGameOver) {
    return null;
  } else {
    return (
      <button
        className="new-game text-zinc-900 font-bold bg-[#11B5E5] border border-[#D7D7D7] rounded-[4px] w-[225px] h-[40px] pt-[6px] pb-[6px] pl-[12px] pr-[12px] block mx-auto cursor-pointer"
        onClick={startNewGame}
      >
        New Game
      </button>
    );
  }
}
