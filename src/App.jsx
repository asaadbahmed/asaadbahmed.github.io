import Resume from "./assets/Asaad_Ahmed_Resume_1-7-25.pdf";
import { IoMdMail } from "react-icons/io";
import {
  FaGithub,
  FaLinkedinIn,
  FaGraduationCap,
  FaRegFilePdf,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import "./App.css";

function FadeInSection({ children, className, ...props }) {
  return (
    <section
      className={`animate__animated animate__fadeIn ${className}`}
      {...(props || {})}
    >
      {children}
    </section>
  );
}

function Heading() {
  /* This might look better, mess around w/ it later
  return (
    <div style={{fontSize: "2.5rem"}}>
      <h1>hello, i'm Asaad</h1>
      <h1>a computer engineer</h1>
      <h1>@ TMU (formerly Ryerson)</h1>
    </div>
  );
  */
  return (
    <div>
      <h1 style={{ fontSize: "2.5rem" }}>
        i'm asaad ⚡<br></br>a computer engineer 💻<br></br>@tmu (formerly
        ryerson) 🎓
        <span style={{ display: "block", fontSize: "1.5rem" }}>
          website is currently in development, stay tuned 🛠️
        </span>
      </h1>
    </div>
  );
}

function Spotlight({ children, opacity }) {
  return (
    <div
      style={{
        opacity: opacity / 100,
        transition: "opacity 0.3s ease-out",

        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        top: "5vh",
        minWidth: "70%",
        minHeight: "7%",

        borderRadius: "24px",
        border: "2px solid rgb(40, 40, 40)",
        backgroundColor: "rgb(20, 20, 20)", // IMPORTANT: rgb(40, 40, 40) looks nice too, get opinions
        boxShadow: "0 0 10px 2px rgba(40, 40, 40, 0.6)",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        zIndex: "2", // IMPORTANT: might remove this later & make it more translucent, but then icon hover functionality doesn't work
        pointerEvents: "auto",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [spotlightOpacity, setOpacity] = useState(100);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let timeout = null;
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      setOpacity(50);
      timeout = setTimeout(() => setOpacity(100), 100);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const githubOnClick = () => window.open("https://github.com/asaadbahmed");
  const linkedinOnClick = () =>
    window.open("https://www.linkedin.com/in/asaadbinahmed/");
  const educationOnClick = () =>
    window.open(
      "https://www.torontomu.ca/programs/undergraduate/computer-engineering/"
    );
  const resumeOnClick = () => window.open(Resume);
  const mailOnClick = () => window.open("mailto:asaadbinahmed@gmail.com");
  
  return (
    <div
      style={{ maxHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Spotlight className="spotlight" opacity={spotlightOpacity}>
        <p
          style={{
            fontSize: "0.8rem",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginLeft: "4%",
            alignSelf: "center",
            color: "rgb(150, 150, 150)",
          }}
        >
          ASAAD AHMED
        </p>
        <div
          id="header-spotlight-icons"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px", //8px, 12%
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "4%", // 20px
            overflow: "hidden",
          }}
        >
          <FaGithub
            className="icon"
            id="github-icon"
            onClick={githubOnClick}
          ></FaGithub>
          <FaLinkedinIn
            className="icon"
            id="linkedin-icon"
            onClick={linkedinOnClick}
          ></FaLinkedinIn>
          <FaGraduationCap
            className="icon"
            id="education-icon"
            onClick={educationOnClick}
          ></FaGraduationCap>
          <FaRegFilePdf
            className="icon"
            id="resume-icon"
            onClick={resumeOnClick}
          ></FaRegFilePdf>
          <IoMdMail
            className="icon"
            id="mail-icon"
            onClick={mailOnClick}
          ></IoMdMail>
        </div>
      </Spotlight>
      <FadeInSection
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "30vh",
          marginLeft: "15%",
        }}
      >
        <Heading />
      </FadeInSection>
    </div>
  );
}
