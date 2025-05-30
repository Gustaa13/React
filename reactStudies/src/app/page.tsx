import { Introduction } from "@/components/introduction/Introduction";
import { StudySection } from "@/components/properties/StudySection";
import { Post } from "@/components/properties/Post";
import { postList } from "@/data/postList";
import { Greeting } from "@/components/effect-reducers-context/Greeting";
import { Rating } from "@/components/exercise/Rating";
import { StudentTable } from "@/components/exercise/studentTable/StudentTable";
import { studentList } from "@/data/studentList";
import { Buttons } from "@/components/states-events/Buttons";
import { Form } from "@/components/states-events/Form";
import { Counter } from "@/components/states-events/Counter";
import { SecretArea } from "@/components/states-events/SecretArea";
import { NameForm } from "@/components/states-events/NameForm";
import { TaskList } from "@/components/exercise/TaskList";
import { PhotoGallery } from "@/components/exercise/photoGallery/PhotoGallery";
import { Quiz } from "@/components/exercise/quiz/Quiz";
import { VideoPlayer } from "@/components/effect-reducers-context/VideoPlayer";
import { TextList } from "@/components/effect-reducers-context/TextList";
import { CountClickProvider } from "@/components/effect-reducers-context/counterClick/CountClickContext";
import { PostListProvider } from "@/components/exercise/postList/PostListContext";
import { SimpleChatContainer } from "@/components/exercise/simpleChat/SimpleChatContainer";
import { Users } from "@/components/requests/Users";
import { ImageUpload } from "@/components/requests/ImageUpload";
import { AddPost } from "@/components/requests/AddPost";
import { ContainerCustomButton } from "@/components/states-events/customButton/ContainerCustomButton";

const Home = () => {

  return (
    <>
      <StudySection titleText={"1. Introdução"}> {/* Introduction of Studies: creating and exporting components */}

        <Introduction />
      
      </StudySection>
      
      <StudySection titleText={"2. Propriedades"}> {/* React properties: creating variables, props, children components, types and conditional rendering */}

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

      <StudySection titleText="3. Exercícios"> {/* Exercise: practicing */}

        <Rating rate={3} />

        <StudentTable studentList={studentList} />

      </StudySection>

      <StudySection titleText="4. Eventos" className="flex flex-col justify-center items-center gap-10"> {/* React states and events: event click, passing function to component, preventDefault, manipulation of elements, (hooks) using State, State updater, State with objects, State with arrays */}

        <Buttons />

        <ContainerCustomButton />

        <Form />

        <Counter />

        <SecretArea />

        <NameForm />
      </StudySection>

      <StudySection titleText="5. Exercícios" className="flex flex-col gap-10"> {/* Exercise: practicing */}

        <TaskList />

        <PhotoGallery />

        <Quiz />

      </StudySection>

      <StudySection titleText="6. Efeitos"> {/* Effect, Reducers and Context: (hooks) using Effect, using Reducer, using Context */}

        <Greeting />

        <VideoPlayer />

        <TextList />

        <CountClickProvider />

      </StudySection>

      <StudySection titleText="7. Exercícios"> {/* Exercise: practicing */}

        <PostListProvider />

        <SimpleChatContainer />

      </StudySection>

      <StudySection titleText="8. Requisições" className="flex flex-col gap-10 justify-center"> {/* Requests: using axios */}

        <Users />

        <ImageUpload />

        <AddPost />

      </StudySection>
    </>
  );
}

export default Home;

