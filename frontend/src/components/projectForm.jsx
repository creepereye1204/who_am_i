import React, { useState } from "react";
import styled from "styled-components";

const Style = styled.div`
  #container {
    text-align: center;
    width: 100%;
    padding-top: 3rem;
  }
  #form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .input {
    padding: 0.5rem;
    font-size: 1rem;
  }
  .button {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [endAt, setEndAt] = useState("");
  const [describe, setDescribe] = useState("");
  const [link, setLink] = useState("");
  const [skillNames, setSkillNames] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("api/projects", {
      method: "POST",
      headers: {
        "X-CSRFToken": csrfToken,
      },

      body: JSON.stringify({
        projectName,
        endAt,
        describe,
        link,
        files: [],
        contents: [],
        skill_names: skillNames.split(",").map((skill) => skill.trim()),
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <Style>
      <div id="container">
        <h1>프로젝트 추가하기</h1>
        <a
          href="http://127.0.0.1:8000/accounts/google/login/"
          class="field google"
        >
          google
        </a>

        <form id="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="프로젝트 이름"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          <input
            className="input"
            type="date"
            placeholder="종료일"
            value={endAt}
            onChange={(e) => setEndAt(e.target.value)}
            required
          />
          <textarea
            className="input"
            placeholder="프로젝트 설명"
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
            required
          />
          <input
            className="input"
            type="url"
            placeholder="링크"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="기술 스택 (쉼표로 구분)"
            value={skillNames}
            onChange={(e) => setSkillNames(e.target.value)}
          />
          <button className="button" type="submit">
            프로젝트 추가하기
          </button>
        </form>
      </div>
    </Style>
  );
};

export default ProjectForm;
