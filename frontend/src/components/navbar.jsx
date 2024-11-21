import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Style = styled.div`
  #vertical_nav_links {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: ${(props) =>
      props.isOpen ? "500px" : "0"}; /* 원하는 최대 높이 설정 */
    transition: max-height 0.5s ease-out; /* 애니메이션 효과 추가 */
  }
  #header {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    padding: 1.25rem;
  }
  #header_content {
    align-items: center;
    max-width: 71.25rem;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
  }
  #logo {
    font-size: 1.5rem;
    font-weight: bolder;
  }
  .section {
    font-size: 1.1rem;
    margin: 0 1rem;
    font-weight: bolder;
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }
  #hamburger {
    display: none;
  }
  .bar {
    border: 0.15rem solid rgba(0, 0, 0, 0.7);
    width: 1.75rem;
    margin: 0.3rem;
  }
  @media (max-width: 1024px) {
    #horizontal_nav_links {
      display: none;
    }
    #header {
      background-color: white;
      padding: 15px 20px;
      z-index: 10;
    }
    #hamburger {
      padding: 0.2rem;
      display: flex;
      flex-direction: column;
      border-radius: 0.2rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    #logo {
      color: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
    }
    .section {
      color: gray;
      margin-top: 1.5rem;
    }
  }
`;

const Menu = ({ direction, scrollToIntro }) => {
  return (
    <nav id={direction}>
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
  );
};

const Navbar = ({ scrollToIntro }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Style isOpen={isOpen}>
      <div id="header">
        <div id="header_content">
          <Link id="logo" onClick={scrollToIntro}>
            CJW's Portfolio
          </Link>

          <Menu
            direction={"horizontal_nav_links"}
            scrollToIntro={scrollToIntro}
          />
          <div id="hamburger" onClick={handleToggle}>
            <hr className="bar" />
            <hr className="bar" />
            <hr className="bar" />
          </div>
        </div>
        <Menu direction={"vertical_nav_links"} scrollToIntro={scrollToIntro} />
      </div>
    </Style>
  );
};

export default Navbar;
