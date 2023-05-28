import React from "react";
import styles from "./tables.module.css";

function NeurologicalExam() {
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
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Reflejo Rotuliano </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Anestesia</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Parestesia </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Hipoestesia </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button className="button button--gray">EDITAR</button>
      </div>
    </div>
  );
}

export default NeurologicalExam;
