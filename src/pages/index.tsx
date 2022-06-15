/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import CheckBox from "../componet/checkBox";
import Navigation from "../componet/navigation";
import Home from "./home";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

const index: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("HOME");
  const [isChecked, setIsChecked] = useState(false);
  const currentPage = () => {
    switch (currentTab) {
      case "HOME":
        return <Home setCurrentTab={setCurrentTab} />;
      case "ABOUT":
        return <About />;
      case "PORTFOLIO":
        return <Portfolio />;
      case "CONTACT":
        return <Contact />;
      default:
        return <Home setCurrentTab={setCurrentTab} />;
    }
  };
  return (
    <>
      <div className={styles.container}>
        {currentPage()}
        <div className={styles.CheckBox}>
          <span
            style={
              !isChecked
                ? {
                    textShadow: "2px 2px 4px pink",
                    color: "#ffb400",
                  }
                : {}
            }
          >
            中文
          </span>
          <CheckBox
            isChecked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span
            style={
              isChecked
                ? {
                    textShadow: "2px 2px 4px pink",
                    color: "#ffb400",
                  }
                : {}
            }
          >
            EN
          </span>
        </div>
        <div className={styles.Navigation}>
          <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
      </div>
    </>
  );
};

export default index;
