import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { I18nContext } from "contexts/i18nContext";
import { imageKitLoader } from "utils";
import Image from "next/image";

export default function SelectLang() {
  const { localeState } = useContext(I18nContext);
  return (
    <div className="text-right">
      <Menu as="div" className="relative text-left">
        <div>
          <Menu.Button aria-label="lang" className="flex w-full justify-center items-center rounded-md text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
                <a 
                  href="/en" 
                  aria-label="english"
                  className={`${
                    localeState === "en" ? "bg-violet-500" : "hover:bg-white hover:text-black"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                >
                  <EnglishIcon />
                  English
                </a>
              </Menu.Item>
              <Menu.Item>
                <a 
                  href="/fr"
                  aria-label="english"
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
    <div className="relative w-6 h-6 items-center mr-2">
      <Image 
        loader={imageKitLoader} 
        src="/lucasconsejo/lang/french.svg"
        layout="fill" 
        className="object-contain" 
        alt="french flag"
        sizes="2vw" 
        quality={100}
        priority
      />
    </div>
  );
};

export function EnglishIcon() {
  return (
    <div className="relative w-6 h-6 items-center mr-2">
      <Image 
        loader={imageKitLoader} 
        src="/lucasconsejo/lang/english.svg"
        layout="fill" 
        className="object-contain" 
        alt="french flag"
        sizes="2vw" 
        quality={100}
        priority
      />
    </div>
  )
}
