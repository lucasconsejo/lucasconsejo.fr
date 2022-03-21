export default function Contact() {
  return (
    <div className="bg-white bg-opacity-5">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block text-white">Contact</span>
          <span className="block text-purple-400 text-2xl md:text-4xl">
            Une envie de me contacter ?
          </span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:lucas.consejo@gmail.com"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-[#121212]"
            >
              Envoyer un email 📫
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="https://www.linkedin.com/in/lucas-consejo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200"
            >
              Message Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
