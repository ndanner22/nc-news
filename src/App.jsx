import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
