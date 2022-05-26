import { useInterval } from "hooks";
import { ProjectType } from "../types";

type ProjectsDesktopProps = {
    projects: Array<ProjectType>;
    currentProject: Array<any>;
};

type ArrowIconProps = {
    side: "right" | "left";
    onClick: any;
};

export default function ControlBar({ projects, currentProject }: ProjectsDesktopProps) {
    const [projectIndex, setProjectIndex] = currentProject;

    const stopInterval = useInterval(() => {
        setProjectIndex((prev) => {
            const index = prev + 1;
            return index > projects.length - 1 ? 0 : index;
        });
    }, 5000);

    const handleProject = (index: number) => {
        setProjectIndex(index);
        stopInterval();
    };

    const previousProject = () => {
        setProjectIndex((prev: number) => {
            const index = prev - 1;
            return index < 0 ? projects.length - 1 : index;
        });
        stopInterval();
    };

    const nextProject = () => {
        setProjectIndex((prev: number) => {
            const index = prev + 1;
            return index > projects.length - 1 ? 0 : index;
        });
        stopInterval();
    };

    return (
        <div className="hidden md:flex items-center justify-center space-x-10 md:space-x-3 w-full max-w-4xl mx-auto mt-5 mb-20">
            <ArrowIcon side="left" onClick={previousProject} />
            <div className="items-center justify-center space-x-3 md:flex">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleProject(index)}
                        className={`cursor-pointer w-4 h-4 rounded-full ${
                            projectIndex === index
                            ? "bg-purple-500"
                            : "bg-gray-500 hover:bg-gray-400"
                        }`}
                    />
                ))}
            </div>
            <ArrowIcon side="right" onClick={nextProject} />
        </div>
    );
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ side, onClick }) => (
    <div onClick={onClick} className="text-gray-500 mx-2 hover:text-purple-500 cursor-pointer">
        <svg className="w-8 h-8 md:w-7 md:h-7" viewBox="0 0 24 24">
            {side === "left"
                ? <path fill="currentColor" d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z" />
                : <path fill="currentColor" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z" />
            }
        </svg>
    </div>
);
