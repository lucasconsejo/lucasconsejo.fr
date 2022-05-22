import { Title } from "components";
import { I18nContext } from "contexts/i18nContext";
import { i18nSkills } from "i18n";
import { useContext } from "react";
import BestSkills from "./BestSkills";
import EnvSkills from "./EnvSkills";
import MethodSkills from "./MethodSkills";
import OtherSkills from "./OtherSkills";
import SubTitle from "./SubTitle";

export default function Skills() {
  const { localeState } = useContext(I18nContext);
  const translate = i18nSkills[localeState];
  
  return (
    <div id="skills">
      <Title title={translate.title} subTitle={translate.subTitle} />
      <BestSkills />
      <SubTitle subTitle={translate.others} />
      <OtherSkills />
      <MethodSkills methods={translate.methods} />
      <SubTitle subTitle={translate.env} />
      <EnvSkills os={translate.os} />
    </div>
  );
}
