import {
  SiClerk,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiAppwrite,
  SiDaisyui,
  SiPrisma,
  SiShadcnui,
  SiGit,
  SiCloudinary,
  SiReactrouter,
  SiVite,
} from "react-icons/si";

import { Tooltip } from "react-tooltip";

export const homeGreetings = {
  name: "Ankit Tanwar",
  title: "Front-End React Developer",
  description: `Hi, I'm Ankit Tanwar. A passionate Front-end React Developer based in Warsaw, Poland.`,
};

export const socialLinks = {
  LinkedIn: "https://www.linkedin.com/in/ankit-tanwar1503/",
  GitHub: "https://github.com/Ankit-Tanwar03",
  Gmail:
    "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKjfzhhgjWrbqWsVLrmvNsWwVQvBmbQphMJjrcrMsHsVswPwqLlQNxhhlwpfClVlRBxfSvc",
  Resume: "someLink",
};

export const images = {
  Profile: "https://avatars.githubusercontent.com/u/109900657?v=4",
  About: "/src/Assets/about_image.png",
};

export const about = {
  heading: "About Me",
  title: "Front-end React Developer based in Warsaw, Poland",
  description1:
    "Hi, I'm Ankit Tanwar, a passionate frontend developer dedicated to crafting modern, responsive, and user-friendly web applications. With expertise in JavaScript, React, Next.js, and cutting-edge tools like Appwrite and Clerk, I strive to deliver seamless digital experiences. I have a knack for turning creative ideas into functional designs while ensuring clean, maintainable code.",
  description2:
    "Beyond coding, I enjoy learning new technologies, staying updated on industry trends, and contributing to meaningful projects. I'm always open to opportunities to collaborate and help bring innovative ideas to life.",
};

export const cards = [
  {
    image: "/src/Assets/Rode_Image.png",
    title: "Rode Landing Page UI Clone",
    description:
      "The Rode Landing Page Clone is a visually appealing and responsive replica of the official Rode website's landing page. Built with modern web development tools, it showcases the brand's aesthetic and features.",
    liveLink: "https://rode-landingpage-clone.netlify.app/",
    gitLink: "https://github.com/Ankit-Tanwar03/rode-landingpage-clone",
    icons: [
      <SiHtml5 data-tooltip-id="HTML5" />,
      <SiTailwindcss data-tooltip-id="TailwindCSS" />,
    ],
  },
  {
    image: "/src/Assets/Shopify_Image.png",
    title: "Shopify Landing Page UI Clone",
    description:
      "This project is a Shopify Landing Page Clone, designed to replicate the core design and functionality of Shopify's official landing page. The clone is built with responsive and modern web design techniques to provide a seamless user experience across various devices.",
    liveLink: "https://shopify-landingpage-clone.netlify.app/",
    gitLink: "https://github.com/Ankit-Tanwar03/shopify-landingpage-clone",
    icons: [
      <SiHtml5 data-tooltip-id="HTML5" />,
      <SiTailwindcss data-tooltip-id="TailwindCSS" />,
    ],
  },

  {
    image: "/src/Assets/Comet_Crypto_Coins_Image.png",
    title: "Comet Crypto Coins",
    description:
      "Comet Crypto Coins is a sleek web application offering real-time cryptocurrency data through API integration. It features responsive layouts and intuitive navigation for tracking market trends effectively. ",
    liveLink: "https://cometcryptocoins.netlify.app/",
    gitLink: "https://github.com/Ankit-Tanwar03/Comet-Crypto-Coins",
    icons: [
      <SiReact data-tooltip-id="React" />,
      <SiVite data-tooltip-id="Vite" />,
      <SiReactrouter data-tooltip-id="ReactRouter" />,
      <SiHtml5 data-tooltip-id="HTML5" />,
      <SiTailwindcss data-tooltip-id="TailwindCSS" />,
    ],
  },

  {
    image: "/src/Assets/Comet_Car_Rental_Image.png",
    title: "Comet Car Rental",
    description:
      "Comet Car Rental is a modern web application designed for seamless car rental services. It features a user-friendly interface and responsive design, enhancing the customer experience for booking vehicles effortlessly.",
    liveLink: "https://comet-car-rental.vercel.app/",
    gitLink: "https://github.com/Ankit-Tanwar03/Comet-Car-Rental",
    icons: [
      <SiReact data-tooltip-id="React" />,
      <SiVite data-tooltip-id="Vite" />,
      <SiReactrouter data-tooltip-id="ReactRouter" />,
      <SiHtml5 data-tooltip-id="HTML5" />,
      <SiTailwindcss data-tooltip-id="TailwindCSS" />,
    ],
  },

  {
    image: "/src/Assets/Comet_Fitness_Image.png",
    title: "Comet Fitness",
    description:
      "Comet Fitness is a dynamic web application tailored for fitness enthusiasts. It features a sleek interface and uses Appwrite for secure user authentication, providing a seamless and interactive experience.",
    liveLink: "https://cometfitness.netlify.app/",
    gitLink: "https://github.com/Ankit-Tanwar03/Comet-Fitness",
    icons: [
      <SiReact data-tooltip-id="React" />,
      <SiAppwrite data-tooltip-id="Appwrite" />,
      <SiVite data-tooltip-id="Vite" />,
      <SiReactrouter data-tooltip-id="ReactRouter" />,
      <SiHtml5 data-tooltip-id="HTML5" />,
      <SiTailwindcss data-tooltip-id="TailwindCSS" />,
    ],
  },
];

export const contact = {
  title: "Contact",
  description:
    "Let's build a community of like-minded individuals! let's connect and grow together! 👇",
};
