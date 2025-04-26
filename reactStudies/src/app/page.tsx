import { Introduction } from "@/components/introduction/Introduction";
import { StudySection } from "@/components/properties/StudySection";
import { Post } from "@/components/properties/Post";
import { Title } from "@/components/properties/Title";

const Home = () => {
  return (
    <>
      <StudySection titleText={"1. Introdução"}> {/* Introduction of Studies: creating and exporting components*/}
        <Introduction /> 
      </StudySection>
        
      <StudySection titleText={"2. Propriedades"}> {/* React properties: creating variables, props, children components*/}
        <Post 
          title="Pessoa na Praia"
          image="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
          description="O sol beijando a pele, o vento dançando nos cabelos e o mar sussurrando segredos... 🌴☀️ Não existe lugar onde eu me sinta mais livre do que aqui, com os pés na areia e a alma leve. 🌊💛 Momentos como esses são a melhor lembrança de que a felicidade pode ser simples: basta um pouco de sol, o barulho das ondas e um sorriso no rosto. 🌞📸 #PraiaVibes #MarSempreCura #DiaDeSol #Liberdade #MomentoDePaz"
        />
        <Post 
          title="Cachorros Brincando"
          image="https://images.pexels.com/photos/31009027/pexels-photo-31009027/free-photo-of-pastor-australiano-e-samoieda-brincando-na-praia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </StudySection> 
    </>
  );
}

export default Home;

