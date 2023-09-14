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

//projects screens
import Farmsmarter from "../assets/projects_screens/Farmsmarter_website.png";
import MIA from "../assets/projects_screens/MIA_website.png";
import FSApp from "../assets/projects_screens/Farmsmarter_webapp.png";

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
      "Farmsmarter website itemizes all what Farmsmarter does, from helping small holder farmers achieve better yields",
    TechStacks: [{ hash: "#react", colorClass: "text-[#A73121]" }],
  },
  {
    Company: "Mentor Intro Africa",
    Name: "MIA Website",
    Image: MIA,
    URL: "https://www.mentorintroafrica.com/",
    Description:
      "Mentor Intro Africa is a platform that offers guidance on how to achieve plans",
    TechStacks: [
      { hash: "#next", colorClass: "text-[#FFE17B]" },
      { hash: "#tailwind", colorClass: "text-[#F4E0B9]" },
    ],
  },
  {
    Company: "Farmsmarter",
    Name: "FarmSmater Web App",
    Image: FSApp,
    URL: "https://farmsmarter.app/",
    Description:
      "Farmsmarter web app makes it easy for farmers to get the \
  best out of their crops through guidance from Farmsmarter\
  technologies to monitor growth of their crops, how to\
  prevent disease from disease library, community chat forum\
  to communicate with other farms",
    TechStacks: [
      { hash: "#react", colorClass: "text-[#0079FF]" },
      { hash: "#docker", colorClass: "text-[#FF0303]" },
      { hash: "#google-map", colorClass: "text-[#6F1AB6]" },
    ],
  },
];
