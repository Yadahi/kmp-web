import React from "react";

import productImg from "../../images/girl.jpg";
import Card from "../Card";
import BreakerElement from "../BreakerIcon";
import { articles } from "../ProjectSection/ArticlesData";

function Projects() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--tertiary page-header--color--white">
          Projekty
        </h1>
      </div>
      <div className="layout__inner">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <BreakerElement />

      <div className="layout__inner layout__project">
        {articles.map((article) => {
          return (
            <Card
              key={article.id}
              image={productImg}
              text={article.annotation}
              path={`/projects/${article.id}`}
              title={article.title}
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;
