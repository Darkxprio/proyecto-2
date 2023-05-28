import React from "react";
import styles from "./Treatment.module.css";

function Treatment() {
  return (
    <div className={styles.card}>
      <h1 className="text-center mb-2">TRATAMIENTO</h1>
      <div className="flex items-center mb-1 justify-between">
        <h2 className={styles.h2}>Indicaciones:</h2>
        <textarea className={`${styles.input} resize-none`}></textarea>
      </div>
      <div className="flex justify-center mt-4">
        <button className="button button--gray">EDITAR</button>
      </div>
    </div>
  );
}

export default Treatment;
