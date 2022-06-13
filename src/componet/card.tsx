import React from "react";
import styles from "../styles/card.module.css";
import Image, { StaticImageData } from "next/image";

interface cardProp {
  img: string;
  title: string;
  text: string;
  Stack: string;
  Visit?: string;
  SourceCode?: string;
  onClick?: () => void;
}

const card = ({
  img,
  title,
  text,
  Stack,
  Visit,
  SourceCode,
  onClick,
}: cardProp) => {
  return (
    <>
      <div className={styles.card} onClick={onClick}>
        <div className={styles.header}>
          <div
            className={styles.header_img}
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        </div>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{text}</p>
          <span>{Stack}</span>
        </div>
        <div className={styles.footer}>
          {SourceCode && (
            <a
              className={styles.btn}
              href={SourceCode}
              target="_blank"
              rel="noreferrer"
            >
              <span>SourceCode</span>
              <div className={styles.box}></div>
            </a>
          )}
          {Visit && (
            <a
              className={styles.btn}
              href={Visit}
              target="_blank"
              rel="noreferrer"
            >
              <span>Visit</span>
              <div className={styles.box}></div>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default card;
