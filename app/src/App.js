import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Articles from "./pages/Articles";
import Header from "./components/Header";
import SingleArticle from "./pages/SingleArticle";

function App() {
  return (
    <div className="App">
      YOOOOO
      <Header />
      <Router>
        <Articles path="/" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
