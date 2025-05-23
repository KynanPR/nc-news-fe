import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AllArticles from "./components/AllArticles";
import ViewArticle from "./components/ViewArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<ViewArticle />} />
      </Routes>
    </>
  );
}

export default App;
