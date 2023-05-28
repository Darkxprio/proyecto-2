import React from "react";
import styles from "./PathologicalHistory.module.css";

function PathologicalHistory() {
  return (
    <div className={styles.card}>
      <h1 className="text-center mb-2">ANTECEDENTES PATOLOGICOS</h1>
      <div className="grid grid-cols-6">
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Diabetes:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Artrítis:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Sida:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>Pie Psoriásico:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Tipo:</h2>
            <input type="text" className={styles.input} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Artrosis:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Lepra:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>Pie Artrósico:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Cardiópata:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Hemofilia:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pie Diabético:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>Pie Geriátrico:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Hipertenso:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Tuberculosis:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pie Sifilítico:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>Pie de Atleta:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Epiléptico:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Hepatitis:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pie Leproso:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>TA:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Asma:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Sífilis:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pie Sidoso:</h2>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="button button--gray">EDITAR</button>
      </div>
    </div>
  );
}

export default PathologicalHistory;
