import Image from "next/image";
import { imageKitLoader } from "utils";

type ProjectTitleProps = {
    title: string;
    src: string
};

const ProjectTitle: React.FC<ProjectTitleProps> = ({ title, src }) => (
    <h2 className="text-xl mb-4" style={{ color: "#ecf0f1" }}>
        <div className="flex align-middle">
            <div className="relative w-8 h-8 mr-3">
                <Image
                    loader={imageKitLoader} 
                    src={src} 
                    layout="fill" 
                    className="object-contain" 
                    alt={title} 
                    sizes="20vw"
                    quality={50}
                />
            </div>
            {title}
        </div>
    </h2>
);

export default ProjectTitle;
