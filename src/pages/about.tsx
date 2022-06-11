import React from "react";
import styles from "../styles/Home.module.css";
import Robby from "../image/robby.jpg";

const about = () => {
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
            <h1 className={styles.h1}>- 123 -</h1>
            <h2 className={styles.h2}>Web Designer</h2>
            <p className={styles.text}>
              i m a Tunisian based web designer front‑end developer focused on
              crafting clean user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
