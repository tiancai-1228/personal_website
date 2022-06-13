import React from "react";
import styles from "../styles/box.module.css";
const box = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.Front}>HTML</div>
        <div className={styles.Back}>GIT</div>
        <div className={styles.Left}>JavaScript </div>
        <div className={styles.Right}>TypeScript</div>
        <div className={styles.Top}>React.js</div>
        <div className={styles.Bottom}>CSS</div>
      </div>
    </div>
  );
};

export default box;
