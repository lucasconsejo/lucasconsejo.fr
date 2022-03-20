import { Title } from "components";

export default function Career() {
  return (
    <div className="h-screen mb-40 sm:mb-10 md:mb-0">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-around lg:justify-center lg:space-x-12 mt-0 md:pt-10">
        <div>
          <Title
            title="Carrière"
            subTitle="Ce que j'ai fait"
            align="left"
            className="pt-0 sm:pt-0 md:pt-0 lg:pt-0"
          />
        </div>
        <ol className="relative border-l border-purple-900 my-12 md:my-0 w-10/12 md:w-7/12 lg:w-5/12">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 border-purple-900 bg-purple-700 rounded-full -left-1.5 border"></div>
            <time className="mb-1 text-sm font-normal leading-none text-purple-400">
              Octobre 2022
            </time>
            <h3 className="text-lg font-semibold text-white">
              Ingénieur d&#39;étude - Développeur à{" "}
              <a
                href="https://www.cdiscount.com/"
                target="_blank"
                rel="noreferrer"
                className="underline font-bold hover:text-orange-cds"
              >
                Cdiscount
              </a>
            </h3>
            <p className="mb-4 text-base font-normal text-gray-400">
              CDI dans l&#39;équipe Recherche pour maintenir les différents
              composants liés à la recherche (reranking produits, carousels
              produits, facets recherche, suggestion de la barre de
              recherche...).
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-purple-400">
              Septembre 2019 - 2022
            </time>
            <h3 className="text-lg font-semibold text-white">
              Alternance développeur à{" "}
              <a
                href="https://www.cdiscount.com/"
                target="_blank"
                rel="noreferrer"
                className="underline font-bold hover:text-orange-cds"
              >
                Cdiscount
              </a>
            </h3>
            <p className="text-base font-normal text-gray-400">
              Alternance école/entreprise sur 3 ans dans l&#39;équipe Recherche
              pour maintenir les différents composants liés à la recherche.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-purple-400">
              Juillet 2019 - Septembre 2019
            </time>
            <h3 className="text-lg font-semibold text-white">
              Stage développeur à{" "}
              <a
                href="https://www.cdiscount.com/"
                target="_blank"
                rel="noreferrer"
                className="underline font-bold hover:text-orange-cds"
              >
                Cdiscount
              </a>
            </h3>
            <p className="text-base font-normal text-gray-400">
              Stage de 2 mois dans l&#39;équipe Recherche afin de migrer des
              microservices Java 8 en Java 10, pour ensuite les migrer de Mesos
              vers Kubernetes.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-purple-400">
              Septembre 2017 - 2022
            </time>
            <h3 className="text-lg font-semibold text-white">
              Master Expert informatique et systèmes d&#39;information -{" "}
              <a
                href="https://www.ynov.com/formation/ynov-informatique/"
                target="_blank"
                rel="noreferrer"
                className="underline font-bold hover:text-[#25b2a4]"
              >
                Ynov Bordeaux
              </a>
            </h3>
            <p className="text-base font-normal text-gray-400">
              Bac+5 en école informatique à Bordeaux où je me suis spécialisé
              dans le développement web.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
