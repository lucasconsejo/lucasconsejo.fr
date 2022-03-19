import Metas from "components/metas";
import Layout from "components/layout";
import { ReactElement } from "react";
import Introduction from "components/Introduction";
import About from "components/About";
import Technologies from "components/Technologies";

export default function Home() {
  return (
    <div>
      <Metas title="Lucas Consejo | Ingénieur d'étude - Développeur Cdiscount" />

      <Introduction />
      <About />
      <Technologies />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
