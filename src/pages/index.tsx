/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import Navigation from "../componet/navigation";
import Home from "./home";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

const index: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("PORTFOLIO");
  const currentPage = () => {
    switch (currentTab) {
      case "HOME":
        return <Home />;
      case "ABOUT":
        return <About />;
      case "PORTFOLIO":
        return <Portfolio />;
      case "CONTACT":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div className={styles.container}>
      {currentPage()}
      <div className={styles.Navigation}>
        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
    </div>
  );
};

export default index;
