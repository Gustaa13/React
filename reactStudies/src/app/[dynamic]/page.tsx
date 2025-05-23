type PageProps = {
    params: {
        dynamic: string;
    }
}

const Page = async ({ params }: PageProps) => {
    
    const { dynamic } = await params;

    return(
        <div>
            Página de {dynamic}
        </div>
    );
}

export default Page;