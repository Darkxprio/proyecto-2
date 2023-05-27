import React from "react";
import styles from "./tables.module.css";

function Dactyloplasties() {
  return (
    <div>
      <div className="flex justify-center mt-7">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.thead}>
              <th className={styles.rowhead}>Dactiloplastias</th>
              <th className={styles.rowhead}>D</th>
              <th className={styles.rowhead}>I</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.row}>Sindacfilia </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Polidactilia</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Dedo en Garra</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Dedo en Martillo</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Dedo en Maso </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Espolón Calcáneo</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Exostosis Post Superior </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Exostosis Post Inferior</td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
              <td className={styles.row}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className={styles.row}>Quinto dedo Varo </td>
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

export default Dactyloplasties;
