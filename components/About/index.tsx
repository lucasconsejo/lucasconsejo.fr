import { Title } from "components";
import HobbyList from "./HobbyList";

export default function About() {
  return (
    <div
      id="about"
      className="bg-white bg-opacity-5"
      style={{ marginTop: "10vh" }}
    >
      <Title title="À propos" subTitle="Ce qui me passionne" />
      <HobbyList />
    </div>
  );
}
