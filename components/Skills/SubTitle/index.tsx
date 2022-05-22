type SubTitleProps = {
    subTitle: string
};

export default function SubTitle({ subTitle }: SubTitleProps) {
    return (
        <div className="flex items-center mt-2 mb-4 max-w-[16rem] w-full space-x-2 mx-auto">
            <div className="h-px flex-grow bg-white/20"></div>
                <div className="text-white/30 text-md font-medium uppercase">
                    {subTitle}
                </div>
            <div className="h-px flex-grow bg-white/20"></div>
        </div>
    );
}
