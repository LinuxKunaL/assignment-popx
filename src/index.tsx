import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Welcome from "./components/Welcome";
import CreateAccount from "./components/CreateAccount";
import Profile from "./components/Profile";

import "./index.css";
import "./assets/style.css";
import SignIn from "./components/SignIn";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className="border-2 w-[30pc] h-full bg-[#f7f8f9]">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </div>
);
