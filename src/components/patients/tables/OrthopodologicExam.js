import React from "react";
import styles from "./tables.module.css";

function OrthopodologicExam() {
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
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Cuadrado</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Egipcio</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Griego</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>TIPO DE MARCHA</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Normal</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Patológicas</td>
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

export default OrthopodologicExam;