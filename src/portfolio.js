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
  username: "Lokesh Joshi",
  title: "Hi all, I'm Lokesh Joshi",
  subTitle: emoji(
    "Passionate Blockchain Engineer adept at creating innovative decentralized solutions. Proficient in Ethereum, Solidity, and smart contracts, I specialize in ensuring security and transparency. Let's shape the future of trust together! 🚀🔗"
  ),
  resumeLink:
    "https://drive.google.com/file/d/19CMEISA4nAWYeBodZsRGRbOVGRVOu8Ml/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/lokeshjoshi053",
  linkedin: "https://www.linkedin.com/in/lokesh-joshi-7b636018a/",
  gmail: "lokeshjoshi053@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100085500080803&mibextid=D4KYlr",
  medium: "https://medium.com/@Lokeshjoshi053",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Boundary pushing Blockchain Engineer, poised to conquer every tech stack.🚀",
  skills: [
    emoji(
      "⚡ Smart Contracts: Designing and coding secure smart contracts to automate processes"
    ),
    emoji("⚡ Consensus Mechanisms: Implementing consensus algorithms like Proof of Work (PoW) and Proof of Stake (PoS)"),
    emoji(
      "⚡ Decentralized Applications (DApps): Building decentralized applications with transparent and tamper-proof functionalities"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Blockchain",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "Ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "Web 3.0",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "Bitcoin",
      fontAwesomeClassname: "fab fa-bitcoin"
    },
    {
      skillName: "DeFi",
      fontAwesomeClassname: "fas fa-hand-holding-usd"
    },
    {
      skillName: "Hyperledger",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "DUKE University",
      logo: require("./assets/images/duke.png"),
      subHeader: "Decentralized Finance (DeFi): The Future of Finance Specialization",
      duration: "August 2023 - January 2024",
      desc: "Gain insights into DeFi's Opportunities and Risks, and its transformative impact on the future of finance. Explore Decentralized Finance Primitives and Infrastructure, developing a comprehensive understanding of this dynamic ecosystem.",
    },
    {
      schoolName: "Government Engineering College Rajkot",
      logo: require("./assets/images/gec.png"),
      subHeader: "Bachelor of Engineering in Electronics And Communication",
      duration: "July 2019 - May 2023",
      desc: "Integrating roles as College Sports and Placement Coordinator, spearheading SSIP initiatives, orchestrating hackathons, and collaborating with ABVP Team. Elevating student experiences through innovation, skill-building, and teamwork for comprehensive development.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Blockchain Engineer",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "Jan 203 – Present",
      desc: "As a blockchain engineer, I took on the role of a DeFi app blockchain architect, designing DApps, collaborating on the SUI blockchain, developing a range of smart contracts, and contributing to P2E gaming projects.",
    },
    {
      role: "Blockchain Developer",
      company: "Store Transform",
      companylogo: require("./assets/images/storetransform.jpeg"),
      date: "Jan 2023 – July 2023",
      desc: "I excel as a Blockchain Developer by creating smart contracts on diverse platforms, launching ICOs and IDOs, and implementing P2E gaming experiences. Collaborating seamlessly, I contribute to deploying innovative applications while staying updated on blockchain trends. My expertise ensures secure, scalable solutions."
    },
    {
      role: "Blockchain Developer Intern",
      company: "Fanclash11 Fantasy Private Limited",
      companylogo: require("./assets/images/intern.jpeg"),
      date: "April 2022 – July 2022",
      desc: "I actively designed a smart contract for Fanclash11 Fantasy Private Limited, researching token economies in P2E games for strategy enhancement. With strong tokenomics understanding, I iterated on plans and calculated financial aspects. My role extended to creating a sustainable token economy, contributing significantly to Fanclash11 Fantasy's progress."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "I have single-handedly developed this solution from start to finish.",
  projects: [
    {
      image: require("./assets/images/Blockchain land.jpg"),
      projectName: "TrustDeed-Blockchain-Land-Records",
      projectDesc: "Experience the future of land records with TrustDeed🔗. Our innovative blockchain solution ensures unalterable, transparent, and easily accessible land records. Say farewell to uncertainties and embrace hassle-free property transactions. Your trust, secured through technology. Discover TrustDeed today!",
      footerLink: [
        {
          name: "Visit GITHUB",
          url: "https://github.com/lokeshjoshi053/TrustDeed-Blockchain-Land-Records"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/defi.jpeg"),
      projectName: "DeFiBorrowHub",
      projectDesc: "🏦 Tired of banking's profit-first approach? Introducing our p2p blockchain lending: fair rates, transparent process. Say no to hidden fees. Borrowers get fair, investors earn better. Join the financial revolution!🔗 #FairFinance",
      footerLink: [
        {
          name: "Visit GITHUB",
          url: "https://github.com/lokeshjoshi053/DeFiBorrowHub"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have done !",

  achievementsCards: [
    {
      title: "Alchemy Certified Ethereum Developer",
      subtitle:
        "Certified Ethereum Developer skilled in alchemizing intricate smart contract solutions, driving innovation in blockchain applications.",
      image: require("./assets/images/Alchemy.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://polygonscan.com/tx/0x55818614222fff427075c62b76a1ac1631b16557e829f4fc42ba2e0645322b14"
        },
      ]
    },
    {
      title: "The Full Stack",
      subtitle:
        "Completed the comprehensive META The Full Stack course, gaining expertise in both front-end and back-end web development",
      image: require("./assets/images/Meta.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/6QRA2BMW3CNF"
        }
      ]
    },

    {
      title: "DevOps on AWS: Code, Build, and Test",
      subtitle: "Completed DevOps on AWS: Code, Build, and Test course, mastering the integration of development and operations workflows on the AWS platform.",
      image: require("./assets/images/aws.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/HCWMR6YVQG5F"
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
      url: "https://www.linkedin.com/posts/lokesh-joshi-blockchain_blockchain-cryptocurrency-technology-activity-7092725608245342208-Uxmd?utm_source=share&utm_medium=member_desktop",
      title: "🌪 Revolutionizing the Commute with Self-Driving Cars and Blockchain!",
      description:
        "Let's take a ride into the future and explore how the powerful duo of self-driving cars and blockchain technology can transform our city commute!"
    },
    {
      url: "https://www.linkedin.com/posts/lokesh-joshi-blockchain_blockchain-ai-unleashing-the-ultimate-activity-7094177054723612672-TOrB?utm_source=share&utm_medium=member_desktop",
      title: "🔗🤖 Blockchain + AI: Unleashing the Ultimate Technological Fusion! 🔥",
      description:
        "Are you ready to witness the mind-blowing marriage of two cutting-edge technologies? Brace yourselves, folks, because the Blockchain and AI combination is here to revolutionize the world! 🌍"
    },
    {
      url: "https://www.linkedin.com/posts/lokesh-joshi-blockchain_blockchain-cryptocurrencies-blockchaintechnology-activity-7090562522642022400-odvT?utm_source=share&utm_medium=member_desktop",
      title: "🚀 Let's unravel the mystery of Decentralization Washing together! 🧐",
      description:
        "Decentralization washing is a marketing tactic used by some projects and companies in the blockchain and Web3 space to falsely claim that they are decentralized. 😱 This can mislead users into believing that they are using a decentralized platform, when in reality, it is just a centralized one with a few superficial decentralization features added on top. 😔"
    },
    {
      url: "https://www.linkedin.com/posts/lokesh-joshi-blockchain_technology-cryptocurrency-currency-activity-7077902065196240896-q9mr?utm_source=share&utm_medium=member_desktop",
      title: "👉You can never appreciate cryptocurrency if you don't know the difference between money and currency.💱🤷‍♂️ 💵🤔",
      description:
        "Cryptocurrency is a fascinating and exciting new technology, but to truly appreciate it, you need to understand the difference between 💰money and 💱currency."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Bitcoin & Blockchain Ahmedabad",
      subtitle: "Navigating the Future: Embracing Bitcoin and Blockchain in Ahmedabad.",
      event_url: "https://www.meetup.com/blockchainahmedabad/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 Oops, I Can't Share it Publicaly",
  email_address: "lokeshjoshi053@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "lokeshjoshi053", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable
};
