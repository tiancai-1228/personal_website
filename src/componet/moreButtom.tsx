import React from "react";
import styles from "../styles/moreButtom.module.css";
import Image from "next/image";

interface moreButtomProp {
  text: string;
  img: string;
  onClick?: () => void;
}

const moreButtom = ({ text, img, onClick }: moreButtomProp) => {
  return (
    <a className={styles.more} onClick={onClick}>
      <p>{text}</p>
      <span className={styles.moreIcon}>
        <Image src={img} height={30} width={30} alt={"home"}></Image>
      </span>
    </a>
  );
};

export default moreButtom;
