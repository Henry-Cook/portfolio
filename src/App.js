import React from "react";
import "./App.css";
import Heading from "./components/heading/Heading";
import Nav from "./components/nav/Nav";
import About from "./components/about/About.jsx";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Nav />
      <Heading />
      <About />
      <Skills />
      <Projects color={"#494949"} fontColor={"#faf6e9"} />
      <Projects color={" #faf6e9"} fontColor={"#494949"} />
      <Projects color={"#494949"} fontColor={"#faf6e9"} />
      <Projects color={" #ece8d9"} fontColor={"#494949"} />
      <Contact />
    </>
  );
}

export default App;
