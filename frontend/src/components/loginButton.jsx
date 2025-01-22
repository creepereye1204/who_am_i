import React, { useRef } from "react";
import styled from "styled-components";

const Style = styled.div`
  .login-button {
    display: inline-block; /* 링크를 블록처럼 보이게 함 */
    width: 200px; /* 버튼의 너비 */
    height: 50px; /* 버튼의 높이 */
    background-size: cover; /* 이미지 크기 조정 */
    color: transparent; /* 텍스트 숨기기 */
    text-align: center; /* 텍스트 정렬 */
    line-height: 50px; /* 텍스트 수직 중앙 정렬 */
    text-decoration: none; /* 링크 밑줄 제거 */
    color: aqua;
  }
`;
const LoginButton = () => {
  return (
    <Style>
      <a
        href="http://127.0.0.1:8000/accounts/google/login/"
        className="login-button"
      >
        google
      </a>
    </Style>
  );
};

export default LoginButton;
