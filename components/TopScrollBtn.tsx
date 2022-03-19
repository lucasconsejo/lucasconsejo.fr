import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";

export default function TopScrollBtn() {
  const [scroll] = useScroll();
  const [show, setShow] = useState("hidden");

  useEffect(() => {
    if (scroll > 60) {
      setShow("fixed");
    } else {
      setShow("hidden");
    }
  }, [scroll]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${show} bottom-6 right-6 bg-black text-white rounded-full p-1 drop-shadow-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200`}
      onClick={handleClick}
    >
      <svg className="w-8 h-8" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z"
        ></path>
      </svg>
    </div>
  );
}
