import React from "react";
import styles from "./UpdateError.module.css";

function UpdateError({ onClose }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className={styles.container}>
      <h3>Confirme el horario por favor.</h3>
      <div className="flex flex-row-reverse mt-2">
        <button className={styles.button} onClick={handleClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default UpdateError;
