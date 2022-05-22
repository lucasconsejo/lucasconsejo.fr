import Icon from '../Icon';
import data from './data';

type EnvSkillsProps = {
    os: Array<string>;
};

export default function EnvSkills({ os } : EnvSkillsProps) {
    return (
        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto sm:mb-20">
            {data.map((skill, index) => (
                <Icon
                    id={skill.id}
                    src={skill.src}
                    url={skill.url}
                    className={skill.className}
                    grayscale
                >
                    {os[index]}
                </Icon>
            ))}
        </div>
    );
}
