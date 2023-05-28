import React from "react";
import styles from "./FootDraw.module.css";

function FootDraw() {
  return (
    <div className={styles.card}>
      <h1 className="text-center mb-2">IMAGEN DE PIESITOS</h1>
      <div className="flex justify-center mt-4">
        <button className="button button--gray">EDITAR</button>
      </div>
      <h1 className="text-center mb-2">MAPA DE LESIONES</h1>
      <div className="grid grid-cols-5">
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>HSP:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Onicocriptosis:</h2>
            <input className={styles.input} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>CC:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Onicomicosis:</h2>
            <input className={styles.input} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Tilosis:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Onicogrifosis:</h2>
            <input className={styles.input} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Tilomas:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Ulceras:</h2>
            <input className={styles.input} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Helomas:</h2>
            <input className={styles.input} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="button button--gray">EDITAR</button>
      </div>
    </div>
  );
}

export default FootDraw;
