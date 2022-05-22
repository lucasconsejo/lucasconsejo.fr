import { useContext } from "react";
import { I18nContext } from "contexts/i18nContext";
import { i18nAbout } from "i18n";
import { Title } from "components";
import HobbyList from "./HobbyList";

export default function About() {
  const { localeState } = useContext(I18nContext);
  const { title, subTitle } = i18nAbout[localeState];
  
  return (
    <div
      id="about"
      className="bg-white bg-opacity-5"
      style={{ marginTop: "10vh" }}
    >
      <Title title={title} subTitle={subTitle} />
      <HobbyList />
    </div>
  );
}
