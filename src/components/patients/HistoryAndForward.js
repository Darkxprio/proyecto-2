import React, { useEffect, useState } from "react";
import styles from "./HistoryAndForward.module.css";
import Url3 from "../Url3";

function HistoryAndForward({ data }) {
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <div className="flex justify-center mt-7 mx-10">
      <table>
        <thead>
          <tr>
            <th className={styles.rowhead}>ESPECIALIDAD</th>
            <th className={styles.rowhead}>PROFESIONAL</th>
            <th className={styles.rowhead}>ATENCION</th>
            <th className={styles.rowhead}>FECHA</th>
            <th className={styles.rowhead}>HORARIO</th>
            <th className={styles.rowhead}>TRATAMIENTO</th>
            <th className={styles.rowhead}>PRESCRIPCION</th>
            <th className={styles.rowhead}>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            let rowClass;

            if (item.available === "Pendiente") {
              rowClass = styles.yellowrow;
            } else if (item.available === "Asistió") {
              rowClass = styles.greenrow;
            } else {
              rowClass = styles.redrow;
            }
            return (
              <tr key={index} className={rowClass}>
                <td className={styles.row}>{item.speciality}</td>
                <td className={styles.row}>{item.professional}</td>
                <td className={styles.row}>{item.atention}</td>
                <td className={styles.row}>{item.date}</td>
                <td className={styles.row}>EN PROCESO</td>
                <td className={`${styles.row} text-sm`}>{item.treatment}</td>
                <td className={`${styles.row} text-sm`}>{item.prescription}</td>
                <td className={`${styles.row} text-center`}>
                  <Url3
                    to={`/patient/${item.id}/${item.atention}/${item.date}`}
                    disabled={item.available !== "Asistió"}
                  >
                    <button disabled={item.available !== "Asistió"}>
                      <i
                        className={`${styles.buttonedit} fa-regular fa-pen-to-square`}
                      ></i>
                    </button>
                  </Url3>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryAndForward;
