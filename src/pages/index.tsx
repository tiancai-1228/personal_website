/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import Navigation from "../componet/navigation";
import Home from "./home";
import About from "./about";

const index: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("HOME");
  const currentPage = () => {
    switch (currentTab) {
      case "HOME":
        return <Home />;
      case "ABOUT":
        return <Home />;
      default:
        return <Home />;
    }
  };
  return (
    <>
      {currentPage()}
      <div className={styles.Navigation}>
        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
    </>
  );
};

export default index;
