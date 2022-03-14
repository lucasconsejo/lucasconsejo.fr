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
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="rgb(26, 8, 66)"></meta>
    </Head>
  );
}
