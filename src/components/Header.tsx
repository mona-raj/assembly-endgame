import type { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="text-center">
      <h1 className="text-[2rem] font-bold hover:underline decoration-wavy decoration-2 decoration-light text-light cursor-pointer">Assembly: Endgame</h1>
      <p className="text-[0.875rem] max-w-[350px] text-[#8E8E8E]">
        Guess the word within 8 attempts to keep the programming world safe from
        Assembly!
      </p>
    </header>
  );
}
