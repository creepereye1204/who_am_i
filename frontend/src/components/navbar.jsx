import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Style = styled.div`
  #header {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    padding: 1.25rem;
  }
  #header-content {
    max-width: 71.25rem;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
  }
  #logo {
    font-size: 1.5em;
    font-weight: bolder;
  }
  .section {
    font-size: 1.1em;
    margin: 0 1em 0 1em;
    font-weight: bolder;
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }
`;
const Navbar = ({ scrollToIntro }) => {
  return (
    <Style>
      <div id="header">
        <div id="header-content">
          <Link id="logo" onClick={scrollToIntro}>
            CJW's Portpoilo
          </Link>
          <nav>
            <Link className="section" onClick={scrollToIntro}>
              About me
            </Link>
            <Link className="section" onClick={scrollToIntro}>
              Skills
            </Link>
            <Link className="section" onClick={scrollToIntro}>
              Archiving
            </Link>
            <Link className="section" onClick={scrollToIntro}>
              Projects
            </Link>
            <Link className="section" onClick={scrollToIntro}>
              Career
            </Link>
          </nav>
        </div>
      </div>
    </Style>
  );
};

export default Navbar;
