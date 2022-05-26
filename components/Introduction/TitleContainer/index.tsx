import { useContext } from "react";
import { I18nContext } from "contexts/i18nContext";
import { i18nIntro } from "i18n";
import Navigation from "./Navigation";
import SubTitle from "./SubTitle";
import Title from "./Title";

const TitleContainer: React.FC = () => {
    const { localeState } = useContext(I18nContext);
    const { subTitle } = i18nIntro[localeState];
    
    return (
        <div className="space-y-4 order-last sm:order-first mt-16 sm:mt-0 sm:ml-36 2xl:ml-72">
            <div className="text-white space-y-2">
                <Title />
                <SubTitle text={subTitle} />
                <Navigation />
            </div>
        </div>
    );
}

export default TitleContainer;
