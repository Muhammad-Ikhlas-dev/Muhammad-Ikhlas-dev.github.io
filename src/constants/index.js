import {
  frontend,
  backend,
  ux,
  prototyping,
  client_facing,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongoDB, //modified
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Client Facing',
    icon: client_facing,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Mongo Db',
    icon: mongoDB,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  }
];

const experiences = [
  {
    title: 'Front-End Internship',
    company_name: 'Pakistan Bureau of Statistics (PBS)',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2024 - Dec 2024',
  },
  {
    title: 'MERN Developer',
    company_name: 'ALGO III',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2023 - Current',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'GAMES PROJECT',
    description: 'A full-stack project featuring a React frontend and a Node.js backend. The project demonstrates how to combine a modern UI with CRUD APIs to manage game data.',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'api',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Muhammad-Ikhlas-dev/GAMES-PROJECT',
    demo: ''
  },
  {
    id: 'project-2',
    name: 'NEXT-OPTIMIZED',
    description:
      'A clean and performant Next.js-based frontend application showcasing modern React features such as file-based routing, server-side rendering (SSR), and static site generation (SSG). Built for rapid development and optimized for UI/UX.',
      tags: [
        {
          name: 'nodejs',
          color: 'blue-text-gradient',
        },
        {
          name: 'typescript',
          color: 'green-text-gradient',
        },
        {
          name: 'docker',
          color: 'pink-text-gradient',
        },
      ],
    image: leaderboard,
    repo: 'https://github.com/Muhammad-Ikhlas-dev/Next_Project_01/tree/feature-Frontend_Only',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'LOCK-INVESTMENT',
    description: 'This project involves implementing user authentication, creating a profile completion page, and connecting the existing dashboard to MongoDB.',
    tags: [
      {
        name: 'dotnet',
        color: 'blue-text-gradient',
      },
      {
        name: 'aspnetcore',
        color: 'green-text-gradient',
      },
      {
        name: 'saas',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/Muhammad-Ikhlas-dev/lock-investment',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Netflix Clone',
    description: `This project is a full-stack Netflix clone that replicates the streaming platform’s interface and functionality using React on the front end and Node.js with Express on the backend. The front end displays movie thumbnails, trailers, and categories in a responsive layout, styled with HTML, CSS, and React Icons.`,
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'rxjs',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/Muhammad-Ikhlas-dev/netflix-clone',
    demo: '',
  }
  // {
  //   id: 'project-5',
  //   name: 'ngX Starter Kit',
  //   description:
  //     'An Angular 14+ starter kit for enterprise-grade projects, featuring scalable architecture and modern tools.',
  //     tags: [
  //       {
  //         name: 'angular',
  //         color: 'blue-text-gradient',
  //       },
  //       {
  //         name: 'typescript',
  //         color: 'green-text-gradient',
  //       },
  //       {
  //         name: 'docker',
  //         color: 'pink-text-gradient',
  //       },
  //     ],
  //   image: nyeusi,
  //   repo: 'https://github.com/usmanali8cs-cmyk/ngx-starter-kit',
  //   demo: '',
  // },
];

export { services, technologies, experiences, projects };
