import Image from "next/image";

type TechnoIconProps = {
  id: string;
  src: string;
  url: string;
  className?: string;
  children: React.ReactNode;
};

export default function TechnoIcon({
  id,
  src,
  url,
  className,
  children,
}: TechnoIconProps) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        data-tooltip-target={id}
        data-tooltip-placement="bottom"
        className={`text-white relative m-4 text-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 w-10 h-10 ${
          className ? className : "lg:w-16 lg:h-16"
        }`}
      >
        <Image src={src} layout="fill" objectFit="contain" />
      </a>
      <div
        id={id}
        role="tooltip"
        data-tooltip-placement="bottom"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 tooltip rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
      >
        {children}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}
