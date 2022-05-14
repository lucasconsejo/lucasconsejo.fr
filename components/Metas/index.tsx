import Head from "next/head";

type MetasProps = {
  title: string;
  description?: string;
};

export default function Metas({ title, description }: MetasProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description ?? description} />
      <meta name="robots" content="noimageindex" />
      <link rel="icon" href="/favicon.ico" />
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
