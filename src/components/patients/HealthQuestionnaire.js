import React, { useContext } from "react";
import styles from "./HealthQuestionnaire.module.css";
import { useState } from "react";
import { Context } from "../../services/Memory";
import { useEffect } from "react";

function HealthQuestionnaire({ data }) {
  const [, dispatch] = useContext(Context);
  const [isEditing, setIsEditing] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState({});

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };
  const handleSaveClick = (e) => {
    dispatch({
      type: "addHealthQuestionnaire",
      payload: {
        checkboxValues,
        data,
      },
    });
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  useEffect(() => {
    if (data === undefined || data.length === 0 || data[0] === undefined) {
      return;
    } else {
      const {
        penicilina,
        hemorragias,
        cardiaca,
        renal,
        hepatica,
        arterial,
        reumatica,
        diabetes,
        anemia,
      } = data[0];
      setCheckboxValues((prevValues) => ({
        ...prevValues,
        penicilina: penicilina || false,
        hemorragias: hemorragias || false,
        cardiaca: cardiaca || false,
        renal: renal || false,
        hepatica: hepatica || false,
        arterial: arterial || false,
        reumatica: reumatica || false,
        diabetes: diabetes || false,
        anemia: anemia || false,
      }));
    }
  }, [data]);

  return (
    <div className={styles.card}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.thead}>
            <th className={styles.rowhead}>REVISION</th>
            <th className={styles.rowhead}>SI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.row}>Alérgico a la penicilina</td>
            <td className={`${styles.row} text-center`}>
              <input
                disabled={!isEditing}
                type="checkbox"
                className={styles.checkbox}
                name="penicilina"
                checked={checkboxValues["penicilina"]}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.row}>Ha padecido hemorragias excesivas</td>
            <td className={`${styles.row} text-center`}>
              <input
                disabled={!isEditing}
                type="checkbox"
                className={styles.checkbox}
                name="hemorragias"
                checked={checkboxValues["hemorragias"]}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.row}>Enfermedad Cardiaca</td>
            <td className={`${styles.row} text-center`}>
              <input
                disabled={!isEditing}
                type="checkbox"
                className={styles.checkbox}
                name="cardiaca"
                checked={checkboxValues["cardiaca"]}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.row}>Enfermedad Renal</td>
            <td className={`${styles.row} text-center`}>
              <input
                disabled={!isEditing}
                type="checkbox"
                className={styles.checkbox}
                name="renal"
                checked={checkboxValues["renal"]}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.row}>Enfermedad Hepática</td>
            <td className={`${styles.row} text-center`}>
              <input
                disabled={!isEditing}
                type="checkbox"
                className={styles.checkbox}
                name="hepatica"
                checked={checkboxValues["hepatica"]}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.row}>Presión Arterial</td>
            <td className={`${styles.row} text-center`}>
              <input
                disabled={!isEditing}
                type="checkbox"
                className={styles.checkbox}
                name="arterial"
                checked={checkboxValues["arterial"]}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.row}>Fiebre Reumática</td>
            <td className={`${styles.row} text-center`}>
              <input
                disabled={!isEditing}
                type="checkbox"
                className={styles.checkbox}
                name="reumatica"
                checked={checkboxValues["reumatica"]}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.row}>Diabetes</td>
            <td className={`${styles.row} text-center`}>
              <input
                disabled={!isEditing}
                type="checkbox"
                className={styles.checkbox}
                name="diabetes"
                checked={checkboxValues["diabetes"]}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.row}>Anemia</td>
            <td className={`${styles.row} text-center`}>
              <input
                disabled={!isEditing}
                type="checkbox"
                className={styles.checkbox}
                name="anemia"
                checked={checkboxValues["anemia"]}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {isEditing ? (
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={handleSaveClick}
              className="button button--gray mr-5"
            >
              GUARDAR
            </button>
            <button
              onClick={handleCancelClick}
              className="button button--red ml-5"
            >
              CANCELAR
            </button>
          </div>
        ) : (
          <button
            onClick={handleEditClick}
            className="button button--gray mt-2"
          >
            EDITAR
          </button>
        )}
      </div>
    </div>
  );
}

export default HealthQuestionnaire;
