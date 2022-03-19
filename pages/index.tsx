import Metas from "components/metas";
import Layout from "components/layout";
import { ReactElement } from "react";
import TechnoIcon from "components/TechnoIcon";

export default function Home() {
  return (
    <div>
      <Metas title="Lucas Consejo | Ingénieur d'étude - Développeur Cdiscount" />

      <div
        className="flex flex-col justify-start items-center sm:flex-row sm:justify-around w-full pt-36 sm:pt-0"
        style={{ height: "90vh" }}
      >
        <div className="space-y-4 order-last sm:order-first mt-5 sm:mt-0">
          <div className="text-white space-y-2">
            <h1 className="font-bold text-3xl sm:text-5xl text-center sm:text-left">
              Lucas Consejo
            </h1>
            <div className="flex flex-col items-center sm:flex-row font-medium text-xl sm:text-2xl space-x-1 whitespace-nowrap">
              <h2 className="text-left">Ingénieur d&#39;étude - Développeur</h2>
              <a
                href="https://www.cdiscount.com/"
                target="_blank"
                rel="noreferrer"
                className="block typewriter text-orange-cds hover:underline"
              >
                @cdiscount.
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-36 h-36 sm:w-64 sm:h-64"></div>
      </div>

      <div className="bg-white bg-opacity-5" style={{ marginTop: "10vh" }}>
        <div className="text-center w-full pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">À propos</span>
            <span className="block text-purple-400">Ce qui me passionne</span>
          </h2>
        </div>
        <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 pb-16 pt-5">
          <div className="w-10/12 sm:w-1/2 lg:w-1/4 p-4 mx-auto bg-black mt-6 shadow-lg rounded-lg">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-white text-black">
                <svg
                  width="20"
                  height="20"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m20.84 2.18l-3.93.78l2.74 3.54l1.97-.4l-.78-3.92m-6.87 1.36L12 3.93l2.75 3.53l1.96-.39l-2.74-3.53m-4.9.96l-1.97.41l2.75 3.53l1.96-.39L9.07 4.5m-4.91 1l-.98.19a2 2 0 0 0-1.57 2.35L2 10l4.9-.97L4.16 5.5M2 10v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V10H2Z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-white font-semibold py-4">
              Cinéma
            </h3>
            <p className="text-md text-gray-200 py-4">
              Depuis la réouverture des cinémas après le confinement, je vais 2
              à 3 fois au ciné par mois. Vous avez vu le dernier{" "}
              <a
                href="https://www.youtube.com/watch?v=hWRSJlp50rQ"
                target="_blank"
                rel="noreferrer"
                className="underline font-bold text-white hover:text-red-400"
              >
                The Batman
              </a>{" "}
              ? Wow, il était incroyable ! 🤩
            </p>
          </div>
          <div className="w-10/12 sm:w-1/2 lg:w-1/4 p-4 mx-auto mt-6 lg:mt-24 bg-white shadow-lg rounded-lg">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-black text-white">
                <svg
                  width="20"
                  height="20"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414L24 12zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757L2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl font-semibold text-black py-4">
              Informatique
            </h3>
            <p className="text-md text--gray-800 py-4">
              Passionné depuis le collège, je me suis vite autoformé puis
              inscrit pour un master expert informatique pour enfin en faire mon{" "}
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
                className="underline font-bold text-black hover:text-red-400"
              >
                métier
              </a>
              . 🤭
            </p>
          </div>
          <div className="w-10/12 sm:w-1/2 lg:w-1/4 mt-6 p-4 mx-auto bg-purple-400 shadow-lg rounded-lg">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-black text-purple-400">
                <svg
                  width="20"
                  height="20"
                  className="h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M5.502 3a4.5 4.5 0 0 0 0 9h5.008a4.5 4.5 0 1 0 0-9H5.502ZM3.504 7.5a.5.5 0 0 1 .5-.5h1V6a.5.5 0 1 1 1 0v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0V8h-1a.5.5 0 0 1-.5-.5ZM11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-black font-semibold py-4">
              Jeux vidéos
            </h3>
            <p className="text-md  text-gray-800 py-4">
              Je suis bon public, que ce soit en solo ou en multi, jeux indés ou
              triple A, je peux y passer pas mal d&#39;heures dessus. Préférence
              pour les{" "}
              <a
                href="https://www.youtube.com/watch?v=jPlWnCE4Edo"
                target="_blank"
                rel="noreferrer"
                className="underline font-bold text-black hover:text-gray-700"
              >
                Dark Souls
              </a>
              . 😏
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-center w-full pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Technologies</span>
            <span className="block text-purple-400 text-2xl md:text-4xl">
              Ce que je maîtrise le mieux
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-between w-full max-w-4xl mx-auto pt-4 sm:my-10">
          <TechnoIcon
            id="reactjs"
            src="/img/logo/react.webp"
            url="https://fr.reactjs.org/"
          >
            React JS et React Native
          </TechnoIcon>

          <TechnoIcon
            id="csharp"
            src="/img/logo/csharp.png"
            url="https://docs.microsoft.com/fr-fr/dotnet/csharp/tour-of-csharp/"
          >
            C#
          </TechnoIcon>

          <TechnoIcon
            id="js"
            src="/img/logo/javascript.png"
            url="https://developer.mozilla.org/fr/docs/Web/JavaScript"
            className="lg:w-11 lg:h-11"
          >
            Javascript
          </TechnoIcon>

          <TechnoIcon
            id="ts"
            src="/img/logo/typescript.svg"
            url="https://www.typescriptlang.org/"
            className="lg:w-11 lg:h-11"
          >
            Typescript
          </TechnoIcon>

          <TechnoIcon
            id="nodejs"
            src="/img/logo/nodejs.png"
            url="https://nodejs.org/fr/"
            className="lg:w-20 lg:h-20"
          >
            Node JS
          </TechnoIcon>

          <TechnoIcon
            id="nextjs"
            src="/img/logo/nextjs.png"
            url="https://nextjs.org/"
          >
            Next JS
          </TechnoIcon>

          <TechnoIcon
            id="tailwind"
            src="/img/logo/tailwind.png"
            url="https://tailwindcss.com/"
          >
            Tailwind CSS
          </TechnoIcon>

          <TechnoIcon
            id="styled-components"
            src="/img/logo/styled-components.png"
            url="https://styled-components.com/"
            className="w-20 h-20 lg:w-20 lg:h-20"
          >
            Styled-components
          </TechnoIcon>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
