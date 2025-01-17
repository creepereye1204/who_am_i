// import React, { useRef } from "react";
// import Navbar from "../components/navbar";
// import styled from "styled-components";
// import header from "../images/home.jpg";

// const Style = styled.div`
//   .Masthead_content {
//     width: 100%;
//     overflow: hidden !important;
//     height: 600px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     background-image: url(${header});
//     background-size: cover;
//     background-position: center;
//   }

//   .Masthead_title {
//     margin: 5px;
//     position: relative;
//     width: 100%;
//     color: white;
//     font-weight: 400;
//     font-size: 50px;
//     text-align: center;
//     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
//     font-family: "Black Han Sans", sans-serif;
//   }

//   @media (max-width: 992px) {
//     .Masthead_content {
//       height: 450px;
//     }
//   }
// `;

// const Home = () => {
//   const sectionRef = useRef(null);

//   const scrollToSection = () => {
//     if (sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <Style>
//       <Navbar scrollToSection={scrollToSection} />
//       <div ref={sectionRef} className="Masthead_content">
//         <h1 className="Masthead_title">- 최지웅 -</h1>
//         <h1 className="Masthead_title">백엔드 개발자 포트폴리오</h1>
//         <hr id="bar" />
//       </div>
//     </Style>
//   );
// };

// export default Home;
import React from "react";
import Intro from "../components/intro";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import ProjectForm from "../components/projectForm"
const Style = styled.div``;

const Home = () => {
  return (
    <Style>
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <ProjectForm/>
    </Style>
  );
};

export default Home;
