import { Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/Pages/HomePage";
import SingleArticlePage from "./Components/Pages/SingleArticlePage";
import { UserContext, UserProvider } from "./Components/Contexts/UserContext";
import ChangeUser from "./Components/Pages/ChangeUser";
import CodingPage from "./Components/Pages/CodingPage";
import CookingPage from "./Components/Pages/CookingPage";
import FootballPage from "./Components/Pages/FootballPage";

function App() {
  const value = useContext(UserContext);

  return (
    <div className="App">
      <Header value={value} />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
        <Route path="/change-user" element={<ChangeUser />} />
        <Route path="/articles/coding" element={<CodingPage />} />
        <Route path="/articles/cooking" element={<CookingPage />} />
        <Route path="/articles/football" element={<FootballPage />} />
      </Routes>
    </div>
  );
}

export default App;
