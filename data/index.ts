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
      "My experience as a frontend and a full-stack developer has taught me the importance of clear and open communication. I believe in working closely with my team to understand our collective goals and deliver effective solutions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "My tech stack",
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
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Certified Azure Developer Associate",
    description:
      "Recently completed the Event Management System API project, built using .NET, Entity Framework Core, PostgreSQL and Azure. As a result, I earned the Microsoft Certified: Azure Developer Associate certification.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
