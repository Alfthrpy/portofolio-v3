// Stack Icons
import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import phpIcon from "@icons/php.svg";
import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import laravelIcon from "@icons/laravel.svg";
import npmIcon from "@icons/npm.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import mysqlIcon from "@icons/mysql.svg";
import vscodeIcon from "@icons/vscode.svg";
import expressIcon from "@icons/express.svg";
import mongodbIcon from "@icons/mongodb.svg";
import typescriptIcon from "@icons/typescript.svg";
import pythonIcon from "@icons/python.svg";
import PandasIcon from "@icons/pandas.jpg";
import JavaIcon from "@icons/java.svg";

// Project Images
import iris from "@images/iris.png";
import Ebuddy from "@images/ebuddy.png";
import sendthepict from "@images/sendthepict.png";
import tts from "@images/tts.png";
import mikku from "@images/Mikku.png";
import searchmantic from "@images/searchmantic.png";
import shortener from "@images/shortener.png";


// Gif Images
import mikkuGif from "@gif/mikku.gif";
import ttsGif from "@gif/tts.gif";
import ebuddyGif from "@gif/ebuddy.gif";
import searchmanticGif from "@gif/searchmantic.gif";
import irisGif from "@gif/irs.gif";
import sendthepictGif from "@gif/sendthepict.gif";
import shortenerGif from "@gif/api-shortener.gif";

const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
};

const stacks = {
  HTML: { name: "HTML", src: htmlIcon, level: "Intermediate" },
  CSS: { name: "CSS", src: cssIcon, level: "Intermediate" },
  PHP: { name: "PHP", src: phpIcon, level: "Intermediate" },
  JS: { name: "Javascript", src: jsIcon, level: "Intermediate" },
  Typescript: { name: "Typescript", src: typescriptIcon, level: "Beginner" },
  React: { name: "ReactJS", src: reactIcon, level: "Intermediate" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Intermediate" },
  Laravel: { name: "Laravel", src: laravelIcon, level: "Intermediate" },
  Express: { name: "ExpressJS", src: expressIcon, level: "Beginner" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Advanced" },
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Intermediate" },
  MongoDB: { name: "MongoDB", src: mongodbIcon, level: "Beginer" },
  Python : { name: "Python", src: pythonIcon, level: "Advanced" },
  Pandas : { name: "Pandas", src:PandasIcon, level: "Advanced" },
  Java : { name: "Java", src: JavaIcon, level: "Intermediate"}
};

const projects = [
  {
    id: 10,
    name: "Shortener URL API",
    desc: "URL Shortener App is a platform for shortening long URLs into shareable, compact links. It supports user management, link creation, and detailed click tracking with analytics.",
    image: shortener,
    web: "",
    repo: "https://github.com/Alfthrpy/shortener-api",
    stack: "Mongodb, ExpressJs, Swagger OpenAPI",
    gif: shortenerGif,
  },
  {
    id: 9,
    name: "Iris Classifier",
    desc: "The Iris Classifier app predicts the species of iris flowers (Setosa, Versicolor, Virginica) based on petal and sepal measurements, offering quick and accurate results.",
    image: iris,
    web: "",
    repo: "https://github.com/Alfthrpy/iris-classifier-apps",
    stack: "Python, Tkinter, Scikit-learn",
    gif: irisGif,
  },
  {
    id: 10,
    name: "EBuddy",
    desc: "Ebuddy is an app developed for a Software Engineering project, designed to help government agencies create letters, attendance records, and out-of-office reports efficiently.",
    image: Ebuddy,
    web: "https://github.com/Alfthrpy/ebuddy-rpl",
    repo: "https://github.com/Alfthrpy/ebuddy-rpl",
    stack: "Laravel, Bootstrap",
    gif: ebuddyGif,
  },
  {
    id: 11,
    name: "SendThePict",
    desc: "The website lets users send anonymous messages or letters by submitting images with a description of the message and recipient, offering a creative and private way to communicate.",
    image: sendthepict,
    web: "https://sendthepict.vercel.app/",
    repo: "https://github.com/alfthrpy/sendthepict",
    stack: "Webpack, Axios, TailwindCSS, DaisyUI",
    gif: sendthepictGif,
  },
  {
    id: 12,
    name: "TTS Apps",
    desc: "This website was crafted for lecture assignments, TTS Web is an interactive platform for solving crossword puzzles. It offers a fun and educational experience for puzzle enthusiasts of all ages. ",
    image: tts,
    web: "https://tts-app-eta.vercel.app/",
    repo: "https://github.com/alfthrpy/tts-app",
    stack: "Next.js, React.js, TailwindCSS, DaisyUI",
    gif: ttsGif,
  },
  {
    id: 13,
    name: "Mikku",
    desc: "This website was developed to support the social-emotional development of children aged 3-4. Through inspiring stories, interactive games, and age-appropriate content.",
    image: mikku,
    web: "https://mikku-inky.vercel.app/",
    repo: "https://github.com/alfthrpy/mikku",
    stack: "Next.js, React.js, DaisyUI, Tailwind",
    gif: mikkuGif,
  },
  {
    id: 14,
    name: "Searchmantic Hadits",
    desc: "Semantic-based Search Engine Platform For Hadits. Searchmantic Hadits is a search engine designed to help users quickly and accurately find hadith using keyword-based searches.",
    image: searchmantic,
    web: "https://searchmantic-hadist.vercel.app/",
    repo: "https://github.com/alfthrpy/searchmantic-hadist",
    stack: "Next.js, React.js, Flask, TensorFlow, Pandas, Python",
    gif: searchmanticGif,
  },
];

export { tools, stacks, projects };
