import { useContext } from "react";
import { I18nContext } from "contexts/i18nContext";
import { i18nProjects } from "i18n";

type UrlAccessProps = {
    url: string;
};

const UrlAccess: React.FC<UrlAccessProps> = ({ url }) => {
    const { localeState } = useContext(I18nContext);
    const { urlAccess } = i18nProjects[localeState];
    
    return (
        <div className="mt-10">
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white rounded-sm px-3 py-2 shadow-md"
            >
                {urlAccess}
            </a>
        </div>
    );
}

export default UrlAccess;
