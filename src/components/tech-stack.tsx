import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import lua from "@/assets/techstack/lua.png";
import javascript from "@/assets/techstack/javascript.png";
import typescript from "@/assets/techstack/typescript.png";
import java from "@/assets/techstack/java.png";
import python from "@/assets/techstack/python.png";
import c from "@/assets/techstack/c.png";
import react from "@/assets/techstack/react.png";
import tailwind from "@/assets/techstack/tailwind.png";
import nextjs from "@/assets/techstack/nextjs.png";
import vite from "@/assets/techstack/vite.png";
import postgresql from "@/assets/techstack/postgresql.png";
import mongodb from "@/assets/techstack/mongodb.png";
import firebase from "@/assets/techstack/firebase.png";
import graphql from "@/assets/techstack/graphql.png";
import rest from "@/assets/techstack/rest.jpg";
import github from "@/assets/techstack/github.png";
import expressjs from "@/assets/techstack/expressjs.png";
import nodejs from "@/assets/techstack/nodejs.png";

type StackItem = {
  name: string;
  icon: string;
};

export const languages: StackItem[] = [
  { name: "Lua", icon: lua },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "C", icon: c },
];

export const frameworks: StackItem[] = [
  { name: "React", icon: react },
  { name: "Tailwind", icon: tailwind },
  { name: "Next", icon: nextjs },
  { name: "Vite", icon: vite },
  { name: "Node", icon: nodejs },
  { name: "Express", icon: expressjs },
];

export const misc: StackItem[] = [
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "Firebase", icon: firebase },
  { name: "GraphQL", icon: graphql },
  { name: "Rest", icon: rest },
  { name: "GitHub", icon: github },
];

const StackCard = (prop: StackItem) => (
  <figure
    className={cn(
      "relative cursor-pointer overflow-hidden rounded-3xl border p-2 h-10 bg-[rgb(247,247,249)] hover:bg-gray-200 hover:scale-105"
    )}
  >
    <div className="flex flex-row items-center justify-center gap-2">
      <img
        className="rounded-full"
        width="24"
        height="24"
        alt=""
        src={prop.icon}
      />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium">{prop.name}</figcaption>
      </div>
    </div>
  </figure>
);

export const TechStack = () => (
  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
    <Marquee pauseOnHover className="[--duration:20s]">
      {languages.map((item) => (
        <StackCard key={item.name} {...item} />
      ))}
    </Marquee>
    <Marquee pauseOnHover className="[--duration:20s]">
      {frameworks.map((item) => (
        <StackCard key={item.name} {...item} />
      ))}
    </Marquee>
    <Marquee pauseOnHover className="[--duration:20s]">
      {misc.map((item) => (
        <StackCard key={item.name} {...item} />
      ))}
    </Marquee>
    <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
    <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
  </div>
);
