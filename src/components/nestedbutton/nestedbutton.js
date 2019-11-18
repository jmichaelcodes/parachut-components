import React from "react";
import PropTypes from "prop-types";

import styles from "./nestedbutton.css";

export default function NestedButton() {
  return (
    <div className={styles.ovalButtonContainer}>
      <button className={styles.ovalButtonButton}>qqq</button>
      <div className={styles.ovalButtonCircle} />
    </div>
  )
}