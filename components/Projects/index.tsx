import Title from "components/Title";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <div className="md:mt-12">
      <Title title="Projets" subTitle="Ce que j'ai réalisé" />
      <ProjectList />
    </div>
  );
}
