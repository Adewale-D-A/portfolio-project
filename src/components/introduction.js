import { SpecializationAssets } from "../constants";

const SpecilaizationCards = ({ name, icon }) => {
  return (
    <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-lg shadow-gray-300 flex-1 transition-all zoom-in">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] md:min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain "
        />
        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
      </div>
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="w-full">
      <div className="pt-10">
        <p className=" uppercase text-gray-300 text-lg">Introduction</p>
        <h2 className="uppercase text-gray-50 text-5xl">Overview.</h2>
      </div>
      <p className="mt-5 text-lg md:text-md text-gray-400 max-w-4xl">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript. Expertise in frameworks, libraries and technologies like
        React, Node.js, Docker and Redux. I'm a quick learner and collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life!
      </p>

      <div className="mt-16 flex justify-center">
        <div className="flex flex-col md:flex-row  max-w-3xl gap-10">
          {SpecializationAssets.map((item, index) => {
            return (
              <SpecilaizationCards
                key={index}
                name={item.name}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
