import { useContext, useState } from "react";
import { I18nContext } from "contexts/i18nContext";
import { i18nProjects } from "i18n";
import Title from "components/Title";
import Project from "./Project";
import Swiper from "./Swiper";
import ControlBar from "./ControlBar";
import projects from "./data";

export default function Projects() {
  const { localeState } = useContext(I18nContext);
  const { title, subTitle, content } = i18nProjects[localeState];
  const [projectIndex, setProjectIndex] = useState(0);
  
  return (
    <div id="projects" className="md:mt-12">
      <Title title={title} subTitle={subTitle} />
      <div className="hidden md:block">
        <Project project={projects[projectIndex]} description={content[projectIndex].description} />
      </div>
      <Swiper projects={projects} content={content} />
      <ControlBar projects={projects} currentProject={[projectIndex, setProjectIndex]} />
    </div>
  );
}
