import React, { useEffect } from "react";
import styles from "./tables.module.css";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../../services/Memory";

function DentalExamTable({ data, selectedTooth, updateSelectedTooth }) {
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
    const itemsWithValues = selectedTooth.map((item) => ({
      item,
      values: {
        mesial: checkboxValues[`${item}mesial`],
        distal: checkboxValues[`${item}distal`],
        vestibular: checkboxValues[`${item}vestibular`],
        palatino: checkboxValues[`${item}palatino`],
        oclusal: checkboxValues[`${item}oclusal`],
        lingual: checkboxValues[`${item}lingual`],
      },
    }));

    dispatch({
      type: "addDentalExam",
      payload: {
        items: itemsWithValues,
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

  const handleDelete = (itemToDelete) => {
    const newSelectedTooth = selectedTooth.filter(
      (item) => item !== itemToDelete
    );
    updateSelectedTooth(newSelectedTooth);
  };

  useEffect(() => {
    const initialCheckboxValues = {};

    for (const key in data[0]) {
      if (typeof data[0][key] === "object" && data[0][key] !== null) {
        const checkboxValues = data[0][key];
        for (const checkboxKey in checkboxValues) {
          const name = `${key}${checkboxKey}`;
          initialCheckboxValues[name] = checkboxValues[checkboxKey];
        }
      }
    }
    setCheckboxValues(initialCheckboxValues);
  }, [data]);

  return (
    <div className="mt-5">
      <table className={`${styles.table} w-full`}>
        <thead>
          <tr className={styles.rowhead}>
            <th className={styles.thead}>PIEZA</th>
            <th className={styles.thead}>POSICION DENTAL</th>
            <th className={styles.thead}>ACCION</th>
          </tr>
        </thead>
        <tbody>
          {selectedTooth.map((item) => {
            return (
              <tr key={item}>
                <td className={`${styles.row} text-center`}>{item}</td>
                <td className={styles.row}>
                  <div className="grid grid-cols-3">
                    <div className="flex items-center w-32 justify-between">
                      <h5 className={styles.h5}>Mesial:</h5>
                      <input
                        disabled={!isEditing}
                        type="checkbox"
                        name={`${item}mesial`}
                        checked={checkboxValues[`${item}mesial`]}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                      />
                    </div>
                    <div className="flex items-center w-32 justify-between">
                      <h5 className={styles.h5}>Distal:</h5>
                      <input
                        disabled={!isEditing}
                        type="checkbox"
                        name={`${item}distal`}
                        checked={checkboxValues[`${item}distal`]}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                      />
                    </div>
                    <div className="flex items-center w-32 justify-between">
                      <h5 className={styles.h5}>Vestibular:</h5>
                      <input
                        disabled={!isEditing}
                        type="checkbox"
                        name={`${item}vestibular`}
                        checked={checkboxValues[`${item}vestibular`]}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                      />
                    </div>
                    <div className="flex items-center w-32 justify-between">
                      <h5 className={styles.h5}>Palatino:</h5>
                      <input
                        disabled={!isEditing}
                        type="checkbox"
                        name={`${item}palatino`}
                        checked={checkboxValues[`${item}palatino`]}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                      />
                    </div>
                    <div className="flex items-center w-32 justify-between">
                      <h5 className={styles.h5}>Oclusal:</h5>
                      <input
                        disabled={!isEditing}
                        type="checkbox"
                        name={`${item}oclusal`}
                        checked={checkboxValues[`${item}oclusal`]}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                      />
                    </div>
                    <div className="flex items-center w-32 justify-between">
                      <h5 className={styles.h5}>Lingual:</h5>
                      <input
                        disabled={!isEditing}
                        type="checkbox"
                        name={`${item}lingual`}
                        checked={checkboxValues[`${item}lingual`]}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                      />
                    </div>
                  </div>
                </td>
                <td className={`${styles.row} text-center`}>
                  <button onClick={() => handleDelete(item)}>
                    <i
                      className={`${styles.buttondelete} fa-solid fa-trash `}
                    ></i>
                  </button>
                </td>
              </tr>
            );
          })}
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

export default DentalExamTable;
