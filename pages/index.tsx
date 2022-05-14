import { ReactElement } from "react";
import {
  Metas,
  Layout,
  Introduction,
  About,
  Skills,
  Career,
  Projects,
  Contact,
} from "components";

export default function Home() {
  return (
    <div>
      <Metas 
        title="Lucas Consejo | Ingénieur d'étude - Développeur Cdiscount"
        description="Site porfolio de Lucas Consejo, développeur web & mobile."
      />

      <Introduction />
      <About />
      <Skills />
      <Career />
      <Projects />
      <Contact />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
