import React, { useContext } from "react";
import dayjs from "dayjs";
import { I18nContext } from "contexts/i18nContext";
import { i18nFooter } from "i18n";
import { navigation } from "./navigation";

export default function Footer() {
  const { localeState } = useContext(I18nContext);
  const { copyright } = i18nFooter[localeState];
  const year = dayjs().format("YYYY");

  return (
    <footer className="mb-5 lg:mb-10 xl:mb-0">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-7 w-7" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {year} {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
