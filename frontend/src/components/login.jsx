import React, { useRef } from "react";
import styled from "styled-components";
import login_bg from "../images/login.jpg";
const Style = styled.div`
  #container {
    background-image: url(${login_bg});
  }
`;
const Login = () => {
  const sectionRef = useRef(null);

  return (
    <Style>
      <div id="container"></div>
      <a
        href="http://127.0.0.1:8000/accounts/google/login/"
        class="field google"
      >
        google
      </a>
    </Style>
  );
};

export default Login;
