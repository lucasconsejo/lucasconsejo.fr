type DescriptionProps = {
    text: string;
};

const Description: React.FC<DescriptionProps> = ({ text }) => ( 
    <p className="text-md leading-relaxed" style={{ color: "#ababab", fontWeight: 400 }}>
        {text}
    </p>
);

export default Description;
