import React, { useContext, useState } from "react";
import styles from "./Patient.module.css";
import { Context } from "../../services/Memory";
import History from "./History";

function Patient() {
  const [state] = useContext(Context);
  const DATES = Object.values(state.dates);
  const [resultsHistory, setResultsHistory] = useState([]);
  const [resultsInfo, setResultsInfo] = useState({});

  const optionSpeciality = ["", "Odontología", "Podología"];

  const [form, setForm] = useState({
    speciality: "",
    name: "",
  });

  const handleClear = (e) => {
    e.preventDefault();
    setForm({
      speciality: "",
      name: "",
    });
  };

  const handleSubmit = () => {
    const resultHistory = state.dates.filter((item) => {
      return item.name === name && item.speciality === speciality;
    });
    setResultsHistory(resultHistory);
    const resultInfo = Object.values(state.info).filter((item) => {
      return item.name === name && item.speciality === speciality;
    });
    setResultsInfo(resultInfo);
  };

  const onChange = (event, prop) => {
    setForm((prevState) => ({ ...prevState, [prop]: event.target.value }));
  };

  const { speciality, name } = form;
  const displayedNames = [];

  return (
    <div>
      <div className={styles.container}>
        <div className="flex items-center my-1">
          <h4 className={styles.h4}>ESPECIALIDAD</h4>
          <select
            className={styles.input}
            value={speciality}
            onChange={(e) => onChange(e, "speciality")}
          >
            {optionSpeciality.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <h4 className={`${styles.h4} pr-8`}>PACIENTE</h4>
          <select
            className={styles.input}
            value={name}
            onChange={(e) => onChange(e, "name")}
          >
            <option></option>
            {DATES.map((item) => {
              if (
                item.speciality.includes("Odontología") &&
                speciality === "Odontología"
              ) {
                if (!displayedNames.includes(item.id)) {
                  displayedNames.push(item.id);
                  return (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  );
                }
              }
              if (
                item.speciality.includes("Podología") &&
                speciality === "Podología"
              ) {
                if (!displayedNames.includes(item.id)) {
                  displayedNames.push(item.id);
                  return (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  );
                }
              }
              return null;
            })}
          </select>
        </div>
        <div className={styles.btncontainer}>
          <button onClick={handleSubmit} className="button button--gray">
            BUSCAR
          </button>
          <button onClick={handleClear} className="button button--red">
            LIMPIAR
          </button>
        </div>
      </div>
      <History dataInfo={resultsInfo} dataHistory={resultsHistory} />
    </div>
  );
}

export default Patient;
