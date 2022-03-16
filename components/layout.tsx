import React from "react";
import Header from "./header";
import TopScrollBtn from "./TopScrollBtn";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <TopScrollBtn />
    </>
  );
}
