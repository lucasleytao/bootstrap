import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Site from "./site/site";
import Login from "./app/components/Login/login";
import Signup from "./app/components/Signup/signup";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Site />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
