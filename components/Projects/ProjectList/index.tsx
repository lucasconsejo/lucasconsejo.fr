import { useState } from "react";
import useInterval from "../../../hooks/useInterval";

const projects = [
  {
    img: "/img/projects/nostetourtiere.png",
    icon: "/img/logo/nostetourtiere.png",
    title: "Noste Tourtière",
    description:
      "Site vitrine d'une pâtisserie artisale basé à Coimères en Gironde.",
    url: "https://www.nostetourtiere.com",
    isStudentProject: false,
  },
  {
    img: "/img/projects/dashboard.png",
    icon: "/img/logo/dashboard.ico",
    title: "Dashboard - Noste Tourtière",
    description:
      "Application back-office pour le site nostetourtiere.com permettant d'éditer les textes et images sur le site.",
    url: "",
    isStudentProject: true,
  },
  {
    img: "/img/projects/reverse-eats.png",
    icon: "/img/logo/reverse-eats.png",
    title: "Reverse Eats",
    description:
      "Application iOS et Android pour commander un cuisinier à domicile afin qu'il prépare les plats choisis depuis votre cuisine.",
    url: "",
    isStudentProject: true,
  },
  {
    img: "/img/projects/conore.png",
    icon: "/img/logo/conore.svg",
    title: "Conore",
    description:
      "Application iOS et Android permettant de réserver des séances dans une salle de cross-fit.",
    url: "",
    isStudentProject: true,
  },
  {
    img: "/img/projects/react-svg-color.png",
    icon: "/img/logo/npm.svg",
    title: "react-svg-color",
    description:
      "Composant React JS disponible via NPM permettant de modifier les couleurs d'un fichier svg.",
    url: "https://www.npmjs.com/package/react-svg-color",
    isStudentProject: false,
  },
  {
    img: "/img/projects/hmp.png",
    icon: "/img/logo/hmp.png",
    title: "Heal me please",
    description:
      "Application web permettant d’aider les personnes souffrant de maux à identifier rapidement et simplement les symptômes d’une maladie. Une fois les symptômes connus du site, il leur sera proposé de prendre un rendez-vous chez un praticien de santé correspondant aux douleurs.",
    url: "",
    isStudentProject: true,
  },
  {
    img: "/img/projects/wimm.png",
    icon: "/img/logo/wimm.ico",
    title: "Where is my money",
    description:
      "Application web permettant de suivre ses dépenses en connectant son compte en banque.",
    url: "",
    isStudentProject: true,
  },
  {
    img: "/img/projects/reactly.png",
    icon: "/img/logo/reactly.ico",
    title: "Reactly",
    description:
      "Application web mélangeant des fonctionnalités venant de Facebook, Jira et Microsoft Teams pour réaliser une application tout en un.",
    url: "",
    isStudentProject: true,
  },
  {
    img: "/img/projects/player.png",
    icon: "/img/logo/react.webp",
    title: "Music player",
    description:
      "Application web reprenant les fonctionnalités du player Spotify.",
    url: "https://music-player-copperdev.vercel.app/",
    isStudentProject: false,
  },
  {
    img: "/img/projects/calculatrice.png",
    icon: "/img/logo/react.webp",
    title: "Calculatrice",
    description: "Application web d'un calculatrice",
    url: "https://calculator-copperdev.vercel.app/",
    isStudentProject: false,
  },
  {
    img: "/img/projects/atoute.png",
    icon: "/img/logo/atoute.png",
    title: "Atoute",
    description:
      "Application web permettant la rencontre entre chercheurs d’emplois et des entreprises. Les chercheurs d’emplois peuveunt poster leur CV et les entreprises peuvent consulter et proposer une offre. Inversement, les entreprises peuvent poster des offres et les chercheurs d'emplois y répondre.",
    url: "",
    isStudentProject: true,
  },
  {
    img: "/img/projects/sospr.png",
    icon: "/img/logo/sospr.ico",
    title: "SOSPR",
    description:
      "Application web permettant la modification de son mot de passe de façon plus sécurisé avec un système de code généré et envoyer par SMS.",
    url: "",
    isStudentProject: true,
  },
  {
    img: "/img/projects/sylab.png",
    icon: "/img/logo/sylab.png",
    title: "Sylab",
    description:
      "Site web permettant de consulter des offres de biens immobilier.",
    url: "",
    isStudentProject: true,
  },
];

export default function ProjectList() {
  const [projectIndex, setProjectIndex] = useState(0);
  const stopInterval = useInterval(() => {
    setProjectIndex((prev) => {
      const index = prev + 1;
      return index > projects.length - 1 ? 0 : index;
    });
  }, 5000);

  const handleProject = (index: number) => {
    setProjectIndex(index);
    stopInterval();
  };

  const previousProject = () => {
    setProjectIndex((prev) => {
      const index = prev - 1;
      return index < 0 ? projects.length - 1 : index;
    });
    stopInterval();
  };

  const nextProject = () => {
    setProjectIndex((prev) => {
      const index = prev + 1;
      return index > projects.length - 1 ? 0 : index;
    });
    stopInterval();
  };

  return (
    <div>
      <div
        className="w-11/12 sm:max-w-screen-xl mx-auto rounded-lg mt-12"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(41,41,46,1) 0%, rgba(25,25,28,1) 70%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center space-y-4 md:space-y-0 items-center justify-items-center">
          <div className="slide-project rounded-t-lg rounded-b-none md:rounded-tr-none md:rounded-bl-lg">
            <div className="py-10 px-8">
              <div className="place-self-center">
                <img src={projects[projectIndex].img} />
              </div>
            </div>
          </div>
          <div className="w-full p-7 md:p-12 mb-40">
            <h2 className="text-xl mb-4" style={{ color: "#ecf0f1" }}>
              <img
                className="mr-3 align-middle"
                style={{
                  width: "32px",
                  height: "32px",
                  display: "inline-block",
                }}
                src={projects[projectIndex].icon}
              />
              {projects[projectIndex].title}
            </h2>
            <h4
              className="text-md leading-relaxed mb-4"
              style={{ color: "#ababab", fontWeight: 400 }}
            >
              {projects[projectIndex].description}
            </h4>
            {!projects[projectIndex].isStudentProject && (
              <a
                href={projects[projectIndex].url}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white rounded-sm px-3 py-2 shadow-md"
              >
                Accéder au site
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 md:space-x-3 w-full max-w-4xl mx-auto mt-5 mb-20">
        <div
          className="text-gray-500 mx-2 hover:text-purple-500 cursor-pointer"
          onClick={previousProject}
        >
          <svg
            className="w-8 h-8 md:w-7 md:h-7"
            transform="scale(-1 1)"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
            ></path>
          </svg>
        </div>
        <div className="items-center justify-center space-x-3 hidden md:flex">
          {projects.map((item, index) => (
            <div
              key={index}
              onClick={() => handleProject(index)}
              className={`cursor-pointer w-4 h-4 rounded-full ${
                projectIndex === index
                  ? "bg-purple-500"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
        <div
          className="text-gray-500 mx-2 hover:text-purple-500 cursor-pointer"
          onClick={nextProject}
        >
          <svg className="w-8 h-8 md:w-7 md:h-7" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
