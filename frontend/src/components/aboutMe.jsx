import React from "react";
import styled from "styled-components";

const Style = styled.div`
  * {
    font-family: "Black Han Sans", sans-serif;
  }
  #container {
    text-align: center;
    width: 100%;
  }
  #content {
    max-width: 71.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center; /* 내용물 가운데 정렬 */
    flex-wrap: wrap;
    gap: 1rem; /* 아이콘 간격 */
  }
  #title {
    font-size: 2.5rem;
    font-weight: bolder;
  }
  #describe {
  }
  .icons {
    display: flex; /* 아이콘을 가로로 배열 */

    justify-content: center; /* 중앙 정렬 */
    margin: 20px; /* 아이콘 간격 */
  }
`;

const Icon = ({ data }) => {
  const { src, label, info } = data; // data 객체에서 값 추출

  return (
    <div className="icons">
      <img src={src} alt={label} />
      <b>{label}</b>
      <div>{info}</div>
    </div>
  );
};

const AboutMe = () => {
  const iconsData = [
    {
      src: "image1.png",
      label: "아이콘 1",
      info: "정보 설명 1",
    },
    {
      src: "image2.png",
      label: "아이콘 2",
      info: "정보 설명 2",
    },
    {
      src: "image3.png",
      label: "아이콘 3",
      info: "정보 설명 3",
    },
    // 추가 아이콘 데이터...
  ];

  return (
    <Style>
      <div id="container">
        <div id="title">ABOUT ME</div>
        <div id="content">
          {iconsData.map((data, index) => (
            <Icon key={index} data={data} /> // Icon 컴포넌트 반복 렌더링
          ))}
        </div>
      </div>
    </Style>
  );
};

export default AboutMe;
