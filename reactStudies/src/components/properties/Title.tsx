type TitleProps = {
    titleText: string;
}

export const Title = ({ titleText }: TitleProps) => { {/* or ({titleText}: {titleText: string}) // standard props */}

    return (
        <>
            <h1 className="font-bold text-2xl mb-5 text-sky-300 uppercase">{titleText}</h1>
        </>
    );
}