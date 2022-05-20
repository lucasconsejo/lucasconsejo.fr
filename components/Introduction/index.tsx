import { I18nContext } from "contexts/i18nContext";
import { i18nIntro } from "i18n";
import Image from "next/image";
import { useContext } from "react";
import { imageKitLoader } from "utils";

const navigation = [
  {
    name: "GitHub",
    href: "https://github.com/lucasconsejo",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Gitlab",
    href: "https://gitlab.com/lucasconsejo",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M5.868 2.75L8 10h8l2.132-7.25a.4.4 0 0 1 .765-.01l3.495 10.924a.5.5 0 0 1-.173.55L12 22L1.78 14.214a.5.5 0 0 1-.172-.55L5.103 2.74a.4.4 0 0 1 .765.009z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/lucas-consejo/",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lucasconsejo/",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Introduction() {
  const { localeState } = useContext(I18nContext);
  const { subTitle, scrollInfo } = i18nIntro[localeState];
  return (
    <div>
      <div
        id="intro"
        className="flex flex-col justify-start items-center sm:flex-row sm:justify-start pt-36 sm:pt-0"
      >
        <div className="space-y-4 order-last sm:order-first mt-16 sm:mt-0 sm:ml-36 2xl:ml-72">
          <div className="text-white space-y-2">
            <h1 className="font-bold text-3xl sm:text-5xl text-center sm:text-left">
              Lucas Consejo
            </h1>
            <div className="flex flex-col items-center sm:flex-row font-medium text-lg sm:text-2xl space-x-1 whitespace-nowrap">
              <h2 className="text-left">{subTitle}</h2>
              <a
                href="https://www.cdiscount.com/"
                target="_blank"
                rel="noreferrer"
                className="block typewriter text-orange-cds hover:underline"
              >
                @cdiscount.
              </a>
            </div>
            <div className="flex justify-center space-x-6 md:order-2 md:justify-start">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 mt-3"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-7 w-7" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden sm:block sm:absolute sm:w-5/12 sm:h-4/5 sm:top-20 sm:-right-32 2xl:w-6/12 2xl:h-3/5 2xl:top-48">
          <Image 
            loader={imageKitLoader} 
            src="/lucasconsejo/characters/character.webp"
            layout="fill" 
            className="object-contain" 
            alt="human"
            sizes="20vw" 
            quality={100}
            priority
          />
        </div>
        <div className="block relative sm:hidden w-5/12 h-72">
          <Image 
            loader={imageKitLoader} 
            src="/lucasconsejo/characters/character-mobile.webp"
            layout="fill" 
            className="object-contain" 
            alt="human" 
            sizes="20vw" 
            quality={100}
            priority
          />
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-2 text-gray-400">
        <svg className="w-7 h-7" viewBox="0 0 24 24">
          <g fill="currentColor">
            <path d="M12 5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z" />
            <path 
              fillRule="evenodd"
              d="M4 8a8 8 0 1 1 16 0v8a8 8 0 1 1-16 0V8Zm14 0v8a6 6 0 0 1-12 0V8a6 6 0 1 1 12 0Z" clipRule="evenodd" />
          </g>
        </svg>
        <p>{scrollInfo}</p>
      </div>
    </div>
  );
}
