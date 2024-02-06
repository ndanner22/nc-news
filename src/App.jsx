import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
