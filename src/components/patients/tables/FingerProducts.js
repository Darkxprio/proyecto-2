import React, { useContext, useState } from "react";
import styles from "./tables.module.css";
import { Context } from "../../../services/Memory";
import { useEffect } from "react";

function FingerProducts({ data }) {
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
      type: "addFingers",
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
        infraductusd,
        infraductusi,
        halluxvalgusd,
        halluxvalgusi,
        halluxvarusd,
        halluxvarusi,
        halluxsaparatusd,
        halluxsaparatusi,
        halluxrigidusd,
        halluxrigidusi,
        halluxflexusd,
        halluxflexusi,
      } = data[0];
      setCheckboxValues((prevValues) => ({
        ...prevValues,
        infraductusd: infraductusd || false,
        infraductusi: infraductusi || false,
        halluxvalgusd: halluxvalgusd || false,
        halluxvalgusi: halluxvalgusi || false,
        halluxvarusd: halluxvarusd || false,
        halluxvarusi: halluxvarusi || false,
        halluxsaparatusd: halluxsaparatusd || false,
        halluxsaparatusi: halluxsaparatusi || false,
        halluxrigidusd: halluxrigidusd || false,
        halluxrigidusi: halluxrigidusi || false,
        halluxflexusd: halluxflexusd || false,
        halluxflexusi: halluxflexusi || false,
      }));
    }
    console.log(data);
  }, [data]);

  return (
    <div>
      <div className="flex justify-center mt-7">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.thead}>
              <th className={styles.rowhead}>DEDO SUPRADUCTOS</th>
              <th className={styles.rowhead}>D</th>
              <th className={styles.rowhead}>I</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.row}>Dedo infraductus</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="infraductusd"
                  checked={checkboxValues["infraductusd"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="infraductusi"
                  checked={checkboxValues["infraductusi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Hallux Valgus</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxvalgusd"
                  checked={checkboxValues["halluxvalgusd"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxvalgusi"
                  checked={checkboxValues["halluxvalgusi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Hallux Varus</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxvarusd"
                  checked={checkboxValues["halluxvarusd"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxvarusi"
                  checked={checkboxValues["halluxvarusi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Hallux Saparatus</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxsaparatusd"
                  checked={checkboxValues["halluxsaparatusd"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxsaparatusi"
                  checked={checkboxValues["halluxsaparatusi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Hallux Rigidus</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxrigidusd"
                  checked={checkboxValues["halluxrigidusd"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxrigidusi"
                  checked={checkboxValues["halluxrigidusi"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Hallux Flexus</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxflexusd"
                  checked={checkboxValues["halluxflexusd"]}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="halluxflexusi"
                  checked={checkboxValues["halluxflexusi"]}
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

export default FingerProducts;
