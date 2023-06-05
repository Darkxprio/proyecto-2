import React from "react";
import styles from "./tables.module.css";
import { useContext } from "react";
import { Context } from "../../../services/Memory";
import { useState } from "react";
import { useEffect } from "react";

function PodriatryExam({ data }) {
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
      type: "addPodiatry",
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
        hsinnucled,
        hsinnuclei,
        hsncompld,
        hsncompli,
        hconnucleod,
        hconnucleoi,
        hcncompld,
        hcncompli,
        queratodermiad,
        queratodermiai,
      } = data[0];
      setCheckboxValues((prevValues) => ({
        ...prevValues,
        hsinnucled: hsinnucled | false,
        hsinnuclei: hsinnuclei | false,
        hsncompld: hsncompld | false,
        hsncompli: hsncompli | false,
        hconnucleod: hconnucleod | false,
        hconnucleoi: hconnucleoi | false,
        hcncompld: hcncompld | false,
        hcncompli: hcncompli | false,
        queratodermiad: queratodermiad | false,
        queratodermiai: queratodermiai | false,
      }));
    }
  }, [data]);

  return (
    <div>
      <div className="flex justify-center mt-7">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.thead}>
              <th className={styles.rowhead}>Examen Podológico</th>
              <th className={styles.rowhead}>D</th>
              <th className={styles.rowhead}>I</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.row}>H Sin NUCLEO</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hsinnucled"
                  checked={checkboxValues["hsinnucled"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hsinnuclei"
                  checked={checkboxValues["hsinnuclei"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>H S N COMPL</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hsncompld"
                  checked={checkboxValues["hsncompld"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hsncompli"
                  checked={checkboxValues["hsncompli"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>H Con NUCLEO</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hconnucleod"
                  checked={checkboxValues["hconnucleod"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hconnucleoi"
                  checked={checkboxValues["hconnucleoi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>H C N COMPL:</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hcncompld"
                  checked={checkboxValues["hcncompld"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hcncompli"
                  checked={checkboxValues["hcncompli"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>QUERATODERMIA:</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="queratodermiad"
                  checked={checkboxValues["queratodermiad"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="queratodermiai"
                  checked={checkboxValues["queratodermiai"]}
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

export default PodriatryExam;
