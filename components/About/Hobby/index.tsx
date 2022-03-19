type HobbyProps = {
  title: string;
  icon: string;
  alignCenter?: boolean;
  theme: "dark" | "light" | "purple";
  children: React.ReactNode;
};

export default function Hobby({
  title,
  icon,
  alignCenter,
  theme,
  children,
}: HobbyProps) {
  return (
    <div
      className={`w-10/12 sm:w-1/2 lg:w-1/4 p-4 mx-auto mt-6 shadow-lg rounded-lg
        ${theme === "dark" && "bg-black"}
        ${theme === "light" && "bg-white"}
        ${theme === "purple" && "bg-purple-400"}
        ${alignCenter && "lg:mt-24"}
    `}
    >
      <div className="flex-shrink-0">
        <div
          className={`flex items-center mx-auto justify-center h-12 w-12 rounded-md
            ${theme === "dark" && "bg-white text-black"}
            ${theme === "light" && "bg-black text-white"}
            ${theme === "purple" && "bg-black text-purple-400"}
        `}
        >
          {icon === "movie" && (
            <svg width="20" height="20" className="h-6 w-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m20.84 2.18l-3.93.78l2.74 3.54l1.97-.4l-.78-3.92m-6.87 1.36L12 3.93l2.75 3.53l1.96-.39l-2.74-3.53m-4.9.96l-1.97.41l2.75 3.53l1.96-.39L9.07 4.5m-4.91 1l-.98.19a2 2 0 0 0-1.57 2.35L2 10l4.9-.97L4.16 5.5M2 10v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V10H2Z"
              ></path>
            </svg>
          )}
          {icon === "info" && (
            <svg width="20" height="20" className="h-6 w-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414L24 12zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757L2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
              ></path>
            </svg>
          )}
          {icon === "video-games" && (
            <svg width="20" height="20" className="h-6 w-6" viewBox="0 0 16 16">
              <path
                fill="currentColor"
                d="M5.502 3a4.5 4.5 0 0 0 0 9h5.008a4.5 4.5 0 1 0 0-9H5.502ZM3.504 7.5a.5.5 0 0 1 .5-.5h1V6a.5.5 0 1 1 1 0v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0V8h-1a.5.5 0 0 1-.5-.5ZM11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
              ></path>
            </svg>
          )}
        </div>
      </div>
      <h3
        className={`text-2xl sm:text-xl font-semibold py-4
        ${theme === "dark" && "text-white"}
        ${(theme === "light" || theme === "purple") && "text-black"}
      `}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
