import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav id="header" className="fixed w-full z-50">
      <div id="header" className="relative px-5 sm:px-6 md:px-8 z-50">
        <div className="relative flex items-center justify-between h-20 z-50">
          <div className="flex items-center w-full z-50">
            <Link href="/" passHref>
              <a className="flex-shrink-0">
                <h1 className="text-white text-xl font-medium">
                  Lucas Consejo
                </h1>
              </a>
            </Link>
            <div className="hidden md:block w-full">
              <div className="flex justify-end space-x-8">
                <Link href="/a-propos" passHref>
                  <a className="text-gray-300 hover:text-white font-medium">
                    À propos
                  </a>
                </Link>
                <Link href="/carriere" passHref>
                  <a className="text-gray-300 hover:text-white font-medium">
                    Carrière
                  </a>
                </Link>
                <Link href="/projets" passHref>
                  <a className="text-gray-300 hover:text-white font-medium">
                    Projets
                  </a>
                </Link>
                <Link href="/contact" passHref>
                  <a className="text-gray-300 hover:text-white font-medium">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Icon menu mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                width="15"
                height="15"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <Transition show={navbarOpen} className="absolute w-full h-full">
        <div
          className="md:hidden bg-background-purple bg-opacity-40 backdrop-blur-sm z-0 w-full header-dropdown"
          onClick={() => {
            setNavbarOpen(false);
          }}
          id="mobile-menu"
        >
          <Transition.Child
            enter="transition ease-in-out duration-500 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div>
              <div className="md:hidden" id="mobile-menu">
                <div
                  id="sub-header"
                  className="flex flex-col px-2 pb-2 space-y-1 rounded-b-lg"
                >
                  <Link href="/a-propos" passHref>
                    <a className="text-gray-300 hover:text-white px-3 py-2 font-medium">
                      À propos
                    </a>
                  </Link>
                  <Link href="/carriere" passHref>
                    <a className="text-gray-300 hover:text-white px-3 py-2 font-medium">
                      Carrière
                    </a>
                  </Link>
                  <Link href="/projets" passHref>
                    <a className="text-gray-300 hover:text-white px-3 py-2 font-medium">
                      Projets
                    </a>
                  </Link>
                  <Link href="/contact" passHref>
                    <a className="text-gray-300 hover:text-white px-3 py-2 font-medium">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </nav>
  );
}
