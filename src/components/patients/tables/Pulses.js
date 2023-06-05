import React, { useEffect } from "react";
import styles from "./tables.module.css";
import { useContext } from "react";
import { Context } from "../../../services/Memory";
import { useState } from "react";

function Pulses({ data }) {
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
      type: "addPulses",
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
      const { pediod, pedioi, tibialpostd, tibialposti, popliteod, popliteoi } =
        data[0];

      setCheckboxValues((prevValues) => ({
        ...prevValues,
        pediod: pediod || false,
        pedioi: pedioi || false,
        tibialpostd: tibialpostd || false,
        tibialposti: tibialposti || false,
        popliteod: popliteod || false,
        popliteoi: popliteoi || false,
      }));
    }
  }, [data]);

  return (
    <div>
      <div className="flex justify-center mt-7">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.thead}>
              <th className={styles.rowhead}>Pulsos</th>
              <th className={styles.rowhead}>D</th>
              <th className={styles.rowhead}>I</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.row}>Pedio</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="pediod"
                  checked={checkboxValues["pediod"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="pedioi"
                  checked={checkboxValues["pedioi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Tibial posterior</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="tibialpostd"
                  checked={checkboxValues["tibialpostd"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="tibialposti"
                  checked={checkboxValues["tibialposti"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Poplíteo</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="popliteod"
                  checked={checkboxValues["popliteod"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="popliteoi"
                  checked={checkboxValues["popliteoi"]}
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

export default Pulses;
