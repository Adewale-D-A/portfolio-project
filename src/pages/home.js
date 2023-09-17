import About from "../components/about";
import Nav from "../components/nav";
import Stacks from "../components/stacks";
import { StacksAssets } from "../constants";
import Projects from "../components/projects";
import StarsLight from "../components/stars";
import Introduction from "../components/introduction";
import Experience from "../components/experience";
import Contact from "../components/contact";

const Home = () => {
  return (
    <main className="w-full over overflow-x-hidden ">
      <div className="h-[100vh] min-h-[600px] bg-dark-pattern bg-cover bg-no-repeat bg-center bg-fixed">
        <Nav />
        <About />
      </div>
      <section
        className="mt-10 md:h-[100vh] min-h-[600px] h-auto relative z-0"
        id="about"
      >
        <div className="top-0  absolute inset-0 z-[-1]">
          <StarsLight />
        </div>
        <div className="z-20 ml-10 md:ml-24 mr-10">
          <Introduction />
        </div>
      </section>
      <section className="mt-20 ml-10 md:ml-24 mr-10" id="projects">
        <Projects />
      </section>
      <section className="mt-20">
        <Experience />
      </section>
      <section className="my-20 px-5">
        <div className=" w-full flex flex-col justify-center items-center shadow-sm shadow-gray-400 pt-7 rounded-lg">
          <div className=" max-w-lg grid grid-cols-3 md:grid-cols-5 justify-center w-full items-center">
            {StacksAssets.map((item, index) => {
              return <Stacks stackIcon={item.icon} key={index} />;
            })}
          </div>
        </div>
      </section>
      <section className="mt-20 my-10" id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
