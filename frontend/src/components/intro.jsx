import React, { useRef } from "react";
import styled from "styled-components";
import image from "../images/home.jpg";

const Style = styled.div`
  .Masthead_content {
    width: 100%;
    overflow: hidden !important;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${image});
    background-size: cover;
    background-position: center;
  }

  .Masthead_title {
    margin: 5px;
    position: relative;
    width: 100%;
    color: white;
    font-weight: 400;
    font-size: 50px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-family: "Black Han Sans", sans-serif;
  }

  @media (max-width: 992px) {
    .Masthead_content {
      height: 450px;
    }
  }
  #bar {
    width: 3.5rem;
    border-top: 2rem solid orange;
  }
`;

const Intro = () => {
  const sectionRef = useRef(null);

  return (
    <Style>
      <div ref={sectionRef} className="Masthead_content">
        <h1 className="Masthead_title">- 최지웅 -</h1>
        <h1 className="Masthead_title">백엔드 개발자 포트폴리오</h1>
      </div>
      <hr id="bar" />
    </Style>
  );
};

export default Intro;
