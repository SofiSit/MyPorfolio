import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    assem,
    p5,
    utn,
    ecommerce,
    smoo,
    vpn,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
  ];
  
  const services = [
    
    {
      title: "I'm Sofi! Full-Stack developer who enjoys providing solutions using HTML, CSS, JavaScript, Node.js, Express, React,MongoDB and SQL. I am focused on being a valued member of the team, delivering thoughtful solutions and continually improving my skills.",
      icon: mobile,
    },
    {
      title: "I aspire to become proficient in the latest technologies and frameworks, constantly staying updated with industry trends. Ultimately, my goal is to secure challenging projects or employment opportunities that allow me to utilize my programmingand design skills effectively, contributing to innovative anduser-friendly digital experiences. Currently, I am taking a Angular course at Udemy.",
      icon: web,
    },
    {
      title: "I want to highlight my skills for work teamwork, problem solving,planning and complianceObjectives During these years I have developed a very good base of soft skills and I consider them basic for the good development of teamwork.",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    ,
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Master en Software development",
      company_name: "Assembler Institute of Technology",
      icon: assem,
      iconBg: "#383E56",
      date: "Oct 2022 - Juny 2023",
      points: [
        "More than 1,200 hours of practice with the latest technologies, with a learn-by-doing methodology, peer coding, and workshops",
        "-Working as full-stack developer applying latest technologies -Intensive master with more than 1200 hours of full stack real-world oriented projects based on agile methodologies - More than 30 real-world projects done with a deep focus on the MERN and LAMP stack - Development of RESTful API's - Frontend development : HTML, CSS , Javascript.- Libraries,frameworks: Redux, React, jQuery, Bootstrap, Tailwind. - Backend development: PHP,Javascript, SQL, MongoDB - Libraries,frameworks: Nodejs,Express, Laravel, Mongoose, LAMPP- Version control: Git, github.- Working under an agile environment.- Software arquitectures: OOP, MVC.",
        
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Plataforma 5",
      icon: p5,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - May 2022",
      points: [
        "Completed 800+ hours of technical practice and ʻreal-lifeʼ projects using Javascript, HTML, CSS, Node.js, React, Express, and PostgreSQL. ",
        "Worked on Scrum teams of 4-6 developers using agile methodologies and version control systems (GitHub) to deliver each project."]
    },
    {
      title: "Fundamentals of Programming Course",
      company_name: "National technological university Argentina",
      icon: utn,
      iconBg: "#fff",
      date: "January 2021 - April 2021",
      points: [
        "Fundamentals of programming course online, where first it was an introduction to programming which covered history of programming languages, algorithms and logic and lastly pseudocode. The second instance covered the fundamentals of structured programming, variables and their types and data structure. As the last stage, we were introduced to object-oriented programming, its fundamentals, the pillars of object orientation, advanced concepts, and programming in the current work environment.",
      ],
    },
    
  ];
  
  
  const projects = [
    {
      name: "Ecommerce",
      description:
        "I have created an ecommerce site in which you can make purchases, save products as favourites and access through a login to purchase and consult orders.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/SofiSit/Ecommerce-React",
    },
     {
      name: "Smoothsick Music App",
      description:
        "This project is based on the page Deezer and mocks the music platform implemented by this page, trying with this to improve my knowledge of react and another related libraries.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Typscript",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "nodeJs",
          color: "blue-text-gradient",
        }
      ],
      image: smoo,
      source_code_link: "https://github.com/SofiSit/Smoothsick-frontend",
    }, 
    {
      name: "VPN-Management-System",
      description:
        "A VPN system that helps you connect safe and fast on the internet. Test project focused on the development and testing of PHP OOP and MySQL databases for educational purposes.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "XAMPP",
          color: "pink-text-gradient",
        },
      ],
      image: vpn,
      source_code_link: "https://github.com/SofiSit/VPN-Management-System",
    },
  ];
  
  export { services, technologies, experiences, projects };