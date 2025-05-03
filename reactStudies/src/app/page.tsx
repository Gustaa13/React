"use client"

import { Introduction } from "@/components/introduction/Introduction";
import { StudySection } from "@/components/properties/StudySection";
import { Post } from "@/components/properties/Post";
import { postList } from "@/data/postList";
import { Greeting } from "@/components/exercise/Greeting";
import { Rating } from "@/components/exercise/Rating";
import { StudentTable } from "@/components/exercise/StudentTable";
import { students } from "@/data/students";
import { Buttons } from "@/components/states-events/Buttons";
import { CustumButton } from "@/components/states-events/CustomButton";
import { Form } from "@/components/states-events/Form";
import { Counter } from "@/components/states-events/Counter";
import { SecretArea } from "@/components/states-events/SecretArea";
import { NameForm } from "@/components/states-events/NameForm";
import { TaskList } from "@/components/exercise/TaskList";

const Home = () => {

  return (
    <>
      <StudySection titleText={"1. Introdução"}> {/* Introduction of Studies: creating and exporting components */}
        <Introduction /> 
      </StudySection>
        
      <StudySection titleText={"2. Propriedades"}> {/* React properties: creating variables, props, children components, conditional rendering */}

        <Post 
          title="Pessoa na Praia"
          image="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
          description="O sol beijando a pele, o vento dançando nos cabelos e o mar sussurrando segredos... 🌴☀️ Não existe lugar onde eu me sinta mais livre do que aqui, com os pés na areia e a alma leve. 🌊💛 Momentos como esses são a melhor lembrança de que a felicidade pode ser simples: basta um pouco de sol, o barulho das ondas e um sorriso no rosto. 🌞📸 #PraiaVibes #MarSempreCura #DiaDeSol #Liberdade #MomentoDePaz"
        />

        {/*OR*/}

        {(postList.length > 0) ? (
          postList.map(
            (post, index) => <Post key={index} title={post.title} image={post.image} description={post.description}/>
          )
        ) : null}

      </StudySection> 

      <StudySection titleText="3. Exercícios"> {/* Erercise: practicing */}
        <Greeting />
        <Rating rate={3} />
        <StudentTable students={students} />
      </StudySection>

      <StudySection titleText="4. Eventos" className="flex flex-col justify-center items-center gap-10"> {/* React states and events: event click, passing function to component, preventDefault, manipulation of elements, (hooks) using State, State updater, State with objects, State with arrays*/}
          <Buttons />

          <div className="flex gap-5">
            <CustumButton label="Clique aqui 1" onClick={() => alert("Clicou no botão 1")} />
            <CustumButton label="Clique aqui 2" onClick={() => alert("Clicou no botão 2")}/>
            <CustumButton label="Clique aqui 3" onClick={() => alert("Clicou no botão 3")}/>
          </div>

          <Form />

          <Counter />

          <SecretArea />

          <NameForm />
      </StudySection>

      <StudySection titleText="5. Exercícios" className="">
        <TaskList />
      </StudySection>
    </>
  );
}

export default Home;

