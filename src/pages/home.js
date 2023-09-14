import About from "../components/about";
import Nav from "../components/nav";
import Stacks from "../components/stacks";
import { StacksAssets } from "../constants";
import Projects from "../components/projects";
import StarsLight from "../components/stars";
import Introduction from "../components/introduction";

const Home = () => {
  return (
    <main className="w-full over overflow-x-hidden ">
      <div className="h-[100vh] min-h-[600px] bg-dark-pattern bg-cover bg-no-repeat bg-center bg-fixed">
        <Nav />
        <About />
      </div>
      <section className="mt-10 h-[100vh] relative z-0">
        <div className="top-0  absolute inset-0 z-[-1]">
          <StarsLight />
        </div>
        <div className="z-20  ml-24">
          <Introduction />
        </div>
      </section>
      <section className="ml-24">
        <Projects />
      </section>
      <section className="mt-10">
        <div className=" w-full flex flex-col justify-center items-center shadow-sm shadow-gray-400 pt-7 rounded-lg">
          <h2 className=" font-extrabold text-4xl">Technologies</h2>
          <div className=" max-w-lg grid grid-cols-5 justify-center w-full items-center">
            {StacksAssets.map((item, index) => {
              return <Stacks stackIcon={item.icon} key={index} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
