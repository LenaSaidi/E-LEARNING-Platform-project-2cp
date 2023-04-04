import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./landing page/Main";
import Teacherhome from "./teacher/Teacherhome";
import SigninPage from "./signin page/Main";
import Teacherannounce from "./teacher/Teacherannounce";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={< Teacherannounce/>}></Route>
        <Route path={"/Teacher"} element={<Teacherhome />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
