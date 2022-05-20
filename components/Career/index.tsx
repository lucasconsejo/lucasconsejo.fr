import { Title } from "components";
import { I18nContext } from "contexts/i18nContext";
import { i18nCareer } from "i18n";
import { useContext } from "react";

export default function Career() {
  const { localeState } = useContext(I18nContext);
  const { title, subTitle, content } = i18nCareer[localeState];
  return (
    <div id="career">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-around lg:justify-center lg:space-x-12 md:pt-10 max-w-screen-2xl mx-auto">
        <div>
          <Title
            title={title}
            subTitle={subTitle}
            align="left"
            className="pt-0 sm:pt-0 md:pt-0 lg:pt-0"
          />
        </div>
        <ol className="relative border-l border-purple-900 mt-12 md:my-0 w-11/12 md:w-7/12 lg:w-5/12">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 border-purple-900 bg-purple-700 rounded-full -left-1.5 border"></div>
            <time className="mb-1 text-sm font-normal leading-none text-purple-400">
              {content[0].date}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {content[0].title}{" "}
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
              {content[0].description}
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-purple-400">
              {content[1].date}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {content[1].title}{" "}
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
              {content[1].description}
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-purple-400">
              {content[2].date}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {content[2].title}{" "}
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
              {content[2].description}
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-purple-400">
              {content[3].date}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {content[3].title}{" "}
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
              {content[3].description}
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
