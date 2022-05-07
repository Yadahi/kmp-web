import React from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { articles } from "./ArticlesData";
import productImg from "../../images/girl.jpg";
import BreakerElement from "../BreakerIcon";
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "../Gallery";
import Cards from "../Cards";

function Article() {
  let { id } = useParams();
  let article = articles[id];
  const gallery = article.gallery;

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
            <img
              className="article__header__img-main"
              src={"../images/aboutus.png"}
            />
            <h1 className="article__header__heading">{article.title}</h1>
            <div className="article__body">
              <p>{article.text}</p>
              <BreakerElement />
              <SRLWrapper>
                <Gallery gallery={gallery} />
              </SRLWrapper>
              <BreakerElement />
            </div>
          </div>
        </div>
        <Cards />
      </div>
    </>
  );
}

export default Article;
