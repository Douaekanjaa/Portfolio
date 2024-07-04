export interface Skill {
  name: string;
  image: string;
}

export interface skillsData {
  frontend: Skill[];
  backend: Skill[];
  others: Skill[];
}

export const skillsData = {
  frontend: [
    { name: "HTML", image: "/imgs/html.png" },
    { name: "CSS", image: "/imgs/css.png" },
    { name: "Tailwind CSS", image: "/imgs/tailwind.png" },
    { name: "Bootstrap", image: "/imgs/bootstrap.svg" },
    { name: "JavaScript", image: "/imgs/js.png" },
    { name: "React", image: "/imgs/react.png" },
    { name: "Redux", image: "/imgs/redux.png" },
    { name: "TypeScript", image: "/imgs/ts.png" },
    { name: "NextJS", image: "/imgs/next.png" },
 
  ],
  backend: [
    { name: "PHP", image: "/imgs/php.svg" },
    { name: "Laravel", image: "/imgs/laravel.svg" },
    { name: "Node.js", image: "/imgs/node-js.png" },
    { name: "Express", image: "/imgs/express.png" },
    { name: "Python", image: "/imgs/python.svg" },
  ],
  database: [
    { name: "MongoDB", image: "/imgs/mongodb.svg" },
    { name: "MySQL", image: "/imgs/mysql2.svg" },
  ],
  others: [
    { name: "Git", image: "/imgs/git.svg" },
    { name: "GitHub", image: "/imgs/github.png" },
    { name: "Postman", image: "/imgs/postman.svg" },
    { name: "Docker", image: "/imgs/docker.svg" },
    { name: "Figma", image: "/imgs/figma.svg" },
   
  ],
};

export const Socials = [

  {
    name: "LinkedIn",
    src: "/imgs/linkedin.svg",
    url: "https://www.linkedin.com/in/douae-kanjaa/"
  },
  {
    name: "Github",
    src: "/imgs/github.png",
    url: "https://github.com/Douaekanjaa"
  },
 
];





export const projectsData = [
  {
    title: "Cinema Ticket Booking Website",
    description:
      "Cine is a website where users can explore blockbuster movies, purchase tickets seamlessly, and enjoy a delightful cinematic experience.",
    tags: ["React", "Redux", "Bootstrap", "JavaScript"],
    source_code: "https://github.com/Douaekanjaa/movie-ticket-booking-app",
    imageUrl: "/cine.png",
  },
  
  {
    title: "Bricole",
    description:
      "Bricole connects users with local service providers for various tasks, using intuitive filters for easy access and seamless transactions.",
    tags: ["NodeJs", "Express", "React", "MongoDB", "TailwindCss"],
    source_code: "https://github.com/Douaekanjaa/mern",
    imageUrl: "/bricole.png",
  },
  {
    title: "Gaming Gear E-commerce Website",
    description: "A Laravel-based e-commerce platform for buying gaming gear, featuring user authentication, product management, wishlist functionality, and admin privileges.",
    tags: ["Laravel", "JavaScript", "Bootstrap"],
    source_code: "https://github.com/Douaekanjaa/gaming_gear",
    imageUrl: "/gaming_gear.png",
  },
] as const;


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "AboutMe",
    hash: "#aboutme",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "SkillsSection",
    hash: "#skillssection",
  },
 
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;