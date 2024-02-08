import { Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/Pages/HomePage";
import SingleArticlePage from "./Components/Pages/SingleArticlePage";
import { UserContext, UserProvider } from "./Components/Contexts/UserContext";
import ChangeUser from "./Components/Pages/ChangeUser";

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
      </Routes>
    </div>
  );
}

export default App;
