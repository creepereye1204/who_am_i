import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return <div>안녕하세요!</div>;
};

const appDiv = document.getElementById("app");
render(<Main />, appDiv);
