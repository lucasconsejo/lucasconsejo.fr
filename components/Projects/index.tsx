import Title from "components/Title";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <div className="h-screen">
      <Title title="Projets" subTitle="Ce que j'ai réalisé" />
      <ProjectList />
    </div>
  );
}
