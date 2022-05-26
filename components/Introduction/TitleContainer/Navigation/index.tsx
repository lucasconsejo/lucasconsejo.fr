import data from "./data";

const Navigation: React.FC = () => (
    <div className="flex justify-center space-x-6 md:order-2 md:justify-start">
        {data.map((item) => (
            <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 mt-3"
            >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-7 w-7" aria-hidden="true" />
            </a>
        ))}
    </div>
);

export default Navigation;
