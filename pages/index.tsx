import dynamic from "next/dynamic";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import useLazyLoading from "hooks/useLazyLoading";
import {
  Metas,
  Layout,
  Introduction,
  About,
  Skills,
} from "components";
const Career = dynamic(() => import("components/Career"));
const Projects = dynamic(() => import("components/Projects"));
const Contact = dynamic(() => import("components/Contact"));
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
  const ref = useRef<any>();
  const refValue = useLazyLoading(ref);
  const [isRef, setIsRef] =  useState(false);

  useEffect(() => {
      if (!isRef)
        setIsRef(refValue);
  }, [isRef, refValue]);

  return (
    <div>
      <Metas title={title} description={description} />
      <Introduction />
      <div ref={ref}>
        <About />
        <Skills />
      </div>
      {
        isRef ? (
          <>
            <Career />
            <Projects />
            <Contact />
          </>
        ) : (
          <div className="flex justify-center">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )
      }
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
