import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { useLazyLoading, useWindowSize } from "hooks";
import { i18nMetas } from "i18n";
import { I18nContext } from '../contexts/i18nContext';
import { lang } from "utils";
import { Metas, Layout, Introduction, About, Skills } from "components";
const Career = dynamic(() => import("components/Career"));
const Projects = dynamic(() => import("components/Projects"));
const Contact = dynamic(() => import("components/Contact"));

export default function Home() {
  const { width } = useWindowSize(); 
  const { locale } = useRouter();
  const ref = useRef<any>();
  const refValue = useLazyLoading(ref);
  const [isRef, setIsRef] =  useState(false);
  const { localeState, localeDispatch } = useContext(I18nContext);
  localeDispatch({ 
      type: "UPDATE_LANG",
      payload: lang(locale)
  });
  const { title, description } = i18nMetas[localeState];

  useEffect(() => {
    if (!isRef) {
      setIsRef(refValue);
    }
  }, [isRef, refValue]);

  const LazyLoading = () => {
    if (width > 480) {
      return isRef ? <Sections /> : null;
    } else {
      return <Sections />;
    }
  }

  return (
    <div>
      <Metas title={title} description={description} />
      <Introduction />
      <div ref={ref}>
        <About />
        <Skills />
      </div>
      <LazyLoading />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

function Sections() {
  return (
    <>
      <Career />
      <Projects />
      <Contact />
    </>
  );
}
