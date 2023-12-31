import docker from "../assets/imgs/docker.png";
import reactJs from "../assets/imgs/reactjs.png";
import css from "../assets/imgs/css.png";
import nodejs from "../assets/imgs/nodejs.png";
import tailwind from "../assets/imgs/tailwind.png";
import redux from "../assets/imgs/redux.png";
import javascript from "../assets/imgs/javascript.png";
import typescript from "../assets/imgs/typescript.png";
import git from "../assets/imgs/git.png";

import web from "../assets/imgs/web.png";
import backend from "../assets/imgs/backend.png";

import fslogo from "../assets/imgs/FarmSmarter_logo.svg";
import edge from "../assets/imgs/99edge.png";
import keys from "../assets/imgs/99keys.png";

//projects screens
import Farmsmarter from "../assets/projects_screens/Farmsmarter_website.png";
import MIA from "../assets/projects_screens/MIA_website.png";
import FSApp from "../assets/projects_screens/Farmsmarter_webapp.png";
import fiat from "../assets/projects_screens/fiatExpress.png";
import ninetyNineApt from "../assets/projects_screens/99apt.png";

export const StacksAssets = [
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactJs,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Node Js",
    icon: nodejs,
  },
  {
    name: "Tailwind Css",
    icon: tailwind,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Git",
    icon: git,
  },
];

export const SpecializationAssets = [
  {
    name: "Web Developer",
    icon: web,
  },
  {
    name: "Backend Developer",
    icon: backend,
  },
];

export const ProjectsAssests = [
  {
    Company: "Farmsmarter",
    Name: "FarmSmater Website",
    Image: Farmsmarter,
    URL: "https://farmsmarter.app/",
    Description:
      "State of the art solutions to help the global effort in achieving a climate-secure, sustainable future. Empowering smallholder farmers to improve productivity via state-of-the art mobile technology",
    TechStacks: [{ hash: "#react.JS", colorClass: "text-[#A73121]" }],
  },
  {
    Company: "Mentor Intro Africa",
    Name: "MIA Website",
    Image: MIA,
    URL: "https://www.mentorintroafrica.com/",
    Description:
      "Mentor Intro Africa (MIA) is a dynamic platform dedicated to fostering mentorship and personal growth within Africa's professional and entrepreneurial communities",
    TechStacks: [
      { hash: "#next.JS", colorClass: "text-[#FFE17B]" },
      { hash: "#tailwind", colorClass: "text-[#F4E0B9]" },
    ],
  },
  {
    Company: "Farmsmarter",
    Name: "FarmSmater Web App",
    Image: FSApp,
    URL: "https://farmsmarter.app/",
    Description:
      "Farmsmarter web app makes it easy for farmers to get the best out of their crops through guidance from Farmsmarter technologies to monitor growth of their crops, how to prevent disease from disease library, community chat forum to communicate with other farms",
    TechStacks: [
      { hash: "#react.JS", colorClass: "text-[#0079FF]" },
      { hash: "#docker", colorClass: "text-[#FF0303]" },
      { hash: "#google-map", colorClass: "text-[#6F1AB6]" },
    ],
  },
  {
    Company: "Fiat Express",
    Name: "Fiat Express Web App",
    Image: fiat,
    URL: "https://www.fiatexpress.com/",
    Description:
      "FiatExpress is designed to work as a medium of exchange. Individual transaction ownership records are stored in a ledger, which is a computerized database using strong cryptography to secure transaction records, to control the creation of additional exchange, and to verify the transfer of exchange ownership",
    TechStacks: [
      { hash: "#react.JS", colorClass: "text-[#0079FF]" },
      { hash: "#docker", colorClass: "text-[#FF0303]" },
      { hash: "#google-map", colorClass: "text-[#6F1AB6]" },
    ],
  },
  {
    Company: "99 Apartments",
    Name: "99Apartment Proptech Web App",
    Image: ninetyNineApt,
    URL: "https://www.the99apartments.com/",
    Description:
      "99Apartment is dedicated in providing a seamless and delightful apartment rental experience, connecting users with extraordinary spaces that elevate lifestyles",
    TechStacks: [
      { hash: "#next.JS", colorClass: "text-[#0079FF]" },
      { hash: "#tilwind.css", colorClass: "text-[#6F1AB6]" },
    ],
  },
];

export const ExperienceAssets = [
  {
    title: "React.js Developer",
    company_name: "FarmSmarter",
    icon: fslogo,
    iconBg: "#383E56",
    date: "Oct 2022 - Till date",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Master",
    company_name: "99Keys",
    icon: keys,
    iconBg: "#383E56",
    date: "Sep 2022 - July 2023",
    points: [
      "Manage exisitng booking platform.",
      "Arrange weekly meetings with cross-functional teams including designers, product managers and marketers to discuss how to improve the platform better.",
      "Implementing changes and requests ensuring better user experience.",
      "Participating in stakeholders meetings and getting user's feedbacks.",
    ],
  },
  {
    title: "Junior React.js Developer",
    company_name: "99Edge",
    icon: edge,
    iconBg: "#383E56",
    date: "Apr 2022 - Sept 2022",
    points: [
      "Developing and maintaining web applications using React.js and Wordpress.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and receiving constructive feedback from senior developers.",
    ],
  },
];
