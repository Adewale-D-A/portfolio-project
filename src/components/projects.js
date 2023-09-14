import { ProjectsAssests } from "../constants";

const ProjectsCards = ({ image, title, description, stacks }) => {
  return (
    <div className="rounded-[20px] shadow-lg shadow-gray-300 flex-1 transition-all zoom-in p-5">
      <div className="w-full">
        <img
          src={image}
          alt="project"
          className="w-full h-auto object-contain rounded-md"
        />
        <div className="flex flex-col gap-3 mt-4">
          <h3 className="text-white text-lg font-bold uppercase">{title}</h3>
          <p clas>{description}</p>
          <div className="flex gap-3 w-full">
            {stacks.map((stack, index) => {
              return (
                <p key={index} className={stack.colorClass}>
                  {stack.hash}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full">
      <div className="pt-10">
        <p className=" uppercase text-gray-300 text-lg">MY WORK</p>
        <h2 className="uppercase text-gray-50 text-5xl">Projects.</h2>
      </div>
      <p className="mt-5 text-lg text-gray-400 max-w-4xl">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      <div className="mt-16 flex justify-center">
        <div className="grid grid-cols-3 max-w-screen-xl gap-10">
          {ProjectsAssests.map((item, index) => {
            return (
              <ProjectsCards
                image={item.Image}
                title={item.Name}
                description={item.Description}
                stacks={item.TechStacks}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
