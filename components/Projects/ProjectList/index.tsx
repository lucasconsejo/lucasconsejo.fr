import { useState } from "react";
import useInterval from "../../../hooks/useInterval";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectMobileItem from "../ProjectMobileItem";
import Image from "next/image";

const projects = [
  {
    img: "/img/projects/nostetourtiere.webp",
    icon: "/img/logo/nostetourtiere.webp",
    title: "Noste Tourtière",
    description:
      "Site vitrine d'une pâtisserie artisale basé à Coimères en Gironde.",
    url: "https://www.nostetourtiere.com",
    isStudentProject: false,
    technos: [
      "Next JS",
      "Typescript",
      "Tailwind CSS",
      "Gitlab CI/CD",
      "Express JS",
      "MongoDB",
    ],
  },
  {
    img: "/img/projects/dashboard.webp",
    icon: "/img/logo/dashboard.ico",
    title: "Dashboard - Noste Tourtière",
    description:
      "Application back-office pour le site nostetourtiere.com permettant d'éditer les textes et images sur le site.",
    url: "",
    isStudentProject: true,
    technos: [
      "React JS",
      "Typescript",
      "Tailwind CSS",
      "Gitlab CI/CD",
      "Express JS",
      "MongoDB",
    ],
  },
  {
    img: "/img/projects/reverse-eats.webp",
    icon: "/img/logo/reverse-eats.webp",
    title: "Reverse Eats",
    description:
      "Application iOS et Android pour commander un cuisinier à domicile afin qu'il prépare les plats choisis depuis votre cuisine.",
    url: "",
    isStudentProject: true,
    technos: [
      "React Native",
      "Typescript",
      "Gitlab CI/CD",
      "NodeJS",
      "Firebase",
    ],
  },
  {
    img: "/img/projects/conore.webp",
    icon: "/img/logo/conore.svg",
    title: "Conore",
    description:
      "Application iOS et Android permettant de réserver des séances dans une salle de cross-fit.",
    url: "",
    isStudentProject: true,
    technos: [
      "React Native",
      "Symfony",
      "Stripe",
      "MySQL",
      "Gitlab CI/CD",
      "Kubernetes",
      "Grafana",
    ],
  },
  {
    img: "/img/projects/react-svg-color.webp",
    icon: "/img/logo/npm.svg",
    title: "react-svg-color",
    description:
      "Composant React JS disponible via NPM permettant de modifier les couleurs d'un fichier svg.",
    url: "https://www.npmjs.com/package/react-svg-color",
    isStudentProject: false,
    technos: ["React JS", "Gitlab CI/CD"],
  },
  {
    img: "/img/projects/lucasconsejo.webp",
    icon: "/favicon.ico",
    title: "lucasconsejo",
    description: "Portfolio que vous êtes en train de consulter.",
    url: "https://lucasconsejo.fr",
    isStudentProject: false,
    technos: ["Next JS", "Typescript", "Gitlab CI/CD"],
  },
  {
    img: "/img/projects/hmp.webp",
    icon: "/img/logo/hmp.webp",
    title: "Heal me please",
    description:
      "Application web permettant d’aider les personnes souffrant de maux à identifier rapidement et simplement les symptômes d’une maladie.",
    url: "",
    isStudentProject: true,
    technos: [
      "Next JS",
      "Typescript",
      "Nest JS",
      "PostgreSQL",
      "Gitlab CI/CD",
      "Kubernetes",
      "Grafana",
    ],
  },
  {
    img: "/img/projects/wimm.webp",
    icon: "/img/logo/wimm.ico",
    title: "Where is my money",
    description:
      "Application web permettant de suivre ses dépenses en connectant son compte en banque.",
    url: "",
    isStudentProject: true,
    technos: ["React JS", "Typescript", "Laravel", "MySQL", "Gitlab CI/CD"],
  },
  {
    img: "/img/projects/reactly.webp",
    icon: "/img/logo/reactly.ico",
    title: "Reactly",
    description:
      "Application web mélangeant des fonctionnalités venant de Facebook, Jira et Microsoft Teams pour réaliser une application tout en un.",
    url: "",
    isStudentProject: true,
    technos: [
      "React JS",
      "Typescript",
      "Express JS",
      "Firebase",
      "MongoDB",
      "Gitlab CI/CD",
    ],
  },
  {
    img: "/img/projects/abc.webp",
    icon: "/img/logo/react.webp",
    title: "Entreprise ABC",
    description:
      "Site e-commerce de vente de meuble reprenant les fonctionnalités de IKEA. Le projet comprend également une application back-office pour éditer des produits parents/enfants.",
    url: "",
    isStudentProject: true,
    technos: ["React JS", "Tailwind CSS", ".NET", "MongoDB", "Jenkins"],
  },
  {
    img: "/img/projects/player.webp",
    icon: "/img/logo/react.webp",
    title: "Music player",
    description:
      "Application web reprenant les fonctionnalités du player Spotify.",
    url: "https://music-player-copperdev.vercel.app/",
    isStudentProject: false,
    technos: ["React JS"],
  },
  {
    img: "/img/projects/calculatrice.webp",
    icon: "/img/logo/react.webp",
    title: "Calculatrice",
    description: "Application web d'un calculatrice",
    url: "https://calculator-copperdev.vercel.app/",
    isStudentProject: false,
    technos: ["React JS"],
  },
  {
    img: "/img/projects/atoute.webp",
    icon: "/img/logo/react.webp",
    title: "Atoute",
    description:
      "Application web permettant la rencontre entre chercheurs d’emplois et des entreprises.",
    url: "",
    isStudentProject: true,
    technos: [
      "React JS",
      "Typescript",
      "Symfony",
      "MySQL",
      "Gitlab CI/CD",
      "Elasticsearch",
      "Kibana",
    ],
  },
  {
    img: "/img/projects/sospr.webp",
    icon: "/img/logo/sospr.ico",
    title: "SOSPR",
    description:
      "Application web permettant la modification de son mot de passe de façon plus sécurisé avec un système de code généré et envoyer par SMS.",
    url: "",
    isStudentProject: true,
    technos: ["Laravel", "Tailwind CSS", "Active Directory", "MySQL"],
  },
  {
    img: "/img/projects/sylab.webp",
    icon: "/img/logo/sylab.webp",
    title: "Sylab",
    description:
      "Site web permettant de consulter des offres de biens immobilier.",
    url: "",
    isStudentProject: true,
    technos: ["Symfony", "Bootstrap", "MySQL"],
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

  const projectsMobile = () => {
    return (
      <div className="flex mt-5 mb-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{ clickable: true }}
          className="swiper-projects z-0"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="text-white">
                  Current slide is {isActive ? "active" : "not active"}
                </div>
              )}
              <ProjectMobileItem project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <div>
      <div
        className="w-11/12 sm:max-w-screen-xl mx-auto rounded-lg mt-12 hidden md:block"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(41,41,46,1) 0%, rgba(25,25,28,1) 70%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center space-y-4 md:space-y-0 items-center justify-items-center">
          <div className="slide-project rounded-t-lg rounded-b-none md:rounded-tr-none md:rounded-bl-lg">
            <div className="py-10 px-8">
              <div className="place-self-center relative w-full h-96">
                <Image src={projects[projectIndex].img} layout="fill" className="object-contain" alt={projects[projectIndex].title} sizes="100%" />
              </div>
            </div>
          </div>
          <div className="w-full p-7 md:p-12 mb-40">
            <h2 className="text-xl mb-4" style={{ color: "#ecf0f1" }}>
              <div className="flex align-middle">
                <div className="relative w-8 h-8 mr-3">
                  <Image src={projects[projectIndex].icon} layout="fill" className="object-contain" alt={projects[projectIndex].title} sizes="100%" />
                </div>
                {projects[projectIndex].title}
              </div>
            </h2>
            <h4
              className="text-md leading-relaxed"
              style={{ color: "#ababab", fontWeight: 400 }}
            >
              {projects[projectIndex].description}
            </h4>
            <div className="flex flex-wrap mt-3">
              {projects[projectIndex].technos.map((item, index) => (
                <div
                  key={index}
                  className="text-gray-400 border border-gray-400 rounded px-2 mb-2 mr-3"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-10">
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
      </div>

      <div className="block md:hidden">{projectsMobile()}</div>

      <div className="hidden md:flex items-center justify-center space-x-10 md:space-x-3 w-full max-w-4xl mx-auto mt-5 mb-20">
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
        <div className="items-center justify-center space-x-3 md:flex">
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
