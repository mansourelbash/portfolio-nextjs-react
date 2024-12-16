import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import GamingApp from "@/public/1.png";
import pokemonApp from "@/public/2.png";
import dropboxImg from "@/public/3.png";
import prayersImg from '@/public/4.png'
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bootcamp - NATIONAL INFORMATION TECHNOLOGY CENTER",
    location: "Jordan - Amman",
    description:
      "After graduating, I received 3 months of training in a front-end developer path.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Front-End Developer -  CUBIC ART TECHNOLOGIES (CATEC)",
    location: "Jordan - Amman",
    description:
      "I worked as a junior front-end developer on several Dubai Government websites. My responsibilities included building responsive and accessible web interfaces using JavaScript, jQuery, and Bootstrap 3 & 4. I was also involved in implementing accessibility features using tools like WAVE and Axe to ensure compliance with WCAG standards. My work focused on improving user experience, enhancing website performance, and ensuring cross-browser compatibility.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug  2017 -  December 2018",
  },
  {
    title: "Front-End Developer - ASH TECHNOLOGIES COMPANY",
    location: "Jordan - Amman",
    description:
      "I worked as a front-end developer on a video chat application from scratch, using JavaScript, React, and PHP Laravel. My role focused on building responsive and dynamic user interfaces while ensuring seamless integration with the back-end. The project required strong collaboration with the back-end team to ensure smooth functionality and user experience across different devices and browsers.",
    icon: React.createElement(FaReact),
    date: "January 2019  - October 2019",
  },
  {
    title:
      "UI/UX Developer & Front-End Developer -  PLAN-DO-CHECK-ACT (PDCA IS)",
    location: "Jordan - Amman",
    description:
      "I worked as a front-end developer, using React, Redux, and ASP.NET Core. During the project, I collaborated closely with teams in the UAE to integrate features and ensure the system met audit requirements for ISO certification. My role involved building responsive and dynamic user interfaces, ensuring accessibility, and seamless integration with the back-end. The project also required working with an audit system to help the application achieve ISO certification, ensuring compliance with industry standards and improving overall quality.",
    icon: React.createElement(FaReact),
    date: "October 2019  -  October 2021",
  },
  {
    title:
      " Senior Front End Developer  - ZENHR ( Human Resource Management System HRMS )",
    location: "Jordan - Amman",
    description:
      "I worked on a large-scale Human Resource Management System (HRMS) using React, Redux for state management, and TypeScript for type checking. We utilized Storybook for UI components in addition to Ruby on Rails for the back-end. I also worked on several projects using JavaScript, jQuery, and integrated them where needed.",
    icon: React.createElement(FaReact),
    date: "November 2021  -  November 2024",
  },
  {
    title: " Senior Front End Developer  - BAYANAT",
    location: "Oman - Masqat",
    description:
      "We are working on a large-scale system that visualizes massive data on a map using Mapbox, enabling data drawing and interaction. The project involves collaborating with major communication companies to implement best practices for data visualization. We are integrating AI tools and chatbots, and developing a platform with innovative features.",
    icon: React.createElement(FaReact),
    date: "April 2024 -  Until Now",
  },
] as const;

export const projectsData = [
  {
    title: "Prayers Timings",
    description:
    "This application that displays prayer timings for different countries. The app utilizes various packages and APIs to provide accurate and up-to-date prayer schedules",
  tags: ["React", "MaterialUI", "Vite", "Tailwind","Emotion"],
  imageUrl: prayersImg,
  },
  {
    title: "Gaming App",
    description:
    "This project showcases the key principles of building a high-performance full-stack gaming app with Next.js and MongoDB, featuring user authentication, game listings, profiles, wishlists, and a rating system.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Mongoose", "Cloudinary"],
    imageUrl: GamingApp,
  },
  {
    title: "Pokemon React App",
    description:
      "contains a React application that fetches and displays Pokemon data from the PokeAPI.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux Toolkit",
      "Vite",
    ],
    imageUrl: pokemonApp,
  },
  {
    title: "Dropbox Clone",
    description:
      "A full-featured Dropbox clone built using React, providing file upload, download, sharing, and folder management functionality, along with real-time collaboration and cloud storage.",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "Radix UI",
      "Zustand",
      "React Dropzone",
      "TypeScript",
    ],
    imageUrl: dropboxImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Fast API",
  "Adobe XD",
  "Figma",
  "Framer Motion",
] as const;
