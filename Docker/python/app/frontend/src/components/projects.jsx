import React from "react";
import styled from "styled-components";

const Style = styled.div`
  .containers {
    display: flex;
  }
  .container {
    padding: 2rem;
    height: 200px;
  }
`;

const Project = ({ title, date, description, contents, skills, link }) => {
  return (
    <div className="container">
      <div className="title">{title}</div>
      <div className="date">{date}</div>
      <div className="describe">{description}</div>
      <div className="contents">
        <ul>
          {contents.map((content, index) => (
            <li key={index} className="content">
              {content}
            </li>
          ))}
        </ul>
      </div>
      <div className="link">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Project Link
        </a>
      </div>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
      <button className="readme-btn">View README</button>
    </div>
  );
};

const Projects = () => {
  const projectDatas = [
    {
      title: "My Project",
      date: "2024-01-01",
      description: "This is a description of my project.",
      contents: ["Content 1", "Content 2", "Content 3"],
      skills: ["React", "Styled-Components", "JavaScript"],
      link: "https://example.com",
    },
    {
      title: "Another Project",
      date: "2024-02-01",
      description: "This is another description.",
      contents: ["Content A", "Content B"],
      skills: ["HTML", "CSS", "JavaScript"],
      link: "https://example2.com",
    },
  ];

  return (
    <Style>
      <div className="containers">
        {projectDatas.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            date={project.date}
            description={project.description}
            contents={project.contents}
            skills={project.skills}
            link={project.link}
          />
        ))}
      </div>
    </Style>
  );
};

export default Projects;
