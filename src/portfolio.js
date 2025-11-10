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
  username: "Atharva Deshmukh",
  title: "Hey there!, I'm Atharva",
  subTitle: emoji(
    " I’m a software engineer who loves creating scalable apps and playing around with AI & machine learning. Whether it’s a smooth web interface or a data-driven backend, I’m all about building things that actually make life easier."
  ),
  resumeLink: "https://your-resume-link.pdf", // add Google Drive/LinkedIn resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Atharva2901",
  linkedin: "https://www.linkedin.com/in/atharva-deshmukh-0968751a6/",
  gmail: "atharvades2001@outlook.com",
  display: true// Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK ENGINEER • AI/ML PRACTITIONER • DATA ANALYST",
  skills: [
    emoji("• Build scalable full-stack applications using React.js, Node.js/Express, MongoDB, and Python/Flask."),
    emoji("• Develop, train, and deploy ML models including CNNs, RNNs, classical ML algorithms, and deep learning architectures."),
    emoji("• Design data pipelines with Pandas, NumPy, and scikit-learn for preprocessing, feature engineering, and model evaluation."),
    emoji("• Create analytical dashboards and visual stories with Tableau, Tableau Prep, and Python for data-driven insights."),
    emoji("• Work with REST APIs, authentication (JWT/Clerk), Docker, and CI/CD pipelines for production-ready engineering."),
    emoji("• Explore and build with Agentic AI, LLMs, and Generative AI systems, including multimodal model integrations.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
  { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
  { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" }, // uses leaf icon
  { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
  { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
  { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-project-diagram" },
  { skillName: "Flask", fontAwesomeClassname: "fas fa-flask" },
  { skillName: "Agentic AI", fontAwesomeClassname: "fas fa-robot" },
  { skillName: "Generative AI", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "Agile", fontAwesomeClassname: "fas fa-users" },
  { skillName: "CI/CD", fontAwesomeClassname: "fas fa-sync" },
  { skillName: "Postman", fontAwesomeClassname: "fas fa-paper-plane" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stevens Institute of Technology",
      logo: require("./assets/images/stevensLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2024 - May 2025",
      desc: "Graduate coursework in DBMS, ML, Deep Learning, NLP, Data Visualization, Generative AI."
    },
    {
      schoolName: "Yeshwantrao Chavan College of Engineering",
      logo: require("./assets/images/YCCElogo.jpg"),
      subHeader: "Bachelor of Engineering in Information Technology (Honors: Data Science & ML)",
      duration: "July 2019 - June 2023",
      desc: "Focused on data science, algorithms, and system design."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend (React, HTML, CSS, JS)", progressPercentage: "85%" },
    { Stack: "Backend (Node.js, Express, Databases)", progressPercentage: "75%" },
    { Stack: "Machine Learning / AI", progressPercentage: "80%" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Capstone Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/capstone.jpg"),
      date: "Jul 2023 – Jun 2024",
      desc: "Built scalable React apps, designed data pipelines, and created Tableau dashboards for real-time analytics."
    },
    {
      role: "Software Engineering Intern",
      company: "GlobalLogic",
      companylogo: require("./assets/images/GL.png"),
      date: "Feb 2023 – Jun 2023",
      desc: "Developed a slot booking system in React.js (optimized booking by 40%), implemented Redux & Hooks, and set up CI/CD pipelines."
    }
  ]
};


const bigProjects = {
  title: "Projects",
  subtitle: "Some projects that highlight my skills",
  projects: [
    {
      image: require("./assets/images/researchlogo.png"),
      projectName: "Full-Stack Gemini AI Research & Chat Assistant",
      projectDesc: "AI chat + research tool with streamed responses, image understanding, and MongoDB backend.",
      footerLink: [{ name: "GitHub Repo", url: "https://github.com/Atharva2901/Research-AI" }]
    },
    {
      image: require("./assets/images/CNNlogo.png"),
      projectName: "Real-Time Sign Language Interpreter",
      projectDesc: "Flask + CNN + OpenCV app to detect ASL signs (95% accuracy) with Bootstrap UI controls.",
      footerLink: [{ name: "GitHub Repo", url: "https://github.com/Atharva2901/Sign-Language-Interpreter-CNN" }]
    },
    {
      image: require("./assets/images/Gobal_clusters_map.JPG"),
      projectName: "Global Cost of Living & Inflation Trends",
      projectDesc: "Global affordability analysis using Python and Tableau, clustering 100 countries by cost, income, and inflation trends.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/Atharva2901/Global_cost_of_living_and_inflation_trends" },
        { name: "Tableau Dashboard", url: "https://public.tableau.com/app/profile/atharva.deshmukh3017/viz/GlobalCostofLivingInflationTrendsACross-CountryAffordabilityAnalysis/Story1?publish=yes" }
      ]
    },
    {
      image: require("./assets/images/amazon_nlp.png"), 
      projectName: "Amazon Review Rating Predictor (NLP + RoBERTa)",
      projectDesc: "End-to-end AI pipeline predicting 1–5 star ratings from raw review text using PostgreSQL, Python, and a fine-tuned RoBERTa transformer. Built with class balancing, GPU training, and automated insights.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/Atharva2901/amazon-review-rating-nlp-transformer" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
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
  display: false// Set false to hide this section, defaults to true
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
  title: "Podcast 🎙️",
  subtitle: "I sometimes talk about tech",
  podcast: [],
  display: false
};

// Twitter Section
const twitterDetails = {
  userName: "atharva", // replace with your handle if you want
  display: false
};


// // Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in collaborating or hiring? Let’s connect!",
  number: "(201)-469-1565",
  email_address: "atharvades2001@outlook.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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