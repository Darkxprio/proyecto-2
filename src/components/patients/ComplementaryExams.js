import React from "react";
import styles from "./ComplementaryExams.module.css";

function ComplementaryExams() {
  return (
    <div className={styles.card}>
      <h1 className="text-center mb-2">EXAMEN COMPLEMENTARIO</h1>
      <div className="grid grid-cols-5">
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pedigrafía:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Bacteriológico:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Hemograma:</h2>
            <input className={styles.input} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Podoscopía:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Antibiograma:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Coagulación:</h2>
            <input className={styles.input} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Oscilometría:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Radiológico:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Anastasia:</h2>
            <input className={styles.input} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pletismografía:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Roetngnograma:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Examen de marcha:</h2>
            <input className={styles.input} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Micológico:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Glucemia:</h2>
            <input className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Otros:</h2>
            <input className={styles.input} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-1">
        <button className="button button--gray">EDITAR</button>
      </div>
    </div>
  );
}

export default ComplementaryExams;
