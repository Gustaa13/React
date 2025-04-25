const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {weekday: 'long'}).format(today);
}

export const Person = () => {
    const title: string = "Pessoa na praia";
    const image: string = "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const today = new Date();

    return (
        <> {/* one element (root) and camelCase ever */} 
            <h1 className="text-xl text-amber-400 mb-2 text-center">{title}</h1> 
            <img 
                src={image}
                alt="Foto de mulher num pôr do sol na praia" 
                className="rounded-md"
            />
            <p className="text-sm text-amber-400">Dia: {getWeekDay(today)}</p>
        </>
    );
}