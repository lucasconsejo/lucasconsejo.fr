type ItemProps = {
    urlName: string;
    url: string;
    content: any;
    isLast: boolean;
};

const Item: React.FC<ItemProps> = ({ urlName, url, content, isLast }) => (
    <li className={`${isLast ? "ml-4" : "mb-10 ml-4"}`}>
        <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-purple-900 bg-purple-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-purple-400">
            {content.date}
        </time>
        <h3 className="text-lg font-semibold text-white">
            {content.title}{" "}
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`underline font-bold ${urlName === "Cdiscount" ? "hover:text-orange-cds" : "text-[#25b2a4]"}`}
            >
                {urlName}
            </a>
        </h3>
        <p className="text-base font-normal text-gray-400">
            {content.description}
        </p>
    </li>
);

export default Item;
