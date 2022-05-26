import Image from "next/image";
import { imageKitLoader } from "utils";

type ProjectImageProps = {
    src: string;
    alt: string;
};

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => (
    <div className="slide-project rounded-t-lg rounded-b-none md:rounded-tr-none md:rounded-bl-lg">
        <div className="py-6 md:py-10 px-8">
            <div className="place-self-center relative w-full h-48 md:h-96">
                <Image 
                    loader={imageKitLoader} 
                    src={src} 
                    layout="fill" 
                    className="object-contain" 
                    alt={alt} 
                    sizes="20vw" 
                    quality={100}
                />
            </div>
        </div>
    </div>
);

export default ProjectImage;
