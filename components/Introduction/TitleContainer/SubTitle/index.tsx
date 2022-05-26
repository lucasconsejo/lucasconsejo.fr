type SubTitleProps = {
    text: string;
};

const SubTitle: React.FC<SubTitleProps> = ({ text }) => (
    <div className="flex flex-col items-center sm:flex-row font-medium text-lg sm:text-2xl space-x-1 whitespace-nowrap">
        <h2 className="text-left">{text}</h2>
        <a
            href="https://www.cdiscount.com/"
            target="_blank"
            rel="noreferrer"
            className="block typewriter text-orange-cds hover:underline"
        >
            @cdiscount.
        </a>
    </div>
);

export default SubTitle;
