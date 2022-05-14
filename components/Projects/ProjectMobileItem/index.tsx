import Image from "next/image";

type ProjectMobileItemProps = {
  project: {
    img: string;
    icon: string;
    title: string;
    description: string;
    url: string;
    isStudentProject: boolean;
    technos: Array<string>;
  };
};

export default function ProjectMobileItem({ project }: ProjectMobileItemProps) {
  return (
    <div
      className="w-11/12 rounded-lg mt-12 mx-auto"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(41,41,46,1) 0%, rgba(25,25,28,1) 70%)",
      }}
    >
      <div className="grid grid-cols-1 justify-center space-y-4 items-center justify-items-center">
        <div className="slide-project rounded-t-lg rounded-b-none">
          <div className="py-10 px-8">
            <div className="place-self-center relative w-full h-96">
              <Image src={project.img} layout="fill" className="object-contain" alt={project.title} sizes="100%" />
            </div>
          </div>
        </div>
        <div className="w-full p-7 mb-40">
          <h2 className="text-xl mb-4" style={{ color: "#ecf0f1" }}>
            <div className="flex align-middle">
              <div className="relative w-8 h-8 mr-3">
                <Image src={project.icon} layout="fill" className="object-contain" alt={project.title} sizes="100%" />
              </div>
              {project.title}
            </div>
          </h2>
          <p
            className="text-md leading-relaxed"
            style={{ color: "#ababab", fontWeight: 400 }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap mt-3">
            {project.technos.map((item, index) => (
              <div
                key={index}
                className="text-gray-400 border border-gray-400 rounded px-2 mb-2 mr-3"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10">
            {!project.isStudentProject && (
              <a
                href={project.url}
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
  );
}
