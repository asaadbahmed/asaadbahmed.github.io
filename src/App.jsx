//import { useState } from "react";
import "./App.css";
import { IoMdMail } from "react-icons/io";
import {
  FaGithub,
  FaLinkedinIn,
  FaGraduationCap,
  FaRegFilePdf,
  FaFolder,
} from "react-icons/fa";

const iconStyle = {
  fontSize: "1.3rem",
  margin: "auto",
  color: "rgb(150, 150, 150)",
};

function AnimatedSection({ children, className, ...props }) {
  return (
    <section
      className={`animate__animated animate__bounceInLeft ${className}`}
      {...(props || {})}
    >
      {children}
    </section>
  );
}

function Heading() {
  return <h1>hello, and welcome to my portfolio 😎</h1>;
}

function Spotlight({ children }) {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        top: "5vh",
        width: "60%",
        height: "8%",

        borderRadius: "24px",
        border: "2px solid rgb(40, 40, 40)",
        backgroundColor: "#121212",
        boxShadow: "0 0 10px 2px rgba(30, 30, 30, 0.5)",

        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        //display: "flex",
        //flexDirection: "row",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Spotlight>
        <p
          style={{
            fontSize: "0.8rem",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginLeft: "20px",
            color: "rgb(150, 150, 150)",
            gridColumn: "1",
          }}
        >
          ASAAD AHMED
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "8px",
            gridColumn: "2",
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "20px",
          }}
        >
          <FaGithub style={iconStyle}></FaGithub>
          <FaLinkedinIn style={iconStyle}></FaLinkedinIn>
          <FaGraduationCap style={iconStyle}></FaGraduationCap>
          <FaRegFilePdf style={iconStyle}></FaRegFilePdf>
          <FaFolder style={iconStyle}></FaFolder>
          <IoMdMail style={iconStyle}></IoMdMail>
        </div>
      </Spotlight>
      <AnimatedSection
        style={
          {
            /*
            justifyItems: "start",
            alignItems: "start",
            marginLeft: "10vh",
            */
          }
        }
      >
        <Heading />
      </AnimatedSection>

      <section></section>
      <section></section>
      <section></section>
    </>
  );
}
