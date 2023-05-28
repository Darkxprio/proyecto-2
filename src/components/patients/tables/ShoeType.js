import React from "react";
import styles from "./tables.module.css";

function ShoeType() {
  return (
    <div>
      <div className="flex justify-center mt-7">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.thead}>
              <th className={styles.rowhead}>Tipo de Calzado</th>
              <th className={styles.rowhead}>D</th>
              <th className={styles.rowhead}>I</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.row}>Deportivo </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Alto</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Estrecho</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Punta Fina</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Botas</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Sandalias</td>
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

export default ShoeType;
