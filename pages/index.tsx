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
      <About />
      <div ref={ref}>
        <Skills />
        {
          isRef && (
            <>
              <Career />
              <Projects />
              <Contact />
            </>
          )
        }
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
