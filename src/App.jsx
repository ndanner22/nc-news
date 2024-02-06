import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/Pages/HomePage";
import SingleArticlePage from "./Components/Pages/SingleArticlePage";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
