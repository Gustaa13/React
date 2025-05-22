type PageProps = {
    params: {
        dinamic: string;
    }
}

const Page = async ({ params }: PageProps) => {
    return(
        <div>
            Página de {params.dinamic}
        </div>
    );
}

export default Page;