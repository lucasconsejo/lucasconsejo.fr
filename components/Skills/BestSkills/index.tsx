import Icon from '../Icon';
import data from './data';

export default function BestSkills() {
    return (
        <div className="flex flex-wrap items-center justify-center md:justify-between w-full max-w-4xl mx-auto pt-4 sm:mt-10">
            {data.map((skill) => (
                <Icon
                    key={skill.id}
                    id={skill.id}
                    src={skill.src}
                    url={skill.url}
                    className={skill.className}
                >
                    {skill.text}
                </Icon>
            ))}
        </div>
    );
}
