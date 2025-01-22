import React from "react";
import Intro from "../components/intro";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";

import ProjectForm from "../components/projectForm";

const Style = styled.div``;

const Profile = () => {
  return (
    <Style>
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <ProjectForm />
    </Style>
  );
};

export default Profile;
