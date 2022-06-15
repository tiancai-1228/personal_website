/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styles from "../styles/checkBox.module.css";

interface checkBoxProp {
  isChecked: boolean;
  onClick?: () => void;
}

const checkBox = ({ isChecked, onClick }: checkBoxProp) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" checked={isChecked} onClick={onClick} />
      <span></span>
    </div>
  );
};

export default checkBox;
