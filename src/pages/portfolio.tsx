import React from "react";
import styles from "../styles/portfolio.module.css";
import Card from "../componet/card";
import Aprd from "../image/aprd.png";
import Ecomart from "../image/ecomart.png";
const portfolio = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            MY <span>PORTFOLIO</span>
          </h1>
        </div>
        <div className={styles.content}>
          <Card
            img={Aprd}
            SourceCode={""}
            title={"APRD CMS-Category"}
            text={
              "公司專案APRD後台CMS Category部分，負責管理與顯示前台app商品不同層級的類別，與每個類別有多少商品 。"
            }
            Stack={
              "所用技術 : Gatsby js | React.js | Storybook | Antd | TailwindCSS | Typescript |Redux toolkit +Redux Saga"
            }
            Visit={""}
          />
        </div>
      </div>
    </>
  );
};

export default portfolio;
