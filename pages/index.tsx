import Metas from "components/metas";
import Layout from "components/layout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div>
      <Metas title="Lucas Consejo | Développeur web" />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
