import { ProjectType } from "../types";
import Description from "../Content/Description";
import ProjectImage from "../Content/ProjectImage";
import ProjectTitle from "../Content/ProjectTitle";
import Technos from "../Content/Technos";
import UrlAccess from "../Content/UrlAccess";

type ContainerProps = {
    project: ProjectType;
    description: string;
};

export default function Project({ project, description }: ContainerProps) {
    return (
        <div className="w-11/12 sm:max-w-screen-xl mx-auto rounded-lg mt-12" style={{ background: "radial-gradient(ellipse at top, rgba(41,41,46,1) 0%, rgba(25,25,28,1) 70%)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center space-y-4 md:space-y-0 items-center justify-items-center">
                <ProjectImage 
                    src={project.img} 
                    alt={project.title}  
                />
                <div className="w-full p-7 md:p-12 mb-40">
                    <ProjectTitle
                        title={project.title}
                        src={project.icon} 
                    />
                    <Description text={description} />
                    <Technos technos={project.technos} />
                    {!project.isStudentProject 
                        ? <UrlAccess url={project.url} /> 
                        : null
                    }
                </div>
            </div>
        </div>
    );
}
