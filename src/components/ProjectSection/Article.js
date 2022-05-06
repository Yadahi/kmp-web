import React from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { articles } from "./ArticlesData";

function Article() {
  let { id } = useParams();
  let article = articles[id];
  console.log(id);
  console.log(article);
  if (!articles[id]) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--red page-header--color--white">
          {article.title}
        </h1>
      </div>
      <div className="layout__inner">{article.annotation}</div>
    </>
  );
}

export default Article;
