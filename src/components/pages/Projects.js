import React from "react";

import productImg from "../../images/girl.jpg";
import Card from "../Card";
import BreakerElement from "../objects/BreakerIcon";
import { articles } from "../ProjectSection/ArticlesData";

function Projects() {
  return (
    <>
      <div className="layout">
        <h1 className="h1 page-header page-header--bg-color--tertiary page-header--color--gl-white">
          Projekty
        </h1>
        <div className="layout__inner">
          <p>
            Naša komunita je rôznorodá a rada sa venuje rozmanitým veciam, a
            také sú i naše projekty. Prirodzene sa snažíme prepájať projekty pre
            ľudí s činnosťami, ktoré sú nám srdce blízke, preto sa venujú
            športu, sociálnym témam, prírode či kultúre. Niektoré projekty časom
            zanikajú, aby dali priestor iným, niektoré sa darí pravidelne
            udržiavať a rozvíjať. Budeme radi, ak sa do nich zapojíš aj ty (tu
            by som dal odkaz na zapoj sa), akoukoľvek formou.
          </p>
        </div>
        <BreakerElement />

        <div className="layout__inner layout__project">
          {articles.map((article) => {
            return (
              <Card
                key={article.id}
                image={productImg}
                text={article.text}
                path={`/projekty/${article.id}`}
                title={article.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
