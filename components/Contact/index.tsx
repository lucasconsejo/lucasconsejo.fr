import { I18nContext } from "contexts/i18nContext";
import { i18nContact } from "i18n";
import { useContext } from "react";

export default function Contact() {
  const { localeState } = useContext(I18nContext);
  const { title, subTitle, content } = i18nContact[localeState];
  return (
    <div id="contact" className="bg-white bg-opacity-5">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block text-white">{title}</span>
          <span className="block text-purple-400 text-2xl md:text-4xl">
            {subTitle}
          </span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:lucas.consejo@gmail.com"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-[#121212]"
            >
              {content[0]}
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="https://www.linkedin.com/in/lucas-consejo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200"
            >
              {content[1]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
