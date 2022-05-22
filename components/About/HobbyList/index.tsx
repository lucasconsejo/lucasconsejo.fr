import { useContext } from "react";
import { I18nContext } from "contexts/i18nContext";
import { i18nAbout } from "i18n";
import Hobby from "../Hobby";

export default function HobbyList() {
  const { localeState } = useContext(I18nContext);
  const { content } = i18nAbout[localeState];
  
  return (
    <div className="sm:flex flex-wrap max-w-screen-2xl mx-auto justify-center items-center text-center gap-8 pb-16 pt-5">
      <Hobby title={content[0].title} icon="movie" theme="dark">
        <p className="text-md text-gray-200 py-4">
          {content[0].start}{" "}
          <a
            href="https://www.youtube.com/watch?v=hWRSJlp50rQ"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold text-white hover:text-purple-400"
          >
            The Batman
          </a>{" "}
          {content[0].end}
        </p>
      </Hobby>

      <Hobby title={content[1].title} icon="info" theme="light" alignCenter>
        <p className="text-md text--gray-800 py-4">
          {content[1].start}{" "}
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold text-black hover:text-purple-400"
          >
            {content[1].end}
          </a>
          . 🤭
        </p>
      </Hobby>

      <Hobby title={content[2].title} icon="video-games" theme="purple">
        <p className="text-md  text-gray-800 py-4">
          {content[2].start}{" "}
          <a
            href="https://www.youtube.com/watch?v=jPlWnCE4Edo"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold text-black hover:text-purple-900"
          >
            Dark Souls
          </a>
          . 😏
        </p>
      </Hobby>
    </div>
  );
}
