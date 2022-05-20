import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { I18nContext } from "contexts/i18nContext";

export default function SelectLang() {
  const { localeState } = useContext(I18nContext);
  return (
    <div className="text-right">
      <Menu as="div" className="relative text-left">
        <div>
          <Menu.Button className="flex w-full justify-center items-center rounded-md text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {localeState === "en" ? <EnglishIcon /> : <FrenchIcon />}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-violet-200 hover:text-violet-100 hidden md:block"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-black bg-opacity-80 backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
              <Menu.Item>
                <a href="/en"
                  className={`${
                    localeState === "en" ? "bg-violet-500" : "hover:bg-white hover:text-black"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                >
                  <EnglishIcon />
                  English
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/fr"
                  className={`${
                    localeState === "fr" ? "bg-violet-500" : "hover:bg-white hover:text-black"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                >
                  <FrenchIcon />
                  Français
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export function FrenchIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      aria-hidden="true" 
      role="img" 
      className="iconify iconify--fxemoji w-6 h-6 items-center mr-2" 
      preserveAspectRatio="xMidYMid meet" 
      viewBox="0 0 512 512">
        <path 
          fill="#0B67B2" 
          d="M16.101 433.477c51.257 11.934 102.515 11.496 153.772 6.648v-.146c106.749-10.903 213.498-42.724 320.248-17.049c9.944 2.392 19.499-5.177 19.499-15.405V94.03c0-.632-.05-1.253-.123-1.868c-2.445-6.466-8.167-12.093-14.835-13.639c-97.449-22.688-194.899-.69-292.348 11.399c-10.813 1.452-21.626 2.773-32.439 3.878v-.3c-51.257 4.848-102.515 5.286-153.772-6.648C7.209 84.79 0 89.89 0 98.788v314.424c0 8.886 7.209 18.204 16.101 20.265z"
        />
        <path 
          fill="#FF473E" 
          d="M509.619 92.532c-2.364-6.619-8.163-12.435-14.959-14.01c-51.638-12.022-103.276-11.49-154.914-6.54v346.626c51.638-4.95 103.276-5.482 154.914 6.54c6.795 1.575 12.595-1.041 14.959-6.328V92.532z"
          />
        <path
          fill="#E8E8E8" 
          d="M169.873 440.125c56.624-5.356 113.249-16.089 169.873-21.517V71.982c-56.624 5.428-113.249 16.161-169.873 21.517v346.626z" 
        />
      </svg>
  );
};

export function EnglishIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      aria-hidden="true" 
      role="img" 
      className="iconify iconify--fxemoji w-6 h-6 items-center mr-2" 
      preserveAspectRatio="xMidYMid meet" 
      viewBox="0 0 512 512">
        <path 
          fill="#0b67b2" 
          d="M494.7 78.5c-159.5-37.1-319 45.5-478.6 8.3c-8.9-2-16.1 3.1-16.1 12v314.4c0 8.9 7.2 18.2 16.1 20.3c159.5 37.1 319-45.5 478.6-8.3c8.9 2.1 16.1-3 16.1-11.9V98.9c0-9-7.2-18.3-16.1-20.4z"
        />
        <path 
          fill="#ff473e" 
          d="M510.8 98.8c0-8.9-7.2-18.2-16.1-20.3c-1-.2-2.1-.5-3.1-.7L313.9 186V74.8c-39 4.7-78 11.1-117 15.8v94.2L45 92.3c-9.6-1.4-19.2-3.2-28.9-5.5c-8.9-2-16.1 3.1-16.1 12v20.8l128 77.9H0v117h133.9L0 396v17.2c0 8.9 7.2 18.2 16.1 20.3c3 .7 6 1.3 8.9 1.9l171.8-104.7v106.4c39-4.7 78-11.1 117-15.8v-91.9L460.7 419c11.3 1.5 22.6 3.5 33.9 6.2c8.9 2.1 16.1-3 16.1-11.9v-18.4l-131.9-80.3h131.9v-117h-126l126-76.7c.1-7.5.1-14.8.1-22.1z"
        />
        <path 
          fill="#e8e8e8" 
          d="m412.9 323.5l97.9 59.6v23.4l-136.3-83h-51.3l164.3 100.1c-16.6-3.5-33.3-5.7-49.9-7l-114.7-69.8v73.6c-6 .7-12 1.4-18 2.2v-117h205.9v18h-97.9zm-225 114.8c6-.7 12-1.4 18-2.2V305.5H0v18h99.9L0 384.3v23.4l138.3-84.2h49.6v1L11.7 431.8c1.4.7 2.9 1.3 4.4 1.7c7.9 1.8 15.8 3.4 23.7 4.7L187.9 348v90.3zM0 188.5v18h205.9v-117c-6 .8-12 1.5-18 2.2v76L68.7 95.1c-17.2-1.5-34.4-4-51.6-8l166.5 101.4h-51.3L0 107.9v23.4l94 57.2H0zM322.9 73.7c-6 .7-12 1.4-18 2.2v130.6h205.9v-18h-92l92-56v-23.4l-130.4 79.4h-51.3L502.8 82.7c-2.4-2-5.1-3.5-8.1-4.2c-5.9-1.4-11.7-2.5-17.6-3.6l-154.2 93.9V73.7z"
        />
    </svg>
  )
}
