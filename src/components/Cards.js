import React from "react";
import Card from "./Card";
import { articles } from "./ProjectSection/ArticlesData";

function Cards() {
  if (!articles) {
    return null;
  }
  return (
    <div className="layout__cards">
      {/* TODO align center heading */}
      <h3 className="text--color--white text--center margin-top-1 margin-bottom-1">
        Projekty
      </h3>
      <div className="layout__inner">
        <div className="cards">
          {articles.slice(0, 3).map((article) => {
            return (
              <Card
                key={article.id}
                image={article.image}
                text={article.text}
                path={`/projects/${article.id}`}
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
