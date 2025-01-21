import React from "react";

import styled from "styled-components";
import Navbar from "../components/navbar";

import Login from "../components/login";

const Style = styled.div``;

const Home = () => {
  return (
    <Style>
      <Navbar />
      <Login />
    </Style>
  );
};

export default Login;
