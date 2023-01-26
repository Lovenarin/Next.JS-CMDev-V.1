import React from "react";
import styles from "../styles/alert.module.css";

export default function Aboutus() {
  return (
    <div>
      <h1>Aboutus</h1>
      <div className={styles.error}>Help Me</div>

      {/* <style jsx>
        {`
          .error {
            background-color: red;
            color: white;
          }
        `}
      </style> */}
    </div>
  );
}
