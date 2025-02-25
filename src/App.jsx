import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Site from "./site/site";
import Login from "./app/components/Login/login";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Site />} />
      <Route path="/app" element={<Login />} />
    </Routes>
  )
}
