import { Post } from "@/components/properties/Post";
import { StudySection } from "@/components/properties/StudySection";
import { postList } from "@/data/postList";

const Page = () => {
    return(
        <StudySection titleText={"Propriedades"}> {/* React properties: creating variables, props, children components, types and conditional rendering */}

            <Post
            title="Pessoa na Praia"
            image="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            description="O sol beijando a pele, o vento dançando nos cabelos e o mar sussurrando segredos... 🌴☀️ Não existe lugar onde eu me sinta mais livre do que aqui, com os pés na areia e a alma leve. 🌊💛 Momentos como esses são a melhor lembrança de que a felicidade pode ser simples: basta um pouco de sol, o barulho das ondas e um sorriso no rosto. 🌞📸 #PraiaVibes #MarSempreCura #DiaDeSol #Liberdade #MomentoDePaz"
            />

            {/* OR */}

            {(postList.length > 0) ? (
            postList.map(
                (post, index) => <Post key={index} title={post.title} image={post.image} description={post.description}/>
            )
            ) : null}
            
      </StudySection>
    );
}

export default Page;