type TechnosProps = {
    technos: Array<string>;
};

const Technos: React.FC<TechnosProps> = ({ technos }) => (
    <div className="flex flex-wrap mt-3">
        {technos.map((item, index) => (
            <div key={index} className="text-gray-400 border border-gray-400 rounded px-2 mb-2 mr-3">
                {item}
            </div>
        ))}
    </div>
);

export default Technos;
