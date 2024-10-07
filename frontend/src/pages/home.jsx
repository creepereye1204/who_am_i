import React from "react";
import Navbar from "../components/navbar";
import image from "../images/home.jpg";
import styled from "styled-components";
const Style = styled.div`
  #bg {
  }
`;
const Home = () => {
  return (
    <Style>
      <img src={image} id="bg" alt="설명 텍스트" />
      <Navbar />
    </Style>
  );
};

export default Home;
