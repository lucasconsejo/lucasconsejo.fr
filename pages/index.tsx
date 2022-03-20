import { ReactElement } from "react";
import {
  Metas,
  Layout,
  Introduction,
  About,
  Technologies,
  Career,
  Projects,
} from "components";

export default function Home() {
  return (
    <div>
      <Metas title="Lucas Consejo | Ingénieur d'étude - Développeur Cdiscount" />

      <Introduction />
      <About />
      <Technologies />
      <Career />
      <Projects />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
