import React from "react";
import styled from "styled-components";
import birthdate from "../icons/birthdate.svg";
import education from "../icons/education.svg";
import email from "../icons/email.svg";
import location from "../icons/location.svg";
import name from "../icons/name.svg";
import phone from "../icons/phone.svg";
const Style = styled.div`
  #container {
    text-align: center;
    width: 100%;
    padding-top: 3rem;
  }
  #content {
    max-width: 71.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
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
  .icons {
    display: flex;
    margin: 2rem 5rem;

    column-gap: 2rem;
  }
  .icon {
    width: 2.5rem;
    height: auto;
    opacity: 0.8;
  }
  .text {
    text-align: start;
    width: 5rem;
    overflow-wrap: break-word;
    opacity: 0.8;
  }
  .form {
    font-size: 1.5rem;
  }
  .input {
    font-size: 0.8rem;
    font-weight: 200;
  }
`;

const Icon = ({ data }) => {
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

const AboutMe = () => {
  const iconsData = [
    {
      src: birthdate,
      label: "생일",
      info: "1934-10-04(틀딱)",
    },
    {
      src: education,
      label: "학력",
      info: "삼육대학교(인공지능 융합학부)",
    },
    {
      src: email,
      label: "이메일",
      info: "maratanghuru@gmail.com",
    },
    {
      src: location,
      label: "위치",
      info: "파인하우스",
    },
    {
      src: name,
      label: "이름",
      info: "빅랩",
    },
    {
      src: phone,
      label: "전화번호",
      info: "010-1234-5678",
    },
  ];

  return (
    <Style>
      <div id="container">
        <div id="title">ABOUT ME</div>
        <hr id="bar"></hr>
        <div id="content">
          {iconsData.map((data, index) => (
            <Icon key={index} data={data} />
          ))}
        </div>
      </div>
    </Style>
  );
};

export default AboutMe;
