import { I18nContext } from "contexts/i18nContext";
import { i18nIntro } from "i18n";
import { useContext } from "react";
import Character from "./Character";
import ScrollInfo from './ScrollInfo/index';
import TitleContainer from "./TitleContainer";

export default function Introduction() {
  const { localeState } = useContext(I18nContext);
  const { scrollInfo } = i18nIntro[localeState];

  return (
    <div>
      <div id="intro" className="flex flex-col justify-start items-center sm:flex-row sm:justify-start pt-36 sm:pt-0">
        <TitleContainer />
        <Character />
      </div>
      <ScrollInfo text={scrollInfo} />
    </div>
  );
}
