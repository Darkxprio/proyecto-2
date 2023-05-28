import React from "react";
import styles from "./PersonalInformation.module.css";

function PersonalInformation() {
  return (
    <div className={styles.card}>
      <h1 className="text-center mb-2">INFORMACION PERSONAL</h1>
      <div className="grid grid-cols-2">
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Nombre:</h2>
            <input className={styles.input1} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Edad:</h2>
            <input className={styles.input1} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Sexo:</h2>
            <input className={styles.input1} />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>Teléfono:</h2>
            <input className={styles.input1} />
          </div>
        </div>
        <div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Dirección:</h2>
            <input className={styles.input2} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Peso:</h2>
            <input className={styles.input2} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Talla:</h2>
            <input className={styles.input2} />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>G.Sanguineo:</h2>
            <input className={styles.input2} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="button button--gray">EDITAR</button>
      </div>
    </div>
  );
}

export default PersonalInformation;
