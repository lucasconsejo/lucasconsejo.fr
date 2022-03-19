export default function Introduction() {
  return (
    <div
      id="intro"
      className="flex flex-col justify-start items-center sm:flex-row sm:justify-around w-full pt-36 sm:pt-0"
    >
      <div className="space-y-4 order-last sm:order-first mt-5 sm:mt-0">
        <div className="text-white space-y-2">
          <h1 className="font-bold text-3xl sm:text-5xl text-center sm:text-left">
            Lucas Consejo
          </h1>
          <div className="flex flex-col items-center sm:flex-row font-medium text-xl sm:text-2xl space-x-1 whitespace-nowrap">
            <h2 className="text-left">Ingénieur d&#39;étude - Développeur</h2>
            <a
              href="https://www.cdiscount.com/"
              target="_blank"
              rel="noreferrer"
              className="block typewriter text-orange-cds hover:underline"
            >
              @cdiscount.
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-36 h-36 sm:w-64 sm:h-64"></div>
    </div>
  );
}
