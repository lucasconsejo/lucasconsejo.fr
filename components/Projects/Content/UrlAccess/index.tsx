import { useContext } from "react";
import { I18nContext } from "contexts/i18nContext";
import { i18nProjects } from "i18n";
import Image from "next/image";
import { imageKitLoader } from "utils";

type UrlAccessProps = {
    url: string;
    isApp: boolean
};

const UrlAccess: React.FC<UrlAccessProps> = ({ url, isApp }) => {
    const { localeState } = useContext(I18nContext);
    const { urlAccess } = i18nProjects[localeState];
    
    return (
        <div className="mt-10">
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`${!isApp && "bg-blue-600 text-white rounded-sm px-3 py-2 shadow-md"}`}
            >
                {!isApp && urlAccess}
                {isApp && (
                    <div className="relative w-40 h-14">
                        <Image 
                            loader={imageKitLoader} 
                            src={`/lucasconsejo/logo/google-play-badge-${localeState}.png`}
                            layout="fill" 
                            className="object-contain" 
                            alt="google-play" 
                            sizes="20vw" 
                            quality={100}
                        />
                    </div>
                )}
            </a>
        </div>
    );
}

export default UrlAccess;
