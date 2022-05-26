type ScrollInfoProps = {
    text: string;
};

const ScrollInfo: React.FC<ScrollInfoProps> = ({ text }) => (
    <div className="hidden md:flex justify-center items-center space-x-2 text-gray-400">
        <svg className="w-7 h-7" viewBox="0 0 24 24">
            <g fill="currentColor">
            <path d="M12 5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z" />
            <path 
                fillRule="evenodd"
                d="M4 8a8 8 0 1 1 16 0v8a8 8 0 1 1-16 0V8Zm14 0v8a6 6 0 0 1-12 0V8a6 6 0 1 1 12 0Z" clipRule="evenodd" />
            </g>
        </svg>
        <p>{text}</p>
    </div>
);

export default ScrollInfo;
