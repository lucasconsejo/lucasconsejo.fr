import React from "react";
import { Header, TopScrollBtn, Footer } from "components";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <TopScrollBtn />
      <Footer />
    </>
  );
}
