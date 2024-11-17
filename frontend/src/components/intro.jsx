import React, { useRef } from "react";
import styled from "styled-components";
import desk from "../images/desk_bg.jpg";
import mobile from "../images/mobile_bg.jpg";

const Style = styled.div`
  #content {
    margin: 5rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Masthead_content {
    width: 100%;
    overflow: hidden !important;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${desk});
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
      background-image: url(${mobile});
    }
  }

  #bar {
    width: 3.5rem;
    border: 0.15rem solid orange;
  }

  .Masthead_describe {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.3rem;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }

  #show_more {
    padding: 1rem;
    border-radius: 2rem;
    background-color: #f4623a;
    border: none;
    margin-top: 1rem; /* 버튼과 텍스트 간의 여백 추가 */
  }
`;

const Intro = () => {
  const sectionRef = useRef(null);

  return (
    <Style>
      <div ref={sectionRef} className="Masthead_content">
        <div id="content">
          <h1 className="Masthead_title">- 최지웅 -</h1>
          <h1 className="Masthead_title">백엔드 개발자 포트폴리오</h1>
          <hr id="bar" />
          <h2 className="Masthead_describe">
            안녕하세요.
            <br />
            Django 백엔드 개발자 <br />
            최지웅입니다
          </h2>
          <button id="show_more" className="Masthead_describe">
            더 알아보기 ↓
          </button>
        </div>
      </div>
    </Style>
  );
};

export default Intro;
