import React from "react";
import styled from "styled-components";
import devops from "../icons/dev-ops.svg";
import backend from "../icons/backend.svg";
import language from "../icons/language.svg";
import frontend from "../icons/frontend.svg";

const Style = styled.div`
  #container {
    width: 100%;
    padding: 4rem 1.5rem;
    background-color: #f9c51d;
    box-sizing: border-box;
  }
  #contents {
    max-width: 71.25rem;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    margin: 0 auto;
    flex-wrap: wrap;
    border-radius: 4rem;
    background-color: hsla(0, 0%, 100%, 0.8);
  }
  #title {
    text-align: center;
    font-family: "Black Han Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: bolder;
  }
  #bar {
    width: 10rem;
    border: 0.1rem solid grey;
  }
  .icon {
    width: 3rem;
    height: auto;
  }
  .badge {
    display: flex;
    margin: 1rem;
    gap: 2rem;
  }
  .field {
    font-family: "Black Han Sans", sans-serif;
  }
`;

const Skill = ({ data }) => {
  const { icon, label, badges } = data;

  return (
    <div className="badge">
      <img src={icon} alt={label} className="icon" />

      <p className="field">{label}</p>
      {badges.map((badge, index) => {
        <img src={badge} key={index}></img>;
      })}
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      icon: language,
      label: "lang",
      badges: ["python"],
    },
    {
      icon: frontend,
      label: "front",
      badges: ["python"],
    },
    {
      icon: backend,
      label: "back",
      badges: ["python"],
    },
    {
      icon: devops,
      label: "dev",
      badges: ["python"],
    },
  ];
  return (
    <Style>
      <div id="container">
        <div id="title">SKILLS</div>
        <hr id="bar"></hr>
        <div id="contents">
          {skills.map((skill, index) => (
            <Skill data={skill} key={index} />
          ))}
        </div>
      </div>
    </Style>
  );
};

export default Skills;
