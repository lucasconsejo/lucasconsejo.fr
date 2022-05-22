type TitleProps = {
  title: string;
  subTitle: string;
  align?: "left" | "center" | "right";
  className?: string;
};

export default function Title({ title, subTitle, align, className }: TitleProps) {
  return (
    <div
      className={`text-center w-full pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8 z-20 
        ${align == "left" && "md:text-left"}
        ${align == "center" && "text-center"}
        ${align == "right" && "md:text-right"}
        ${className}
      `}
    >
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        <span className="block">{title}</span>
        <span className="block text-purple-400 text-2xl md:text-4xl">
          {subTitle}
        </span>
      </h2>
    </div>
  );
}
