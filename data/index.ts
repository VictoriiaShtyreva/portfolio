export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech Enthusiast with a Passion for Development",
    description:
      "With a background in biology, I transitioned to tech through extensive front-end development courses.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Communication",
    description:
      "I believe in working closely with my team to understand our collective goals and deliver effective solutions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Developed a backend for an e-commerce app",
    description:
      "Built with ASP.NET Core, the app features a REST API for data management, user authentication, and role-based actions. Integrated with Stripe for secure payments and deployed on Vercel.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/bg.png",
    spareImg: "/grid.svg",
  },
  {
    id: 5,
    title: "Certified Azure Developer Associate",
    description:
      "Recently completed the Event Management System API project, built using .NET, Entity Framework Core, PostgreSQL and Azure. As a result, I earned the Microsoft Certified: Azure Developer Associate certification.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-1/2 sm:w-1/4",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/azure.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to see my CV?",
    description:
      "Explore my CV to see my skills, experience, and how I can contribute to your team.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "The Event Management System",
    des: "The Event Management System is a web application built with Azure, utilizing Entity Framework Core and PostgreSQL.",
    img: "/p1.png",
    iconLists: [
      "/azure.svg",
      "/csharp.svg",
      "/swagger.svg",
      "/docker.svg",
      "/postman.svg",
    ],
    link: "https://github.com/VictoriiaShtyreva/EventManagementApiApp",
  },
  {
    id: 2,
    title: "QuickMartEcommerce",
    des: "This Frontend E-Commerce Project aimed at building an e-commerce website.",
    img: "/p2.png",
    iconLists: [
      "/reactjs.svg",
      "/redux.svg",
      "/ts.svg",
      "/materialui.svg",
      "/stripe.svg",
    ],
    link: "https://github.com/VictoriiaShtyreva/Frontend-QuickMartEcommerce",
  },
  {
    id: 3,
    title: "QuickMartEcommerce",
    des: "It is the back-end component of an e-commerce application.",
    img: "/p3.png",
    iconLists: [
      "/csharp.svg",
      "/swagger.svg",
      "/postgresql.svg",
      "/cloudinary.svg",
      "/docker.svg",
    ],
    link: "https://github.com/VictoriiaShtyreva/Backend-QuickMartEcommerce",
  },
  {
    id: 4,
    title: "My Portfolio",
    des: "This portfolio showcases my projects, skills, and accomplishments.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/VictoriiaShtyreva/portfolio",
  },
];

export const testimonials = [
  {
    quote:
      "Viktoriia was a pleasure to work with. We managed PRs together and developed more challenging features. Good communication, great skills. Highly recommend her for any developer positions.",
    name: "Aaro Varjonen",
    title: "Frontend developer",
    picture: "/1.jpeg",
  },
  {
    quote:
      "Viktoriia was an excellent member of our team. She contributed to the product with a can-do attitude and was selfless in helping out other, more junior team members and helped them also with their growth. She is ideal for any project that requires a roll up your sleeves to get stuff done. She has excellent communication skills and really cares about her work and contribution! I can highly recommend Viktoriia for any full-time position or also as an assistant lead developer. A great asset to any team!",
    name: "Paul Brennan",
    title: "Talent Hive Co-Founder",
    picture: "/2.jpeg",
  },
  {
    quote:
      "Viktoriia has been a very valuable team member at Unfair Advantage. An exceptional frontend developer with outstanding documentation skills and a talent for providing detailed feedback. Viktoriia possesses a remarkable ability to create clear and comprehensive documentation. She understands the importance of documentation in facilitating seamless collaboration and knowledge transfer within the team.",
    name: "Jazen Mathew Cordero",
    title: "Industrial Engineering And Management Student at LUT University",
    picture: "/3.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    position: "FULL-STACK DEVELOPER",
    time: "January 2024 - Present",
    content: `
      Managed User Authentication and Authorization with ASP.NET Core Identity, EntraID, and Microsoft Graph.
      Used Azure Functions, Azure App Services, Azure Cosmos DB, and Azure Service Bus.
      Integrated Azure Services for storage and monitoring.
      Built the backend of an e-commerce application, QuickMart, as part of a capstone project.
      Developed full-stack features using TypeScript, React, Redux, ASP.NET Core, and PostgreSQL.
    `,
    img: "/integrify-logo.svg",
  },
  {
    id: 2,
    position: "FRONTEND DEVELOPER",
    time: "January 2023 - December 2023",
    content: `
      Reduced bug incidence by 30% in areas like authentication, event creation, and payment processing.
      Implemented Stripe API, increasing transaction volume by 25%.
      Developed and maintained React components, improving user experience.
      Technologies used: React.js, React Router, Redux, Material UI, Stripe API.
    `,
    img: "/unfair-logo.jpeg",
  },
  {
    id: 3,
    position: "RESEARCHER",
    time: "August 2019 - May 2022",
    content: `
      Enhanced the efficiency of analytical processes, increasing the number of samples analyzed by 30%.
      Managed biotechnology projects, coordinating multi-disciplinary teams, improving project delivery by 15%.
      Mentored junior researchers, improving team capabilities and performance.
      Technologies and skills used: Project management, Jira, Analytical skills.
    `,
    img: "/biocad-logo.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/VictoriiaShtyreva",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/viktoriiashtyreva/",
  },
];
