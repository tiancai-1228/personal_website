/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Robby from "../image/robby.jpg";
import ArrowForwardOutline from "../image/arrow-forward-outline.svg";
import MoreButtom from "../componet/moreButtom";
import { useTranslation } from "react-i18next";

interface homeProp {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const home = ({ setCurrentTab }: homeProp) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img
              src={Robby.src}
              width="100%"
              height="100%"
              alt="robby"
              className={styles.img}
            ></img>
          </div>
          <div className={styles.about}>
            <h1 className={styles.h1}>-{t("Home_Logo")} -</h1>
            <h2 className={styles.h2}>{t("Home_title")}</h2>
            <p className={styles.text}>{t("Home_aboutMe")}</p>
            <div className={styles.moreBtn}>
              <MoreButtom
                img={ArrowForwardOutline}
                text={t("Home_moreBtn")}
                onClick={() => {
                  setCurrentTab("ABOUT");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
