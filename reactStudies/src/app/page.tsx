import { Introduction } from "@/components/introduction/Introduction";
import { Person } from "@/components/properties/Person";
import { Title } from "@/components/properties/Title";

const Home = () => {
  return (
    <>
      <div className="bg-gray-500 m-5 p-5 rounded-2xl">
        <Title titleText={"1. Introdução"} />
        <Introduction />
      </div>

      <div className="bg-gray-500 m-5 p-5 rounded-2xl">
        <Title titleText={"2. Propriedades"} />
        <Person />
      </div>
    </>
  );
}

export default Home;

