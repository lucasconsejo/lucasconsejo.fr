import Head from "next/head";
import React from "react";
import useSystemTheme from "react-use-system-theme";

type MetasProps = {
  title: string;
  description?: string;
};

function Metas({ title, description }: MetasProps) {
  const systemTheme = useSystemTheme();
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description ?? description} />
      <meta name="robots" content="noimageindex" />
      {systemTheme !== "dark" && (
        <>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/manifest/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#160a3e" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
        </>
      )}
      {systemTheme === "dark" && (
        <>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-dark-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-dark-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-dark-16x16.png" />
          <link rel="manifest" href="/manifest/site-dark.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab-dark.svg" color="#160a3e" />
          <link rel="shortcut icon" href="/favicons/favicon-dark.ico" />
      </>
      )}
      <link rel="canonical" href="https://lucasconsejo.fr" />
      <meta name="author" content="Lucas Consejo"></meta>
      <meta name="theme-color" content="rgb(16, 5, 36)"></meta>
      <meta property="og:title" content={title} />
      <meta property="og:image" content="https://www.lucasconsejo.fr/img/og/lucasconsejo.png"/>
      <meta property="og:image:secure_url" content="https://www.lucasconsejo.fr/img/og/lucasconsejo.png"/>
      <meta property="og:image:type" content="image/png"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:description" content={description ?? description} />
      <meta property="og:url" content="https://www.lucasconsejo.fr" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Lucas Consejo" />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="lucasconsejo.fr"/>
      <meta property="twitter:url" content="https://www.lucasconsejo.fr/"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description ?? description} />
      <meta name="twitter:image" content="https://www.lucasconsejo.fr/img/og/lucasconsejo.png" />
    </Head>
  );
}

export default React.memo(Metas);
