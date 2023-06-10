import { useEffect, useState } from "react";
import styles from "./TableDates.module.css";
import { useContext } from "react";
import { Context } from "../../services/Memory";

function TableDates({ data, updateSearchResults }) {
  const [tableData, setTableData] = useState(data);
  const [, dispatch] = useContext(Context);
  const [showUnavilable, setShowUnavilable] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const handleUnavilable = (
    id,
    speciality,
    atention,
    details,
    name,
    date,
    timeRange,
    professional
  ) => {
    dispatch({
      type: "unavilableDate",
      payload: {
        id: id,
        speciality: speciality,
        atention: atention,
        details: details,
        name: name,
        date: date,
        professional: professional,
        timeRange: timeRange,
      },
    });
    updateSearchResults([]);
    setShowUnavilable(true);
  };

  const handleComplete = (id, speciality, atention, details, name, date) => {
    dispatch({
      type: "completeDate",
      payload: {
        id: id,
        speciality: speciality,
        atention: atention,
        details: details,
        name: name,
        date: date,
      },
    });
    updateSearchResults([]);
    setShowComplete(true);
  };

  useEffect(() => {
    setTableData(data);
    let assistedTimer;
    if (showComplete) {
      assistedTimer = setTimeout(() => {
        setShowComplete(false);
      }, 1500);
    }

    let cancelledTimer;
    if (showUnavilable) {
      cancelledTimer = setTimeout(() => {
        setShowUnavilable(false);
      }, 1500);
    }

    return () => {
      clearTimeout(assistedTimer);
      clearTimeout(cancelledTimer);
    };
  }, [data, showComplete, showUnavilable]);

  return (
    <div className="flex justify-center mt-7">
      {showComplete && <div className={styles.message}>Cita asistida</div>}
      {showUnavilable && <div className={styles.message}>Cita cancelada</div>}
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.thead}>
            <th className={styles.rowhead}>ESPECIALIDAD</th>
            <th className={styles.rowhead}>PROFESIONAL</th>
            <th className={styles.rowhead}>ATENCION</th>
            <th className={styles.rowhead}>FECHA</th>
            <th className={styles.rowhead}>HORARIO</th>
            <th className={styles.rowhead}>NOMBRE</th>
            <th className={styles.rowhead}>EDAD</th>
            <th className={styles.rowhead}>ESTADO</th>
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
                <td className={styles.row}>{item.timeRange}</td>
                <td className={styles.row}>{item.name}</td>
                <td className={`${styles.row} text-center`}>{item.age}</td>
                <td className={styles.row}>{item.available}</td>
                <td className={`${styles.row} text-center`}>
                  <button
                    onClick={(e) => {
                      handleComplete(
                        item.id,
                        item.speciality,
                        item.atention,
                        item.details,
                        item.name,
                        item.date
                      );
                      e.preventDefault();
                    }}
                  >
                    <i
                      className={`${styles.buttoncomplete} fa-regular fa-square-check`}
                    ></i>
                  </button>
                  <button
                    onClick={(e) => {
                      handleUnavilable(
                        item.id,
                        item.speciality,
                        item.atention,
                        item.details,
                        item.name,
                        item.date,
                        item.timeRange,
                        item.professional
                      );
                      e.preventDefault();
                    }}
                  >
                    <i
                      className={`${styles.buttondelete} fa-solid fa-trash`}
                    ></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableDates;
