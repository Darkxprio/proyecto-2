import React from "react";
import styles from "./AddDatesError.module.css";

function AddDatesError({ onClose }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className={styles.container}>
      <h3>No se puede procesar, falta llenar datos.</h3>
      <div className="flex flex-row-reverse mt-2">
        <button className={styles.button} onClick={handleClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default AddDatesError;
