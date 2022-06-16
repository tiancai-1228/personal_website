/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import styles from "../styles/portfolio.module.css";
import Card from "../componet/card";
import Portfolio from "../projectData/portfolio";
import { useTranslation } from "react-i18next";

const portfolio = () => {
  const { t } = useTranslation();
  const project = () => {
    return Portfolio.map((el: any, index: number) => (
      <div key={index} className={styles.project}>
        <Card
          img={el.img}
          SourceCode={el.SourceCode}
          title={el.title}
          text={el.text}
          Stack={el.Stack}
          Visit={el.Visit}
        />
      </div>
    ));
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            {t("portfolio_MY")} <span> {t("portfolio_PORTFOLIO")} </span>
          </h1>
        </div>
        <div className={styles.content}>{project()}</div>
      </div>
    </>
  );
};

export default portfolio;
