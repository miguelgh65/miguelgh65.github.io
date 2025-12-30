/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Miguel",
  title: "Hi all, I'm Miguel",
  subTitle: emoji(
    "Generative AI Engineer at Syntonize, building cutting-edge AI solutions with voice agents, real-time APIs, and MCP. Founder & CEO of Zelus ⚡ - AI-powered fitness app combining Greek mythology with advanced AI agents."
  ),
  resumeLink:
    "/resume.pdf", // Asegúrate de que el enlace apunte a tu CV correcto
  displayGreeting: true // Mantenlo en true para mostrar esta sección
};



// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/miguelgh65",
  linkedin: "https://www.linkedin.com/in/mgonzalezhndz/",
  gmail: "miguelgh65@gmail.com",
  medium: "https://medium.com/@miguel696mg",
  // El resto de los enlaces están vacíos ya que no los tienes
  gitlab: "",
  facebook: "",
  stackoverflow: "",
  display: true // Mantenlo en true para mostrar esta sección
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERT IN GENERATIVE AI, AGENTIC SYSTEMS, AND END-TO-END AI SOLUTIONS",
  skills: [
    emoji(
      "⚡ Design and deploy end-to-end Generative AI solutions with agentic workflows and autonomous systems"
    ),
    emoji(
      "⚡ Build production-ready AI applications with LangChain, LangGraph, and MCP for complex agent orchestration"
    ),
    emoji(
      "⚡ Full-stack development from backend (Node.js, Python) to cloud infrastructure (Azure, Terraform, Docker)"
    ),
    emoji(
      "⚡ Implement CI/CD pipelines, automated testing, and cloud deployment for scalable AI systems"
    ),
    emoji(
      "⚡ Integrate LLMs, voice agents, and real-time APIs with RESTful services and large-scale databases"
    )
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-brain" // Cambia esto si tienes un ícono mejor
    },
    {
      skillName: "transformers",
      fontAwesomeClassname: "fas fa-robot" // Placeholder para Transformers
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "ci-cd",
      fontAwesomeClassname: "fas fa-tools"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Politécnica de Madrid (UPM)",
      logo: require("./assets/images/upm.png"), // Logo de UPM
      subHeader: "Master's Degree in Telecommunications Engineering",
      duration: "2022",
      desc: "Specialization in Artificial Intelligence and Telecommunications.",
      descBullets: [
        "Development of AI solutions applied to telecommunications",
        "Advanced courses in artificial intelligence and networks",
        "Distinction in final thesis: Creation of a program to clone and blend voices from fictional characters with a smart conversational assistant for Alexa"
      ]
    },
    {
      schoolName: "Politecnico di Milano (Polimi)",
      logo: require("./assets/images/polimi.png"), // Logo de Polimi
      subHeader: "Master's in Computer Science and Artificial Intelligence",
      duration: "2022",
      desc: "Participation in the Erasmus+ program focused on AI and data science.",
      descBullets: [
        "Work on AI and machine learning projects",
        "Publication of studies on natural language processing"
      ]
    },
    {
      schoolName: "Universidad Politécnica de Madrid (UPM)",
      logo: require("./assets/images/upm.png"), // Logo de UPM
      subHeader: "Bachelor's Degree in Telecommunications Technology and Services Engineering",
      duration: "2020",
      desc: "Specialization in telecommunications systems and networks.",
      descBullets: [
        "Study of networks, systems, and data processing",
        "Development of telecommunications-related projects",
        "Outstanding grade in final thesis: Creation of a program to detect febrile states using AI"
      ]
    },
    {
      schoolName: "Asociación Española de Programadores Informáticos (AEPI)",
      logo: require("./assets/images/aepi.jpg"), // Logo de AEPI
      subHeader: "Professional Python Course",
      duration: "2020",
      desc: "Specialized course in Python for software development and data analysis.",
      descBullets: [
        "Development of advanced Python scripts",
        "Applications of Python in data science and automation",
        "Final project: Creation of a car workshop sales management system using Python and SQL"
      ]
    }
  ]
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Artificial Intelligence & Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Agentic AI & LangChain/LangGraph",
      progressPercentage: "80%"
    },
    {
      Stack: "Python Programming & Backend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Generative AI & LLMs",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Founder & CEO",
      company: "Zelus AI Trainer ⚡",
      companylogo: require("./assets/images/fondo.png"),
      date: "October 2025 – Present",
      desc: "Founded AI-powered fitness app combining Greek mythology with cutting-edge AI. 24/7 intelligent personal trainer with Power Level system inspired by Greek gods. Visit: https://zelus.es",
      descBullets: [
        "Frontend: React, TypeScript, Tailwind CSS, Recharts, PWA",
        "Backend: Node.js/Express, MongoDB, JWT, WebSocket for real-time updates",
        "AI/ML: LangChain, LangGraph, OpenRouter, MCP agents, Whisper API for voice",
        "Infrastructure: Azure (App Service, Functions, Cosmos DB), Terraform, Docker",
        "DevOps: GitHub Actions CI/CD pipelines with automated testing",
        "Features: Power Level system (Zeus, Hermes, Ares), voice logging, nutrition tracking, workout generation",
        "Repositories: Frontend_Project_Gym_AI, Backend_Project_Gym_AI, InfraProjectGymAI"
      ]
    },
    {
      role: "Senior Generative AI Engineer (Consultant)",
      company: "Syntonize",
      companylogo: require("./assets/images/syntonize.png"),
      date: "January 2025 – Present",
      desc: "Senior consultant on generative AI projects, developing proposals and implementing cutting-edge AI solutions with focus on voice agents and real-time systems.",
      descBullets: [
        "Project consultant developing AI solutions and technical proposals",
        "Voice agents and conversational AI systems with natural speech",
        "Real-time API integration for low-latency responses",
        "MCP (Model Context Protocol) implementation for agent orchestration",
        "Small LLM deployment for on-premise inference and privacy",
        "LangChain and LangGraph for complex AI workflows",
        "OCR and document processing with multimodal models",
        "Terraform infrastructure automation on cloud platforms"
      ]
    },
    {
      role: "Generative AI Expert",
      company: "Accenture",
      companylogo: require("./assets/images/accenture_logo-freelogovectors.net_.webp"), // Accenture logo
      date: "2024 – January 2025",
      desc: "Generative AI specialist, building end-to-end solutions using Azure, OpenAI, and advanced ML models for banking sector clients.",
      descBullets: [
        "Developed generative AI solutions with Azure OpenAI and Azure AI services",
        "Implemented Azure Document Intelligence for automated document processing",
        "Designed and deployed RPA (Robotic Process Automation) solutions integrated with Gen AI",
        "Built end-to-end AI architectures for banking sector clients",
        "Implemented CI/CD pipelines for ML models deployment and monitoring",
        "Solution design from requirements gathering to production deployment",
        "Azure cloud infrastructure: Functions, App Services, Cognitive Services"
      ]
    },
    {
      role: "AI Engineer",
      company: "Dubme",
      companylogo: require("./assets/images/dubme.png"), // Dubme logo
      date: "2023 – 2024",
      desc: "Research and development of AI models for automated audio and video generation on multimedia platforms.",
      descBullets: [
        "Research project: Voice cloning using diffusion models for synthetic speech generation",
        "Implemented diffusion models for Text-to-Speech (TTS) systems based on Alexa Prize research",
        "Developed voice synthesis pipeline for multimedia content generation",
        "Automated multimedia workflow processes with AI-driven voice generation"
      ]
    },
    {
      role: "Consultant",
      company: "Sortis & ST Engineering",
      companylogo: require("./assets/images/sortisst.png"), // Combined logo for Sortis and ST Engineering
      date: "2022 – 2023",
      desc: "Consultant specializing in satellite network operations and data analysis, working for ST Engineering through Sortis.",
      descBullets: [
        "Optimized global satellite network operations",
        "Analyzed Salesforce data to develop ML algorithms for predicting incident volume in support operations",
        "Created resource allocation system to optimize support team assignment based on ML predictions",
        "Performed data analysis and developed automated solutions"
      ]
    },
    {
      role: "AI Developer (Alexa Prize)",
      company: "Amazon via UPM",
      companylogo: require("./assets/images/amazonupm.png"), // Combined logo for Amazon and UPM
      date: "2021-2023",
      desc: "Participated in the Alexa Prize competition as part of a UPM team, developing advanced AI solutions for conversational interaction.",
      descBullets: [
        "Developed AI models for natural conversational interaction with Alexa",
        "Implemented voice synthesis and character voice blending for conversational assistants",
        "Research on voice cloning and Text-to-Speech systems (basis for Master's thesis)",
        "Collaborated with Amazon to enhance Alexa-based solutions and conversational AI"
      ]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS I AM CURRENTLY WORKING ON",
  projects: [
    {
      image: require("./assets/images/nmpfit.png"), // Asegúrate de tener el logo de NMPfit
      projectName: "NMPfit",
      projectDesc: "An AI-powered (AI embedding database and Langchain) conversational assistant for health, specializing in diet planning, gym routines, and overall wellness management.",
      footerLink: [
        {
          name: "Not website yet",
          url: "wwww.google.com" // Cambia esta URL si tienes el enlace correcto
        }
        // Puedes agregar más botones si es necesario
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Honors, Certifications, and Significant Projects",

  achievementsCards: [
    {
      title: "Honors in Master's Thesis",
      subtitle:
        "Created a program to clone and blend voices from fictional characters with a smart conversational assistant's voice. Graduated with distinction.",
      image: require("./assets/images/matricula.jpg"), // Logo for distinction
      imageAlt: "Master's Thesis Honors",
      footerLink: [
        {
          name: "View Master's Thesis",
          url: "#" // Add link if available
        }
      ]
    },
    {
      title: "Outstanding in Bachelor's Thesis",
      subtitle:
        "Developed a program to detect febrile states using AI. Graduated with outstanding grades.",
      image: require("./assets/images/sobresaliente.png"), // Logo for outstanding
      imageAlt: "Bachelor's Thesis Outstanding",
      footerLink: [
        {
          name: "View Bachelor's Thesis",
          url: "#" // Add link if available
        }
      ]
    },
    {
      title: "Dialogflow Certifications",
      subtitle: "Certified in Dialogflow NCOP and NCPA",
      image: require("./assets/images/st.jpg"), // Logo for Dialogflow
      imageAlt: "Dialogflow Certification",
      footerLink: [
        {
          name: "Certification Details",
          url: "#" // Add link if available
        }
      ]
    },
    {
      title: "Nvidia Deep Learning Fundamentals",
      subtitle: "Certified in Nvidia Deep Learning Fundamentals",
      image: require("./assets/images/nvidia.png"), // Logo for Nvidia
      imageAlt: "Nvidia Deep Learning Certification",
      footerLink: [
        {
          name: "Certification Details",
          url: "#" // Add link if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

// Contact Information Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Currently working at Syntonize and building Zelus AI Trainer. Not ruling out leaving Syntonize in the short/medium term - feel free to reach out for new business opportunities or just to say hi. My inbox is always open!",
  number: "+34 648607181", // Reemplaza con tu número si lo deseas
  email_address: "miguelgh696@gmail.com" // Cambia por tu correo si es necesario
};



// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
