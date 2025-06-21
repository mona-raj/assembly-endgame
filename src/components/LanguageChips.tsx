import { clsx } from "clsx";
import type { JSX } from "react";
import type { Language } from "../languages";

type LanguageChipsProps = {
  languages: Language[];
  wrongGuessCount: number;
};

export default function LanguageChips({
  languages,
  wrongGuessCount,
}: LanguageChipsProps): JSX.Element {
  const languageElements: JSX.Element[] = languages.map(
    (lang: Language, index: number): JSX.Element => {
      const isLanguageLost: boolean = index < wrongGuessCount;
      const styles: Omit<Language, "name"> = {
        backgroundColor: lang.backgroundColor,
        color: lang.color,
      };
      const className: string = clsx("chip", isLanguageLost && "lost");
      return (
        <span
          className={className + " rounded-[3px] p-[4.5px] relative"}
          style={styles}
          key={lang.name}
        >
          {lang.name}
        </span>
      );
    }
  );

  return (
    <section className="language-chips flex flex-wrap gap-[5px] justify-center max-w-[350px] mb-[36px]">
      {languageElements}
    </section>
  );
}
