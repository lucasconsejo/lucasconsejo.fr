import Title from "components/Title";
import { I18nContext } from "contexts/i18nContext";
import { i18nProjects } from "i18n";
import { useContext } from "react";
import ProjectList from "./ProjectList";

export default function Projects() {
  const { localeState } = useContext(I18nContext);
  const { title, subTitle } = i18nProjects[localeState];
  return (
    <div id="projects" className="md:mt-12">
      <Title title={title} subTitle={subTitle} />
      <ProjectList />
    </div>
  );
}
