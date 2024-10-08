import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Style = styled.div`
  #header {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
  }
`;
const Navbar = ({ scrollToIntro }) => {
  return (
    <Style>
      <div id="header">
        <Link onClick={scrollToIntro}>CJW's Portpoilo</Link>
        <nav>
          <Link onClick={scrollToIntro}>About me</Link>
          <Link onClick={scrollToIntro}>Skills</Link>
        </nav>
      </div>
    </Style>
  );
};

export default Navbar;
