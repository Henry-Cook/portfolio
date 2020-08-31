import React from "react";
import "./App.css";
import Heading from "./components/heading/Heading";
import Nav from "./components/nav/Nav";
import About from "./components/about/About.jsx";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import projects from "./utils/projects";

function App() {
  return (
    <>
      <Nav />
      <Heading />
      <About />
      <Skills />

      {projects.map((project, i) => {
        return (
          <Projects
            color={"#494949"}
            fontColor={"#faf6e9"}
            data={project}
            index={i}
          />
        );
      })}

      <Contact />
    </>
  );
}

export default App;
