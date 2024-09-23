"use client";

interface Skill {
  value: string;
  color: string;
}

const skills: Skill[] = [
  { value: "Typescript", color: "text-Emphasis" },
  { value: "Python", color: "text-Black_8" },
  { value: "C", color: "text-accent" },
  { value: "React", color: "text-Black_8" },
  { value: "Redux", color: "text-Black_8" },
  { value: "NextJS", color: "text-Black_8" },
  { value: "MongoDB", color: "text-accent" },
  { value: "Flask", color: "text-Black_8" },
  { value: "NodeJS", color: "text-accent" },
  { value: "PostgreSQL", color: "text-accent" },
  { value: "ExpressJS", color: "text-Black_8" },
  { value: "MySQL", color: "text-Emphasis" },
  { value: "SQLAlchemy", color: "text-Black_8" },
  { value: "Docker", color: "text-Emphasis" },
  { value: "Kubernetes", color: "text-Black_8" },
  { value: "Github Actions", color: "text-accent" },
  { value: "AWS Services", color: "text-Black_8" },
  { value: "Shell", color: "text-accent" },
  { value: "Figma", color: "text-Emphasis" },
  { value: "UI/UX", color: "text-Emphasis" },
  { value: "React Native", color: "text-Emphasis" },
  { value: "Algorithms", color: "text-Black_8" },
  { value: "Data Structures", color: "text-Black_8" },
  { value: "System Design", color: "text-Black_8" },
];

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 p-4">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`inline-block px-2 py-1 text-sm font-semibold ${skill.color}`}
        >
          {skill.value}
        </span>
      ))}
    </div>
  );
}
