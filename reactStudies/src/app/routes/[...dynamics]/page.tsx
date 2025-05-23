type PageProps = {
    params: {
        dynamics: string[]
    }
}

const Page = async ({ params }: PageProps) => {
    
    const { dynamics } = await params;

    return(
        <div>
            Rota: {dynamics.join(', ')}
        </div>
    );
}

export default Page;