import React, { useContext, useState } from "react";
import styles from "./tables.module.css";
import { Context } from "../../../services/Memory";
import { useEffect } from "react";

function DermatolgicalExam({ data }) {
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
      type: "addDermatological",
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
        anhodrosisd,
        anhodrosisi,
        hiperhidrosisd,
        hiperhidrosisi,
        bromhidrosisd,
        bromhidrosisi,
        epidromofitosisd,
        epidromofitosisi,
        ulcerasd,
        ulcerasi,
        grietasd,
        grietasi,
        onicomicosisd,
        onicomicosisi,
        onicogrifosisd,
        onicogrifosisi,
        onicocriptosisd,
        onicocriptosisi,
        verrugaplantard,
        verrugaplantari,
        nevosd,
        nevosi,
        lepsd,
        lepsi,
      } = data[0];
      setCheckboxValues((prevValues) => ({
        ...prevValues,
        anhodrosisd: anhodrosisd || false,
        anhodrosisi: anhodrosisi || false,
        hiperhidrosisd: hiperhidrosisd || false,
        hiperhidrosisi: hiperhidrosisi || false,
        bromhidrosisd: bromhidrosisd || false,
        bromhidrosisi: bromhidrosisi || false,
        epidromofitosisd: epidromofitosisd || false,
        epidromofitosisi: epidromofitosisi || false,
        ulcerasd: ulcerasd || false,
        ulcerasi: ulcerasi || false,
        grietasd: grietasd || false,
        grietasi: grietasi || false,
        onicomicosisd: onicomicosisd || false,
        onicomicosisi: onicomicosisi || false,
        onicogrifosisd: onicogrifosisd || false,
        onicogrifosisi: onicogrifosisi || false,
        onicocriptosisd: onicocriptosisd || false,
        onicocriptosisi: onicocriptosisi || false,
        verrugaplantard: verrugaplantard || false,
        verrugaplantari: verrugaplantari || false,
        nevosd: nevosd || false,
        nevosi: nevosi || false,
        lepsd: lepsd || false,
        lepsi: lepsi || false,
      }));
    }
    console.log(data[0]);
  }, [data]);

  return (
    <div>
      <div className="flex justify-center mt-7">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.thead}>
              <th className={styles.rowhead}>Examen Dermatol</th>
              <th className={styles.rowhead}>D</th>
              <th className={styles.rowhead}>I</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.row}>Anhidrosis</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="anhodrosisd"
                  checked={checkboxValues["anhodrosisd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="anhodrosisi"
                  checked={checkboxValues["anhodrosisi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Hiperhidrosis</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hiperhidrosisd"
                  checked={checkboxValues["hiperhidrosisd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="hiperhidrosisi"
                  checked={checkboxValues["hiperhidrosisi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Bromhidrosis</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="bromhidrosisd"
                  checked={checkboxValues["bromhidrosisd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="bromhidrosisi"
                  checked={checkboxValues["bromhidrosisi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Epidromofitosis</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="epidromofitosisd"
                  checked={checkboxValues["epidromofitosisd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="epidromofitosisi"
                  checked={checkboxValues["epidromofitosisi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Ulceras</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="ulcerasd"
                  checked={checkboxValues["ulcerasd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="ulcerasi"
                  checked={checkboxValues["ulcerasi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Grietas</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="grietasd"
                  checked={checkboxValues["grietasd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="grietasi"
                  checked={checkboxValues["grietasi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>ONICOPATIAS</td>
            </tr>
            <tr>
              <td className={styles.row}>Onicomicosis</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="onicomicosisd"
                  checked={checkboxValues["onicomicosisd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="onicomicosisi"
                  checked={checkboxValues["onicomicosisi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Onicogrifosis</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="onicogrifosisd"
                  checked={checkboxValues["onicogrifosisd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="onicogrifosisi"
                  checked={checkboxValues["onicogrifosisi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Onicocriptosis</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="onicocriptosisd"
                  checked={checkboxValues["onicocriptosisd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="onicocriptosisi"
                  checked={checkboxValues["onicocriptosisi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Verruga plantar</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="verrugaplantard"
                  checked={checkboxValues["verrugaplantard"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="verrugaplantari"
                  checked={checkboxValues["verrugaplantari"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>NEVOS</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="nevosd"
                  checked={checkboxValues["nevosd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="nevosi"
                  checked={checkboxValues["nevosi"]}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>LEPS</td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="lepsd"
                  checked={checkboxValues["lepsd"]}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className={styles.row}>
                <input
                  disabled={!isEditing}
                  type="checkbox"
                  name="lepsi"
                  checked={checkboxValues["lepsi"]}
                  onChange={handleCheckboxChange}
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

export default DermatolgicalExam;
