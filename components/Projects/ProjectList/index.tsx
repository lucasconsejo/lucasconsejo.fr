import Image from "next/image";
import { useContext, useState } from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInterval } from "hooks";
import { imageKitLoader } from '../../../utils/index';
import { I18nContext } from "contexts/i18nContext";
import { i18nProjects } from "i18n";
import ProjectMobileItem from "../ProjectMobileItem";

const projects = [
  {
    img: "/lucasconsejo/projects/nostetourtiere.webp",
    icon: "/lucasconsejo/logo/nostetourtiere.webp",
    title: "Noste Tourtière",
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
    img: "/lucasconsejo/projects/dashboard.webp",
    icon: "/lucasconsejo/logo/dashboard.webp",
    title: "Dashboard - Noste Tourtière",
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
    img: "/lucasconsejo/projects/reverse-eats.webp",
    icon: "/lucasconsejo/logo/reverse-eats.webp",
    title: "Reverse Eats",
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
    img: "/lucasconsejo/projects/conore.webp",
    icon: "/lucasconsejo/logo/conore.svg",
    title: "Conore",
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
    img: "/lucasconsejo/projects/react-svg-color.webp",
    icon: "/lucasconsejo/logo/npm.svg",
    title: "react-svg-color",
    url: "https://www.npmjs.com/package/react-svg-color",
    isStudentProject: false,
    technos: ["React JS", "Gitlab CI/CD"],
  },
  {
    img: "/lucasconsejo/projects/lucasconsejo.webp",
    icon: "/lucasconsejo/logo/favicon.webp",
    title: "lucasconsejo",
    url: "https://lucasconsejo.fr",
    isStudentProject: false,
    technos: ["Next JS", "Typescript", "Gitlab CI/CD"],
  },
  {
    img: "/lucasconsejo/projects/hmp.webp",
    icon: "/lucasconsejo/logo/hmp.webp",
    title: "Heal me please",
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
    img: "/lucasconsejo/projects/wimm.webp",
    icon: "/lucasconsejo/logo/wimm.webp",
    title: "Where is my money",
    url: "",
    isStudentProject: true,
    technos: ["React JS", "Typescript", "Laravel", "MySQL", "Gitlab CI/CD"],
  },
  {
    img: "/lucasconsejo/projects/reactly.webp",
    icon: "/lucasconsejo/logo/reactly.webp",
    title: "Reactly",
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
    img: "/lucasconsejo/projects/abc.webp",
    icon: "/lucasconsejo/logo/react.webp",
    title: "Entreprise ABC",
    url: "",
    isStudentProject: true,
    technos: ["React JS", "Tailwind CSS", ".NET", "MongoDB", "Jenkins"],
  },
  {
    img: "/lucasconsejo/projects/player.webp",
    icon: "/lucasconsejo/logo/react.webp",
    title: "Music player",
    url: "https://music-player-copperdev.vercel.app/",
    isStudentProject: false,
    technos: ["React JS"],
  },
  {
    img: "/lucasconsejo/projects/calculatrice.webp",
    icon: "/lucasconsejo/logo/react.webp",
    title: "Calculatrice",
    url: "https://calculator-copperdev.vercel.app/",
    isStudentProject: false,
    technos: ["React JS"],
  },
  {
    img: "/lucasconsejo/projects/atoute.webp",
    icon: "/lucasconsejo/logo/react.webp",
    title: "Atoute",
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
    img: "/lucasconsejo/projects/sospr.webp",
    icon: "/lucasconsejo/logo/sospr.webp",
    title: "SOSPR",
    url: "",
    isStudentProject: true,
    technos: ["Laravel", "Tailwind CSS", "Active Directory", "MySQL"],
  },
  {
    img: "/lucasconsejo/projects/sylab.webp",
    icon: "/lucasconsejo/logo/sylab.webp",
    title: "Sylab",
    url: "",
    isStudentProject: true,
    technos: ["Symfony", "Bootstrap", "MySQL"],
  },
];

export default function ProjectList() {
  const { localeState } = useContext(I18nContext);
  const { urlAccess, content } = i18nProjects[localeState];
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
          {projects.map((project, index) => {
            const projectItem = { ...project, description: content[index].description }
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div className="text-white">
                    Current slide is {isActive ? "active" : "not active"}
                  </div>
                )}
                <ProjectMobileItem project={projectItem} />
              </SwiperSlide>
            )
          })}
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
                <Image 
                  loader={imageKitLoader} 
                  src={projects[projectIndex].img} 
                  layout="fill" 
                  className="object-contain" 
                  alt={projects[projectIndex].title} 
                  sizes="20vw" 
                  quality={75}
                />
              </div>
            </div>
          </div>
          <div className="w-full p-7 md:p-12 mb-40">
            <h2 className="text-xl mb-4" style={{ color: "#ecf0f1" }}>
              <div className="flex align-middle">
                <div className="relative w-8 h-8 mr-3">
                  <Image 
                    loader={imageKitLoader} 
                    src={projects[projectIndex].icon} 
                    layout="fill" 
                    className="object-contain" 
                    alt={projects[projectIndex].title} 
                    sizes="20vw"
                    quality={50}
                  />
                </div>
                {projects[projectIndex].title}
              </div>
            </h2>
            <p
              className="text-md leading-relaxed"
              style={{ color: "#ababab", fontWeight: 400 }}
            >
              {content[projectIndex].description}
            </p>
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
                  {urlAccess}
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
          <svg className="w-8 h-8 md:w-7 md:h-7" viewBox="0 0 24 24">
            <path 
              fill="currentColor" 
              d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
            />
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
