import { Title } from "components";
import { I18nContext } from "contexts/i18nContext";
import { i18nCareer } from "i18n";
import { useContext } from "react";
import List from "./List";

export default function Career() {
  const { localeState } = useContext(I18nContext);
  const { title, subTitle, content } = i18nCareer[localeState];

  return (
    <div id="career" className="flex flex-col md:flex-row items-center md:items-start md:justify-around lg:justify-center lg:space-x-12 md:pt-10 max-w-screen-2xl mx-auto">
      <Title
        title={title}
        subTitle={subTitle}
        align="left"
        className="pt-0 sm:pt-0 md:pt-0 lg:pt-0"
      />
      <List content={content} />
    </div>
  );
}
