import React from "react";
import { Footer, Header, TopScrollBtn } from "components";
import I18nProvider from "contexts/i18nContext";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <I18nProvider>
      <Header />
      <main>{children}</main>
      <TopScrollBtn />
      <Footer />
    </I18nProvider>
  );
}
