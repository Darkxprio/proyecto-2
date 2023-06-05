import React from "react";
import styles from "./tables.module.css";
import { useContext } from "react";
import { Context } from "../../../services/Memory";
import { useState } from "react";
import { useEffect } from "react";

function OrthopodologicExam({ data }) {
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
      type: "addOrthopodologic",
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
        cuadradod,
        cuadradoi,
        egipciod,
        egipcioi,
        griegod,
        griegoi,
        normald,
        normali,
        patológicasd,
        patológicasi,
      } = data[0];
      setCheckboxValues((prevValues) => ({
        ...prevValues,
        cuadradod: cuadradod || false,
        cuadradoi: cuadradoi || false,
        egipciod: egipciod || false,
        egipcioi: egipcioi || false,
        griegod: griegod || false,
        griegoi: griegoi || false,
        normald: normald || false,
        normali: normali || false,
        patológicasd: patológicasd || false,
        patológicasi: patológicasi || false,
      }));
    }
  }, [data]);

  return (
    <div>
      <div className="flex justify-center mt-7">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.thead}>
              <th className={styles.rowhead}>Examen Ortopodológico</th>
              <th className={styles.rowhead}>D</th>
              <th className={styles.rowhead}>I</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.row}>FORMULA DIGITAL</td>
            </tr>
            <tr>
              <td className={styles.row}>Cuadrado</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="cuadradod"
                  checked={checkboxValues["cuadradod"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="cuadradoi"
                  checked={checkboxValues["cuadradoi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Egipcio</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="egipciod"
                  checked={checkboxValues["egipciod"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="egipcioi"
                  checked={checkboxValues["egipcioi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Griego</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="griegod"
                  checked={checkboxValues["griegod"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="griegoi"
                  checked={checkboxValues["griegoi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>TIPO DE MARCHA</td>
            </tr>
            <tr>
              <td className={styles.row}>Normal</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="normald"
                  checked={checkboxValues["normald"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="normali"
                  checked={checkboxValues["normali"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Patológicas</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="patológicasd"
                  checked={checkboxValues["patológicasd"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="patológicasi"
                  checked={checkboxValues["patológicasi"]}
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

export default OrthopodologicExam;
