/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Atharva Deshmukh",
  title: "Hey there, I'm Atharva",
  subTitle:
    "I build production ML systems and the full-stack products around them. Whether it's a smooth web interface or a data-driven backend, I focus on building things that actually make life easier.",
  resumeLink: "./assets/images/Atharva Deshmukh_Resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Atharva2901",
  linkedin: "https://www.linkedin.com/in/atharva-deshmukh-0968751a6/",
  gmail: "atharvades2001@outlook.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI/ML Engineer · Full-Stack Developer · Data Analyst",
  skills: [
    "Build scalable full-stack applications using React.js, Node.js/Express, MongoDB, and Python/Flask.",
    "Develop, train, and deploy ML models including CNNs, RNNs, classical ML algorithms, and deep learning architectures.",
    "Design data pipelines with Pandas, NumPy, and scikit-learn for preprocessing, feature engineering, and model evaluation.",
    "Create analytical dashboards and visual stories with Tableau and Python for data-driven insights.",
    "Work with REST APIs, authentication (JWT/Clerk), Docker, and CI/CD pipelines for production-ready engineering.",
    "Explore and build with Agentic AI, LLMs, and Generative AI systems, including multimodal model integrations."
  ],

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "ReactJS", fontAwesomeClassname: "fab fa-react"},
    {skillName: "NodeJS", fontAwesomeClassname: "fab fa-node"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "Flask", fontAwesomeClassname: "fas fa-flask"},
    {skillName: "Agentic AI", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "Generative AI", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "Agile", fontAwesomeClassname: "fas fa-users"},
    {skillName: "CI/CD", fontAwesomeClassname: "fas fa-sync"},
    {skillName: "Postman", fontAwesomeClassname: "fas fa-paper-plane"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Stevens Institute of Technology",
      logo: require("./assets/images/stevensLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Aug 2024 - May 2025",
      desc: "Graduate coursework in DBMS, ML, Deep Learning, NLP, Data Visualization, Generative AI."
    },
    {
      schoolName: "Yeshwantrao Chavan College of Engineering",
      logo: require("./assets/images/YCCElogo.jpg"),
      subHeader:
        "Bachelor of Engineering in Information Technology (Honors: Data Science & ML)",
      duration: "Jul 2019 - Jun 2023",
      desc: "Focused on data science, algorithms, and system design."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend (React, HTML, CSS, JS)", progressPercentage: "85%"},
    {Stack: "Backend (Node.js, Express, Databases)", progressPercentage: "75%"},
    {Stack: "Machine Learning / AI", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Capstone Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/capstone.jpg"),
      date: "Jul 2023 - Jun 2024",
      desc: "Built scalable React apps, designed data pipelines, and created Tableau dashboards for real-time analytics."
    },
    {
      role: "Software Engineering Intern",
      company: "GlobalLogic",
      companylogo: require("./assets/images/GL.png"),
      date: "Feb 2023 - Jun 2023",
      desc: "Developed a slot booking system in React.js (optimized booking by 40%), implemented Redux & Hooks, and set up CI/CD pipelines."
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "A few systems where the modeling and the product both had to be right",
  projects: [
    {
      image: require("./assets/images/researchlogo.png"),
      projectName: "Full-Stack Gemini AI Research & Chat Assistant",
      projectDesc:
        "AI chat + research tool with streamed responses, image understanding, and MongoDB backend.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Atharva2901/Research-AI"
        }
      ]
    },
    {
      image: require("./assets/images/CNNlogo.png"),
      projectName: "Real-Time Sign Language Interpreter",
      projectDesc:
        "Flask + CNN + OpenCV app to detect ASL signs (95% accuracy) with Bootstrap UI controls.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Atharva2901/Sign-Language-Interpreter-CNN"
        }
      ]
    },
    {
      image: require("./assets/images/ai_product_analyst.png"),
      projectName: "AI Product Analyst - Agentic AI Assistant",
      projectDesc:
        "AI-powered product analysis assistant that performs structured market research, competitor analysis, and feature gap identification using Agentic AI workflows. Generates insight-driven product strategy reports with actionable recommendations.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Atharva2901/AI-product-strategist"
        }
      ]
    },
    {
      image: require("./assets/images/Global.png"),
      projectName: "Global Cost of Living & Inflation Trends",
      projectDesc:
        "Global affordability analysis using Python and Tableau, clustering 100 countries by cost, income, and inflation trends.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Atharva2901/Global_cost_of_living_and_inflation_trends"
        },
        {
          name: "Tableau Dashboard",
          url: "https://public.tableau.com/app/profile/atharva.deshmukh3017/viz/GlobalCostofLivingInflationTrendsACross-CountryAffordabilityAnalysis/Story1?publish=yes"
        }
      ]
    },
    {
      image: require("./assets/images/ai_etf_volatility.png"),
      projectName: "Volatility Dynamics of AI-Themed ETFs vs Tech Benchmarks",
      projectDesc:
        "Time-series volatility and regression analysis of AI ETFs (BOTZ, ROBO, AIQ) vs tech benchmarks (QQQ, XLK) using Bloomberg Terminal and Python, showing tech-sector volatility explains up to 95% of AI ETF risk.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Atharva2901/Volatility-Dynamics-of-AI-Themed-ETFs-vs-Tech-Benchmarks-"
        }
      ]
    },
    {
      image: require("./assets/images/amazon_nlp.png"),
      projectName: "Amazon Review Rating Predictor (NLP + RoBERTa)",
      projectDesc:
        "End-to-end AI pipeline predicting 1-5 star ratings from raw review text using PostgreSQL, Python, and a fine-tuned RoBERTa transformer. Built with class balancing, GPU training, and automated insights.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Atharva2901/amazon-review-rating-nlp-transformer"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: "Achievements And Certifications",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: false
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "I occasionally write about my projects and learnings.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: "Sharing knowledge at events & meetups.",
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: "Podcast",
  subtitle: "I sometimes talk about tech",
  podcast: [],
  display: false
};

// Twitter Section
const twitterDetails = {
  userName: "atharva",
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Interested in collaborating or hiring? Let's connect.",
  number: "(201)-469-1565",
  email_address: "atharvades2001@outlook.com"
};

const isHireable = true;

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
