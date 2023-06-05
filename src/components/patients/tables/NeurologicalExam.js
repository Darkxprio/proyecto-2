import React from "react";
import styles from "./tables.module.css";
import { useContext } from "react";
import { Context } from "../../../services/Memory";
import { useState } from "react";
import { useEffect } from "react";

function NeurologicalExam({ data }) {
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
      type: "addNeurological",
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
        reflaquileanod,
        reflaquileanoi,
        reflrotulianod,
        reflrotulianoi,
        anestesiad,
        anestesiai,
        parestesiad,
        parestesiai,
        hipoestesiad,
        hipoestesiai,
      } = data[0];
      setCheckboxValues((prevValues) => ({
        ...prevValues,
        reflaquileanod: reflaquileanod || false,
        reflaquileanoi: reflaquileanoi || false,
        reflrotulianod: reflrotulianod || false,
        reflrotulianoi: reflrotulianoi || false,
        anestesiad: anestesiad || false,
        anestesiai: anestesiai || false,
        parestesiad: parestesiad || false,
        parestesiai: parestesiai || false,
        hipoestesiad: hipoestesiad || false,
        hipoestesiai: hipoestesiai || false,
      }));
    }
  }, [data]);

  return (
    <div>
      <div className="flex justify-center mt-7">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.thead}>
              <th className={styles.rowhead}>Examen Neurologico</th>
              <th className={styles.rowhead}>D</th>
              <th className={styles.rowhead}>I</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.row}>Reflejo Aquileano</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="reflaquileanod"
                  checked={checkboxValues["reflaquileanod"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="reflaquileanoi"
                  checked={checkboxValues["reflaquileanoi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Reflejo Rotuliano </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="reflrotulianod"
                  checked={checkboxValues["reflrotulianod"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="reflrotulianoi"
                  checked={checkboxValues["reflrotulianoi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Anestesia</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="anestesiad"
                  checked={checkboxValues["anestesiad"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="anestesiai"
                  checked={checkboxValues["anestesiai"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Parestesia </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="parestesiad"
                  checked={checkboxValues["parestesiad"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="parestesiai"
                  checked={checkboxValues["parestesiai"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Hipoestesia </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hipoestesiad"
                  checked={checkboxValues["hipoestesiad"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hipoestesiai"
                  checked={checkboxValues["hipoestesiai"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
          </tbody>
        </table>
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

export default NeurologicalExam;
