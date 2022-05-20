import { ReactElement, useContext } from "react";
import {
  Metas,
  Layout,
  Introduction,
  About,
  Skills,
  Career,
  Projects,
  Contact,
} from "components";
import { useRouter } from "next/router";
import { i18nMetas } from "i18n";
import { I18nContext } from '../contexts/i18nContext';
import { lang } from "utils";

export default function Home() {
  const { locale } = useRouter();
  const { localeState, localeDispatch } = useContext(I18nContext);
  localeDispatch({ 
      type: "UPDATE_LANG",
      payload: lang(locale)
  });
  const { title, description } = i18nMetas[localeState];
  return (
    <div>
      <Metas title={title} description={description} />
      <Introduction />
      <About />
      <Skills />
      <Career />
      <Projects />
      <Contact />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
