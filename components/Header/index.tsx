import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import useScroll from "hooks/useScroll";
import { Link, animateScroll } from "react-scroll";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scroll] = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (scroll > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scroll]);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <nav
      className={`fixed w-full z-50 border-b bg-black bg-opacity-20 border-white/10 backdrop-blur-sm md:bg-transparent md:border-0 md:backdrop-blur-none ${
        show &&
        "md:border-b md:bg-black md:bg-opacity-20 md:border-white/10 md:backdrop-blur-sm"
      }`}
    >
      <div className="relative px-5 sm:px-6 md:px-8 z-50">
        <div className="relative flex items-center justify-between h-20 z-50">
          <div className="flex items-center w-full z-50">
            <h1
              onClick={scrollToTop}
              className="text-white text-2xl font-medium cursor-pointer"
            >
              LC
            </h1>
            <div className="hidden md:block w-full">
              <div className="flex justify-end space-x-8">
                <Link
                  className="text-gray-200 hover:text-white font-medium cursor-pointer"
                  activeClass="text-purple-400 hover:text-white"
                  to="about"
                  href="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  À propos
                </Link>
                <Link
                  className="text-gray-200 hover:text-white font-medium cursor-pointer"
                  activeClass="text-purple-400 hover:text-white"
                  to="skills"
                  href="/"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Compétences
                </Link>
                <Link
                  className="text-gray-200 hover:text-white font-medium cursor-pointer"
                  activeClass="text-purple-400 hover:text-white"
                  to="career"
                  href="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Carrière
                </Link>
                <Link
                  className="text-gray-200 hover:text-white font-medium cursor-pointer"
                  activeClass="text-purple-400 hover:text-white"
                  to="projects"
                  href="/"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                >
                  Projets
                </Link>
                <Link
                  className="text-gray-200 hover:text-white font-medium cursor-pointer"
                  activeClass="text-purple-400 hover:text-white"
                  to="contact"
                  href="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Icon menu mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              className="text-gray-200 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
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
      <Transition show={navbarOpen} className="w-full h-full">
        <div
          className="md:hidden w-full"
          onClick={() => {
            setNavbarOpen(false);
          }}
          id="mobile-menu"
        >
          <Transition.Child
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div>
              <div className="md:hidden" id="mobile-menu">
                <div className="flex flex-col px-2 pb-2 space-y-5 py-5 rounded-b-lg border-y bg-opacity-20 border-white/10">
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    className="text-xl text-gray-200 hover:text-white px-3 font-medium"
                    activeClass="text-xl text-purple-400 hover:text-white px-3 font-medium"
                    to="about"
                    href="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    À propos
                  </Link>
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    className="text-xl text-gray-200 hover:text-white px-3 font-medium"
                    activeClass="text-xl text-purple-400 hover:text-white px-3 font-medium"
                    to="skills"
                    href="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Compétences
                  </Link>
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    className="text-xl text-gray-200 hover:text-white px-3 font-medium"
                    activeClass="text-xl text-purple-400 hover:text-white px-3 font-medium"
                    to="career"
                    href="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Carrière
                  </Link>
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    className="text-xl text-gray-200 hover:text-white px-3 font-medium"
                    activeClass="text-xl text-purple-400 hover:text-white px-3 font-medium"
                    to="projects"
                    href="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projets
                  </Link>
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    className="text-xl text-gray-200 hover:text-white px-3 font-medium"
                    activeClass="text-xl text-purple-400 hover:text-white px-3 font-medium"
                    to="contact"
                    href="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
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
