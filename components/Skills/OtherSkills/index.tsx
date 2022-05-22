import Icon from '../Icon';
import data from './data';

export default function OtherSkills() {
    return (
        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto mb-3">
            {data.map((skill) => (
            <Icon
                id={skill.id}
                src={skill.src}
                url={skill.url}
                className={skill.className}
                grayscale
            >
                {skill.text}
            </Icon>
            ))}
        </div>
    );
}
