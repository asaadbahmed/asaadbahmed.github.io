import { useState } from "react";
import AnimatedSection from "./components/AnimatedSection";
import "./App.css";

function Title() {
  return <h1>hello, and welcome to my portfolio :)</h1>;
}

function Projects() {
  return <h1>Projects</h1>;
}

export default function App() {
  return (
    <>
      <AnimatedSection style={{ justifyItems: "start", alignItems: "start", marginLeft: "10vh" }}>
        <Title />
      </AnimatedSection>
    </>
  );
}
