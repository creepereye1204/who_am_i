import React from "react";
import styled from "styled-components";

const Style = styled.div`
  #container {
    text-align: center;
    width: 100%;
    padding: 4rem 1.5rem;
    background-color: #f9c51d;
    box-sizing: border-box; /* 추가 */
  }
  #contents {
    max-width: 71.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
    border-radius: 4rem;
    background-color: hsla(0, 0%, 100%, 0.8);
  }
  #title {
    font-family: "Black Han Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: bolder;
  }
  #bar {
    width: 10rem;
    border: 0.1rem solid grey;
  }
`;

const Skill = ({ data }) => {
  const { src, label, info } = data;

  return (
    <div className="icons">
      <div>
        <img src={src} alt={label} className="icon" />
      </div>
      <div className="text">
        <div className="form">{label}</div>
        <div className="input">{info}</div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <Style>
      <div id="container">
        <div id="title">SKILLS</div>
        <hr id="bar"></hr>
        <div id="contents">
          ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </div>
      </div>
    </Style>
  );
};

export default Skills;
