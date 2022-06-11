/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Robby from "../image/robby.jpg";
import Image from "next/image";
import ArrowForwardOutline from "../image/arrow-forward-outline.svg";

const home: NextPage = () => {
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
            <h1 className={styles.h1}>- Robby Hong -</h1>
            <h2 className={styles.h2}>Web Designer</h2>
            <p className={styles.text}>
              i m a shoalter web designer front‑end developer focused on
              crafting clean user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <div className={styles.more}>
              <p>More About Me</p>
              <span className={styles.moreIcon}>
                <Image
                  src={ArrowForwardOutline}
                  height={30}
                  width={30}
                  alt={"home"}
                ></Image>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
