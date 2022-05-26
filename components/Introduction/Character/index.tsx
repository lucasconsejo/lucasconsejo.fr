import Image from "next/image";
import { imageKitLoader } from "utils";

const Character: React.FC = () => (
    <>
        <div className="hidden sm:block sm:absolute sm:w-5/12 sm:h-4/5 sm:top-20 sm:-right-32 2xl:w-6/12 2xl:h-3/5 2xl:top-48">
            <Image
                loader={imageKitLoader} 
                src="/lucasconsejo/characters/character.webp"
                layout="fill" 
                className="object-contain" 
                alt="human"
                sizes="20vw" 
                quality={100}
                priority
            />
        </div>
        <div className="block relative sm:hidden w-5/12 h-72">
            <Image 
                loader={imageKitLoader} 
                src="/lucasconsejo/characters/character-mobile.webp"
                layout="fill" 
                className="object-contain" 
                alt="human" 
                sizes="20vw" 
                quality={100}
                priority
            />
        </div>
    </>
);

export default Character;
