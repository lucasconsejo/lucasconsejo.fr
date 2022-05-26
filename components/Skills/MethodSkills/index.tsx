type MethodSkillsProps = {
    methods: Array<string>;
};

export default function MethodSkills({ methods }: MethodSkillsProps) {
    return (
        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto mb-10">
            {methods.map((method, index) => (
                <div key={index} className="text-zinc-200 mx-2 bg-zinc-800/80 font-medium p-2.5 rounded leading-4 border border-1 border-zinc-700/70 shadow-[rgb(255,255,255,0.16)_0px_-1px_1px_inset] hover:bg-purple-700 cursor-default">
                    {method}
                </div>
            ))}
        </div>
    );
}
