import React from "react";
import styles from "./tables.module.css";

function PodriatryExam() {
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
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>H S N COMPL</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>H Con NUCLEO</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>H C N COMPL:</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>QUERATODERMIA:</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>
                OTRAS <input />
              </td>
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

export default PodriatryExam;
