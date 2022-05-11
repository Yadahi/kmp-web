import React from "react";
import Card from "./Card";
import { articles } from "./ProjectSection/ArticlesData";
import { Link } from "react-router-dom";

function Cards() {
  if (!articles) {
    return null;
  }
  return (
    <div className="layout__cards">
      <h2 className="text--color--gl-white text--center margin-top-1 margin-bottom-1">
        <Link to="/projekty" className="cards__title">
          Projekty &#8594;
        </Link>
      </h2>
      <div className="layout__inner">
        <div className="cards">
          {articles.slice(0, 3).map((article) => {
            return (
              <Card
                key={article.id}
                image={article.gallery[0].image}
                text={article.text}
                path={`/projekty/${article.id}`}
                title={article.title}
                size="small"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
