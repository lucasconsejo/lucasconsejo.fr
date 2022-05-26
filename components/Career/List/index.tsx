import Item from "../Item";

type ListProps = {
    content: any;
};

const List: React.FC<ListProps> = ({ content }) => (
    <ol className="relative border-l border-purple-900 mt-12 md:my-0 w-11/12 md:w-7/12 lg:w-5/12">
        {content.map((item, index) => (
            <Item
                key={index}
                urlName={item.urlName}
                url={item.url}
                content={content[0]} 
                isLast={index === content.length-1}
                color={item.color}
            />
        ))}
    </ol>
);

export default List;
