import "./SavedArticles.css";
import React from "react";
import ArticleCardSaved from "../ArticleCard/ArticleCard.jsx";
import Header from "../Header/Header.jsx";

const SavedArticles = ({ handleDelete, articleCards }) => {
  return (
    <section>
      <Header isLoggedIn={isLoggedIn} />
      <ArticleCardSaved
        isLoggedIn={isLoggedIn}
        articleCards={articleCards}
        handleDelete={handleDelete}
      />
    </section>
  );
};
export default SavedArticles;
