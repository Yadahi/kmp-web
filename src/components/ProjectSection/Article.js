import React from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { articles } from "./ArticlesData";
import productImg from "../../images/girl.jpg";
import BreakerElement from "../BreakerIcon";

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
        <div className="layout__inner">
          <div className="layout__article article">
            <img className="article__header__img-main" src={productImg} />
            <img className="article__header__img-side" src={productImg} />
            <h1 className="article__header__heading">{article.title}</h1>
            <div className="article__header__annotation">
              <p>{article.annotation}</p>
            </div>

            <div className="article__body">
              <BreakerElement />
              <p>{article.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
