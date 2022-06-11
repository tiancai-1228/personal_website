/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styles from "../styles/navigation.module.css";
import Image from "next/image";
import HomeOutline from "../image/home-outline.svg";
import BriefcaseSharp from "../image/briefcase-outline.svg";
import MailSharp from "../image/mail-outline.svg";
import PersonSharp from "../image/person-outline.svg";

interface navigationProp {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const navigation = ({ currentTab, setCurrentTab }: navigationProp) => {
  //   const [currentTab, setCurrentTab] = useState("HOME");

  return (
    <div className={styles.container}>
      <ul>
        <li
          className={currentTab === "HOME" ? styles.list_active : styles.list}
        >
          <a
            className={styles.btn}
            onClick={() => {
              setCurrentTab("HOME");
            }}
          >
            <span className={styles.text}>HOME</span>
            <span className={styles.icon}>
              <Image
                src={HomeOutline}
                height={30}
                width={30}
                alt={"home"}
              ></Image>
            </span>
          </a>
        </li>
        <li
          className={currentTab === "ABOUT" ? styles.list_active : styles.list}
        >
          <a
            className={styles.btn}
            onClick={() => {
              setCurrentTab("ABOUT");
            }}
          >
            <span className={styles.text}>ABOUT</span>
            <span className={styles.icon}>
              <Image
                src={PersonSharp}
                height={30}
                width={30}
                alt={"ABOUT"}
              ></Image>
            </span>
          </a>
        </li>
        <li
          className={
            currentTab === "PORTFOLIO" ? styles.list_active : styles.list
          }
        >
          <a
            className={styles.btn}
            onClick={() => {
              setCurrentTab("PORTFOLIO");
            }}
          >
            <span className={styles.text}>PORTFOLIO</span>
            <span className={styles.icon}>
              <Image
                src={BriefcaseSharp}
                height={25}
                width={25}
                alt={"PORTFOLIO"}
              ></Image>
            </span>
          </a>
        </li>
        <li
          className={
            currentTab === "CONTACT" ? styles.list_active : styles.list
          }
        >
          <a
            className={styles.btn}
            onClick={() => {
              setCurrentTab("CONTACT");
            }}
          >
            <span className={styles.text}>CONTACT</span>
            <span className={styles.icon}>
              <Image
                src={MailSharp}
                height={30}
                width={30}
                alt={"CONTACT"}
              ></Image>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default navigation;
