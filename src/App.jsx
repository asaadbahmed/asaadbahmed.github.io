import "./App.css";

import { IoMdMail } from "react-icons/io";
import {
  FaGithub,
  FaLinkedinIn,
  FaGraduationCap,
  FaRegFilePdf,
} from "react-icons/fa";

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
    <h1 style={{ fontSize: "2.5rem" }}>
      hello, i'm Asaad ⚡<br></br>a computer engineer 💻<br></br>@TMU (formerly
      Ryerson) 🎓
    </h1>
  );
}

function Spotlight({ children }) {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        top: "5vh",
        minWidth: "70%",
        minHeight: "6%",

        borderRadius: "24px",
        border: "2px solid rgb(40, 40, 40)",
        backgroundColor: "#121212",
        boxShadow: "0 0 10px 2px rgba(40, 40, 40, 1)",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Spotlight className="spotlight">
        <p
          style={{
            fontSize: "0.8rem",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginLeft: "2%",
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
            gap: "8px", //8px, 12%
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "2%", // 20px
            overflow: "hidden",
          }}
        >
          <FaGithub className="icon" id="github-icon"></FaGithub>
          <FaLinkedinIn className="icon" id="linkedin-icon"></FaLinkedinIn>
          <FaGraduationCap
            className="icon"
            id="education-icon"
          ></FaGraduationCap>
          <FaRegFilePdf className="icon" id="resume-icon"></FaRegFilePdf>
          <IoMdMail className="icon" id="mail-icon"></IoMdMail>
        </div>
      </Spotlight>
      <FadeInSection
        style={{
          justifyItems: "start",
          alignItems: "start",
          marginLeft: "15%",
        }}
      >
        <Heading />
      </FadeInSection>

      <section></section>
      <section></section>
      <section></section>
    </>
  );
}
