import React, { useEffect } from "react";
import styles from "./PathologicalHistory.module.css";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../services/Memory";

function PathologicalHistory({ data }) {
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
      type: "addPathology",
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
        diabetes,
        artritis,
        sida,
        piepsoriasico,
        artrosis,
        lepra,
        pieartrosico,
        cardiopata,
        hemofilia,
        piediabetico,
        piegeriatrico,
        hipertenso,
        tuberculosis,
        piesifilitico,
        pieatleta,
        epileptico,
        hepatitis,
        pieleproso,
        asma,
        sifilis,
        piesidoso,
      } = data[0];
      setCheckboxValues((prevValues) => ({
        ...prevValues,
        diabetes: diabetes || false,
        artritis: artritis || false,
        sida: sida || false,
        piepsoriasico: piepsoriasico || false,
        artrosis: artrosis || false,
        lepra: lepra || false,
        pieartrosico: pieartrosico || false,
        cardiopata: cardiopata || false,
        hemofilia: hemofilia || false,
        piediabetico: piediabetico || false,
        piegeriatrico: piegeriatrico || false,
        hipertenso: hipertenso || false,
        tuberculosis: tuberculosis || false,
        piesifilitico: piesifilitico || false,
        pieatleta: pieatleta || false,
        epileptico: epileptico || false,
        hepatitis: hepatitis || false,
        pieleproso: pieleproso || false,
        asma: asma || false,
        sifilis: sifilis || false,
        piesidoso: piesidoso || false,
      }));
    }
    console.log(data[0]);
  }, [data]);

  return (
    <div className={styles.card}>
      <h1 className="text-center mb-2">ANTECEDENTES PATOLOGICOS</h1>
      <div className="grid grid-cols-6">
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Diabetes:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="diabetes"
              checked={checkboxValues["diabetes"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Artrítis:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="artritis"
              checked={checkboxValues["artritis"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Sida:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="sida"
              checked={checkboxValues["sida"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>Pie Psoriásico:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="piepsoriasico"
              checked={checkboxValues["piepsoriasico"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Artrosis:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="artrosis"
              checked={checkboxValues["artrosis"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Lepra:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="lepra"
              checked={checkboxValues["lepra"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pie Artrósico:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="pieartrosico"
              checked={checkboxValues["pieartrosico"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>Pie de Atleta:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="pieatleta"
              checked={checkboxValues["pieatleta"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Cardiópata:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="cardiopata"
              checked={checkboxValues["cardiopata"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Hemofilia:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="hemofilia"
              checked={checkboxValues["hemofilia"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pie Diabético:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="piediabetico"
              checked={checkboxValues["piediabetico"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>Pie Geriátrico:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="piegeriatrico"
              checked={checkboxValues["piegeriatrico"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Hipertenso:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="hipertenso"
              checked={checkboxValues["hipertenso"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Tuberculosis:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="tuberculosis"
              checked={checkboxValues["tuberculosis"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pie Sifilítico:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="piesifilitico"
              checked={checkboxValues["piesifilitico"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Epiléptico:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="epileptico"
              checked={checkboxValues["epileptico"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Hepatitis:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="hepatitis"
              checked={checkboxValues["hepatitis"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pie Leproso:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="pieleproso"
              checked={checkboxValues["pieleproso"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Asma:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="asma"
              checked={checkboxValues["asma"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Sífilis:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="sifilis"
              checked={checkboxValues["sifilis"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Pie Sidoso:</h2>
            <input
              disabled={!isEditing}
              type="checkbox"
              name="piesidoso"
              checked={checkboxValues["piesidoso"]}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
          </div>
        </div>
      </div>
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

export default PathologicalHistory;
