import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import useLazyLoading from "hooks/useLazyLoading";
import { Header, TopScrollBtn } from "components";
const Footer = dynamic(() => import("components/Footer"));
import I18nProvider from "contexts/i18nContext";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const ref = useRef<any>();
  const refValue = useLazyLoading(ref);
  const [isRef, setIsRef] =  useState(false);

  useEffect(() => {
    if (!isRef)
      setIsRef(refValue);
  }, [isRef, refValue]);

  return (
    <I18nProvider>
      <Header />
      <main>{children}</main>
      <TopScrollBtn />
      <div ref={ref}>
        {isRef && <Footer />}
      </div>
    </I18nProvider>
  );
}
