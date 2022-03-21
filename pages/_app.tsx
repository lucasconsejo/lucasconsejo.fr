import "swiper/css";
import "swiper/css/pagination";
import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Script from "next/script";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log(
    "%cSalut ! 👋\nC'est gentil de vouloir porter attention à ce site.\nMais si tu es ici à des fins malveillantes 🕵\nMerci de passer ton chemin 💙\n\nJe reste néanmoins ouvert à la discussion pour parler cybersécurité 🔐\n@:lucas.consejo@gmail.com\n\nLucas Consejo 💻",
    "color: white; font-size: 13px"
  );
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Script
        src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"
        strategy="beforeInteractive"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
