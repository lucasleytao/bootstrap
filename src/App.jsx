import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Site from "./site/site";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Site />}>
      </Route>
    </Routes>
  )
}
