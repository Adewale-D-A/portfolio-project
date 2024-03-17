import { WebAppProjectsAssests, WebsitesProjectsAssests } from "../constants";

const ProjectsCards = ({ image, title, description, stacks, url }) => {
  return (
    <div className="rounded-md shadow-md shadow-gray-600 flex-1 transition-all zoom-in p-5">
      <a href={url} target="_blank" rel="noreferrer" className="w-full">
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
      </a>
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
      <p className="mt-5 text-lg md:text-md text-gray-400 max-w-4xl">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described and when clicked
        links to live demos. It reflects my ability to solve complex problems,
        work with different technologies, and manage projects effectively.
      </p>

      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="w-full my-5 font-semibold">
          <h5>Web Application Based Projects</h5>
        </div>
        <div className="flex flex-col md:grid grid-cols-3 max-w-screen-xl gap-10">
          {WebAppProjectsAssests.map((item, index) => {
            return (
              <ProjectsCards
                key={index}
                image={item.Image}
                title={item.Name}
                description={item.Description}
                stacks={item.TechStacks}
                url={item.URL}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-center">
        <div className="w-full my-5 font-semibold">
          <h5>Websites Based Projects</h5>
        </div>
        <div className="flex flex-col md:grid grid-cols-3 max-w-screen-xl gap-10">
          {WebsitesProjectsAssests.map((item, index) => {
            return (
              <ProjectsCards
                key={index}
                image={item.Image}
                title={item.Name}
                description={item.Description}
                stacks={item.TechStacks}
                url={item.URL}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
