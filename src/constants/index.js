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
import seventhCare from "../assets/projects_screens/7thCare.png";
import premiumSouvenirs from "../assets/projects_screens/premiumSouvenirs.png";
import tuthub from "../assets/projects_screens/tuthub.png";

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

export const WebAppProjectsAssests = [
  {
    Company: "Farmsmarter",
    Name: "FarmSmater Web App",
    Image: FSApp,
    URL: "https://beta-webapp.farmsmarter.app/",
    Description: "AgriTech solution for smallholder farmers.",
    TechStacks: [
      { hash: "#react.JS", colorClass: "text-[#0079FF]" },
      { hash: "#docker", colorClass: "text-[#FF0303]" },
      { hash: "#google-map", colorClass: "text-[#6F1AB6]" },
    ],
  },
  {
    Company: "Mentor Intro Africa (MIA)",
    Name: "MIA Web App",
    Image: MIA,
    URL: "https://www.mentorintroafrica.com/",
    Description:
      "Dynamic platform dedicated to fostering mentorship and personal growth.",
    TechStacks: [
      { hash: "#next.js", colorClass: "text-[#FFE17B]" },
      { hash: "#tailwind", colorClass: "text-[#F4E0B9]" },
      { hash: "#typeScript", colorClass: "text-[#F4E0B9]" },
    ],
  },
  {
    Company: "Tutorial Hub",
    Name: "TUThub App",
    Image: tuthub,
    URL: "https://tutorial-hub-umber.vercel.app/",
    Description: "Tutor-tutee meeting scheduling app",
    TechStacks: [
      { hash: "#react.js", colorClass: "text-[#FFE17B]" },
      { hash: "#tailwind", colorClass: "text-[#F4E0B9]" },
      { hash: "#typeScript", colorClass: "text-[#F4E0B9]" },
    ],
  },
  {
    Company: "Fiat Express",
    Name: "Fiat Express Web App",
    Image: fiat,
    URL: "https://www.fiatexpress.com/",
    Description: "Currency Exchange made easy.",
    TechStacks: [
      { hash: "#next.js", colorClass: "text-[#FFE17B]" },
      { hash: "#tailwind", colorClass: "text-[#F4E0B9]" },
      { hash: "#typeScript", colorClass: "text-[#F4E0B9]" },
    ],
  },
  {
    Company: "The 99Apartments",
    Name: "99Apartment Proptech Web App",
    Image: ninetyNineApt,
    URL: "https://www.the99apartments.com/",
    Description: "Proptech solution.",
    TechStacks: [
      { hash: "#next.JS", colorClass: "text-[#0079FF]" },
      { hash: "#tilwind.css", colorClass: "text-[#6F1AB6]" },
      { hash: "#typeScript", colorClass: "text-[#F4E0B9]" },
    ],
  },
  {
    Company: "Premium Souvenirs",
    Name: "Premium Souvenirs Web App",
    Image: premiumSouvenirs,
    URL: "https://premium-souvenirs.vercel.app/",
    Description: "Corporate branding.",
    TechStacks: [
      { hash: "#next.JS", colorClass: "text-[#0079FF]" },
      { hash: "#tilwind.css", colorClass: "text-[#6F1AB6]" },
      { hash: "#typeScript", colorClass: "text-[#F4E0B9]" },
    ],
  },
];

export const WebsitesProjectsAssests = [
  {
    Company: "Farmsmarter",
    Name: "FarmSmater Website",
    Image: Farmsmarter,
    URL: "https://farmsmarter.app/",
    Description: "Providing solution for a sustainable future.",
    TechStacks: [
      { hash: "#next.js", colorClass: "text-[#A73121]" },
      { hash: "#tailwindCSS", colorClass: "text-[#F4E0B9]" },
      { hash: "#docker", colorClass: "text-[#FF0303]" },
      { hash: "#typeScript", colorClass: "text-[#F4E0B9]" },
    ],
  },
  {
    Company: "7thCare",
    Name: "7thCare Website",
    Image: seventhCare,
    URL: "https://www.7thcare.com/",
    Description: "Authomating healthcare services.",
    TechStacks: [
      { hash: "#next.js", colorClass: "text-[#A73121]" },
      { hash: "#tailwindCSS", colorClass: "text-[#F4E0B9]" },
      { hash: "#typeScript", colorClass: "text-[#F4E0B9]" },
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
