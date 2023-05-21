import React from 'react';
import styles from './UseError.module.css';

function UserError({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.container}>
      <h3>Usuario o Contraseña incorrectos.</h3>
      <div className="flex flex-row-reverse mt-2">
        <button className={styles.button} onClick={handleClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default UserError;
