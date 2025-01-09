import Resume from "./assets/Asaad_Ahmed_Resume_1-7-25.pdf";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IoMdMail } from "react-icons/io";
import {
  FaGithub,
  FaLinkedinIn,
  FaGraduationCap,
  FaRegFilePdf,
} from "react-icons/fa";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import { useEffect, useState } from "react";
import themes from "./theme.js";
import "./App.css";
import { DarkMode } from "@mui/icons-material";

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

function Spotlight({ children, opacity, theme }) {
  const borderColor = themes[theme]["spotlightBorderColor"];
  const backgroundColor = themes[theme]["spotlightBackgroundColor"];
  const shadowColor = themes[theme]["spotlightShadowColor"];
  return (
    <div
      style={{
        opacity: opacity / 100,
        transition:
          "opacity 0.3s ease-out, background-color 0.5s ease-out, border 0.5s ease-out, box-shadow 0.5s ease-out",

        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        top: "5vh",
        minWidth: "70%",
        minHeight: "7%",

        borderRadius: "2em",
        border: borderColor,
        backgroundColor: backgroundColor,
        boxShadow: shadowColor,

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

const IOSSwitch = styled((props) => (
  <Switch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
    icon={<LightModeIcon sx={{ color: "orange" }} />}
    checkedIcon={<DarkModeIcon sx={{ color: "rgb(30, 30, 30)" }} />}
  />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

export default function App() {
  const [spotlightOpacity, setOpacity] = useState(100);
  const [theme, setTheme] = useState("dark");

  const primaryBackgroundColor = themes[theme]["backgroundColor"];
  const primaryTextColor = themes[theme]["textColor"];

  const spotlightTextColor = themes[theme]["spotlightTextColor"];

  const githubOnClick = () => window.open("https://github.com/asaadbahmed");
  const linkedinOnClick = () =>
    window.open("https://www.linkedin.com/in/asaadbinahmed/");
  const educationOnClick = () =>
    window.open(
      "https://www.torontomu.ca/programs/undergraduate/computer-engineering/"
    );
  const resumeOnClick = () => window.open(Resume);
  const mailOnClick = () => window.open("mailto:asaadbinahmed@gmail.com");

  useEffect(() => {
    const root = document.documentElement;
    root.style.backgroundColor = primaryBackgroundColor;
    root.style.color = primaryTextColor;
  }, [theme]);

  return (
    <div
      style={{ maxHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Spotlight className="spotlight" opacity={spotlightOpacity} theme={theme}>
        <p
          style={{
            fontSize: "0.8rem",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginLeft: "4%",
            alignSelf: "center",
            color: spotlightTextColor,
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
            gap: "10px",
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "4%",
            overflow: "hidden",
          }}
        >
          <FaGithub
            className="icon"
            id="github-icon"
            onClick={githubOnClick}
            style={{ color: spotlightTextColor }}
          ></FaGithub>
          <FaLinkedinIn
            className="icon"
            id="linkedin-icon"
            onClick={linkedinOnClick}
            style={{ color: spotlightTextColor }}
          ></FaLinkedinIn>
          <FaGraduationCap
            className="icon"
            id="education-icon"
            onClick={educationOnClick}
            style={{ color: spotlightTextColor }}
          ></FaGraduationCap>
          <FaRegFilePdf
            className="icon"
            id="resume-icon"
            onClick={resumeOnClick}
            style={{ color: spotlightTextColor }}
          ></FaRegFilePdf>
          <IoMdMail
            className="icon"
            id="mail-icon"
            onClick={mailOnClick}
            style={{ color: spotlightTextColor }}
          ></IoMdMail>
        </div>
      </Spotlight>
      <FadeInSection
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingTop: "8vh",
          marginTop: "20vh",
          marginLeft: "15%",
        }}
      >
        <Heading />
      </FadeInSection>
      <div style={{ position: "fixed", right: "4%", bottom: "4%" }}>
        <IOSSwitch
          checked={theme == "dark" ? true : false}
          onChange={(event) => {
            event.target.checked ? setTheme("dark") : setTheme("light");
          }}
        />
      </div>
    </div>
  );
}
