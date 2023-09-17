import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ExperienceAssets } from "../constants";

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <div className="w-full">
      <div className="w-full ml-10 md:ml-24 pr-10">
        <div className="pt-10">
          <p className=" uppercase text-gray-300 text-lg">WHERE I'VE WORKED</p>
          <h2 className="uppercase text-gray-50 text-5xl">Work Experience.</h2>
        </div>
        <p className="mt-5 text-lg md:text-md text-gray-400 max-w-4xl">
          I have had the opportunity to contribute my problem solving skills in
          these organizations.
        </p>
      </div>

      <div className="mt-16 flex justify-center">
      <VerticalTimeline>
          {ExperienceAssets.map((experience, index) => {
            return (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          )})}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
