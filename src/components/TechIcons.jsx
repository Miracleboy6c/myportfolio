import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiPython,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa6";
import { Code2 } from "lucide-react";

export function getTechIcon(name, className = "w-4 h-4 sm:w-5 sm:h-5") {
  switch (name) {
    case "React.js":
    case "React":
      return <SiReact className={`${className} text-[#61DAFB]`} title="React" />;
    case "JavaScript (ES6+)":
    case "JavaScript":
    case "Blade / JS":
      return <SiJavascript className={`${className} text-[#F7DF1E]`} title="JavaScript" />;
    case "Tailwind CSS":
    case "Tailwind":
      return <SiTailwindcss className={`${className} text-[#06B6D4]`} title="Tailwind CSS" />;
    case "HTML5":
      return <SiHtml5 className={`${className} text-[#E34F26]`} title="HTML5" />;
    case "CSS3":
      return <FaCss3Alt className={`${className} text-[#1572B6]`} title="CSS3" />;
    case "Bootstrap":
      return <SiBootstrap className={`${className} text-[#7952B3]`} title="Bootstrap" />;
    case "PHP":
      return <SiPhp className={`${className} text-[#777BB4]`} title="PHP" />;
    case "Laravel":
      return <SiLaravel className={`${className} text-[#FF2D20]`} title="Laravel" />;
    case "MySQL":
      return <SiMysql className={`${className} text-[#4479A1]`} title="MySQL" />;
    case "PostgreSQL":
      return <SiPostgresql className={`${className} text-[#4169E1]`} title="PostgreSQL" />;
    case "Python":
      return <SiPython className={`${className} text-[#3776AB]`} title="Python" />;
    case "Java":
      return <FaJava className={`${className} text-[#EA2D2E]`} title="Java" />;
    case "Docker":
      return <SiDocker className={`${className} text-[#2496ED]`} title="Docker" />;
    case "Git":
      return <SiGit className={`${className} text-[#F05032]`} title="Git" />;
    case "GitHub":
      return <SiGithub className={`${className} text-zinc-900 dark:text-zinc-100`} title="GitHub" />;
    case "Vite":
      return <SiVite className={`${className} text-[#646CFF]`} title="Vite" />;
    case "Postman":
      return <SiPostman className={`${className} text-[#FF6C37]`} title="Postman" />;
    default:
      return <Code2 className={`${className} text-indigo-500`} title={name} />;
  }
}
