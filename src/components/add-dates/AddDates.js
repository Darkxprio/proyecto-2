import React, { useContext, useEffect, useState } from "react";
import styles from "./AddDates.module.css";
import { Context } from "../../services/Memory";

function AddDates() {
  const [buttonStates, setButtonStates] = useState(Array(23).fill(false));
  const [selectedOption, setSelectedOption] = useState("nuevo");
  const optionSpeciality = ["", "Odontología", "Podología"];
  const optionProfesional = [
    "",
    "Nancy Alarcón",
    "Ana Cuadros",
    "Ponchi Merengueti",
  ];
  const optionType = ["", "Consulta", "Operación", "Control"];
  const [nameCatch, setNameCatch] = useState("");
  const [ageCatch, setAgeCatch] = useState("");
  const [phoneCatch, setPhoneCatch] = useState("");

  const [form, setForm] = useState({
    speciality: "",
    professional: "",
    atention: "",
    details: "",
    date: new Date().toISOString().split("T")[0],
    name: "",
    age: "",
    phone: "",
  });

  const [state, dispatch] = useContext(Context);

  const NAMES = Object.values(state.info);

  const onChange = (event, prop) => {
    setForm((state) => ({ ...state, [prop]: event.target.value }));
  };

  const handleChange = (e) => {
    const selectedName = e.target.value;
    const selectedItem = NAMES.find((item) => item.name === selectedName);
    if (selectedItem) {
      setNameCatch(selectedItem.name);
      setAgeCatch(selectedItem.age);
      setPhoneCatch(selectedItem.phone);
    } else {
      setNameCatch("");
      setAgeCatch("");
      setPhoneCatch("");
    }
  };

  const clean = () => {
    setNameCatch("");
    setAgeCatch("");
    setPhoneCatch("");
    setForm({
      speciality: "",
      professional: "",
      atention: "",
      details: "",
      date: new Date().toISOString().split("T")[0],
      name: "",
      age: "",
      phone: "",
    });
  };

  const handleClear = (e) => {
    e.preventDefault();
    clean();
  };

  const scheduleNew = (e) => {
    if (
      form.speciality === "" ||
      form.professional === "" ||
      form.atention === ""
    ) {
      console.log("No se puede procesar, falta llenar datos importantes");
    } else {
      dispatch({
        type: "scheduleNew",
        payload: {
          name: form.name,
          age: form.age,
          phone: form.phone,
          speciality: form.speciality,
          professional: form.professional,
          atention: form.atention,
          details: form.details,
          date: form.date,
        },
      });
      clean();
      e.preventDefault();
    }
  };

  const scheduleOld = (e) => {
    if (
      form.speciality === "" ||
      form.professional === "" ||
      form.atention === ""
    ) {
      console.log("No se puede procesar, falta llenar datos importantes");
    } else {
      dispatch({
        type: "scheduleOld",
        payload: {
          name: nameCatch,
          phone: phoneCatch,
          age: ageCatch,
          speciality: form.speciality,
          professional: form.professional,
          atention: form.atention,
          details: form.details,
          date: form.date,
        },
      });
      clean();
      e.preventDefault();
    }
  };

  useEffect(() => {
    setNameCatch("");
    setAgeCatch("");
    setPhoneCatch("");
  }, [form.speciality]);

  const {
    speciality,
    professional,
    atention,
    details,
    date,
    name,
    age,
    phone,
  } = form;

  const renderTime = () => {
    if (speciality === "Odontología" && atention === "Consulta") {
      return <h2 className={styles.h2}>TIEMPO RECOMENDADO, 2 HORAS.</h2>;
    } else if (speciality === "Odontología" && atention === "Operación") {
      return <h2 className={styles.h2}>TIEMPO RECOMENDADO, 3 HORAS.</h2>;
    } else if (speciality === "Odontología" && atention === "Control") {
      return <h2 className={styles.h2}>TIEMPO RECOMENDADO, 1 HORA.</h2>;
    } else if (speciality === "Podología" && atention === "Consulta") {
      return <h2 className={styles.h2}>TIEMPO RECOMENDADO, 1 HORA Y MEDIA.</h2>;
    } else if (speciality === "Podología" && atention === "Operación") {
      return <h2 className={styles.h2}>TIEMPO RECOMENDADO, 2 HORAS.</h2>;
    } else if (speciality === "Podología" && atention === "Control") {
      return <h2 className={styles.h2}>TIEMPO RECOMENDADO, 1 HORA.</h2>;
    } else {
      return null;
    }
  };

  const handleButton = (index, e) => {
    e.preventDefault();
    setButtonStates((prevButtonStates) => {
      const newButtonStates = [...prevButtonStates];
      newButtonStates[index] = !newButtonStates[index];
      return newButtonStates;
    });
  };

  return (
    <form>
      <div className={styles.container1}>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>ESPECIALIDAD</h4>
          <select
            required
            className={styles.input}
            value={speciality}
            onChange={(e) => onChange(e, "speciality")}
          >
            {optionSpeciality.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <h4 className={styles.h4}>PROFESIONAL</h4>
          <select
            required
            className={styles.input}
            value={professional}
            onChange={(e) => onChange(e, "professional")}
          >
            {optionProfesional.map((item) => {
              if (speciality === "Odontología" && item === "Ana Cuadros") {
                return null;
              }
              if (
                speciality === "Podología" &&
                (item === "Ana Cuadros" || item === "Ponchi Merengueti")
              ) {
                return null;
              }
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>ATENCION</h4>
          <select
            required
            className={styles.input}
            value={atention}
            onChange={(e) => onChange(e, "atention")}
          >
            {optionType.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>DETALLES</h4>
          <textarea
            className={`${styles.input} resize-none`}
            value={details}
            onChange={(e) => onChange(e, "details")}
          ></textarea>
        </div>
      </div>
      <div className={`${styles.container2} ${renderTime() ? "h-44" : "h-36"}`}>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>FECHA</h4>
          <input
            className={styles.input}
            type="date"
            value={date}
            onChange={(e) => onChange(e, "date")}
          />
        </div>
        {renderTime()}
        <div className="flex items-center my-2 justify-between">
          <h4 className={styles.h4}>HORARIO</h4>
          <div className={styles.btngrid}>
            <button
              onClick={(e) => handleButton(0, e)}
              className={`${styles.btntime} ${
                buttonStates[0] ? styles.buttonclick : ""
              }`}
            >
              10:00 AM
            </button>
            <button
              onClick={(e) => handleButton(1, e)}
              className={`${styles.btntime} ${
                buttonStates[1] ? styles.buttonclick : ""
              }`}
            >
              10:30 AM
            </button>
            <button
              onClick={(e) => handleButton(2, e)}
              className={`${styles.btntime} ${
                buttonStates[2] ? styles.buttonclick : ""
              }`}
            >
              11:00 AM
            </button>
            <button
              onClick={(e) => handleButton(3, e)}
              className={`${styles.btntime} ${
                buttonStates[3] ? styles.buttonclick : ""
              }`}
            >
              11:30 AM
            </button>
            <button
              onClick={(e) => handleButton(4, e)}
              className={`${styles.btntime} ${
                buttonStates[4] ? styles.buttonclick : ""
              }`}
            >
              12:00 PM
            </button>
            <button
              onClick={(e) => handleButton(5, e)}
              className={`${styles.btntime} ${
                buttonStates[5] ? styles.buttonclick : ""
              }`}
            >
              12:30 PM
            </button>
            <button
              onClick={(e) => handleButton(6, e)}
              className={`${styles.btntime} ${
                buttonStates[6] ? styles.buttonclick : ""
              }`}
            >
              01:00 PM
            </button>
            <button
              onClick={(e) => handleButton(7, e)}
              className={`${styles.btntime} ${
                buttonStates[7] ? styles.buttonclick : ""
              }`}
            >
              01:30 PM
            </button>
            <button
              onClick={(e) => handleButton(8, e)}
              className={`${styles.btntime} ${
                buttonStates[8] ? styles.buttonclick : ""
              }`}
            >
              02:00 PM
            </button>
            <button
              onClick={(e) => handleButton(9, e)}
              className={`${styles.btntime} ${
                buttonStates[9] ? styles.buttonclick : ""
              }`}
            >
              02:30 PM
            </button>
            <button
              onClick={(e) => handleButton(10, e)}
              className={`${styles.btntime} ${
                buttonStates[10] ? styles.buttonclick : ""
              }`}
            >
              03:00 PM
            </button>
            <button
              onClick={(e) => handleButton(11, e)}
              className={`${styles.btntime} ${
                buttonStates[11] ? styles.buttonclick : ""
              }`}
            >
              03:30 PM
            </button>
            <button
              onClick={(e) => handleButton(12, e)}
              className={`${styles.btntime} ${
                buttonStates[12] ? styles.buttonclick : ""
              }`}
            >
              04:00 PM
            </button>
            <button
              onClick={(e) => handleButton(13, e)}
              className={`${styles.btntime} ${
                buttonStates[13] ? styles.buttonclick : ""
              }`}
            >
              04:30 PM
            </button>
            <button
              onClick={(e) => handleButton(14, e)}
              className={`${styles.btntime} ${
                buttonStates[14] ? styles.buttonclick : ""
              }`}
            >
              05:00 PM
            </button>
            <button
              onClick={(e) => handleButton(15, e)}
              className={`${styles.btntime} ${
                buttonStates[15] ? styles.buttonclick : ""
              }`}
            >
              05:30 PM
            </button>
            <button
              onClick={(e) => handleButton(16, e)}
              className={`${styles.btntime} ${
                buttonStates[16] ? styles.buttonclick : ""
              }`}
            >
              06:00 PM
            </button>
            <button
              onClick={(e) => handleButton(17, e)}
              className={`${styles.btntime} ${
                buttonStates[17] ? styles.buttonclick : ""
              }`}
            >
              06:30 PM
            </button>
            <button
              onClick={(e) => handleButton(18, e)}
              className={`${styles.btntime} ${
                buttonStates[18] ? styles.buttonclick : ""
              }`}
            >
              07:00 PM
            </button>
            <button
              onClick={(e) => handleButton(19, e)}
              className={`${styles.btntime} ${
                buttonStates[19] ? styles.buttonclick : ""
              }`}
            >
              07:30 PM
            </button>
            <button
              onClick={(e) => handleButton(20, e)}
              className={`${styles.btntime} ${
                buttonStates[20] ? styles.buttonclick : ""
              }`}
            >
              08:00 PM
            </button>
            <button
              onClick={(e) => handleButton(21, e)}
              className={`${styles.btntime} ${
                buttonStates[21] ? styles.buttonclick : ""
              }`}
            >
              08:30 PM
            </button>
            <button
              onClick={(e) => handleButton(22, e)}
              className={`${styles.btntime} ${
                buttonStates[22] ? styles.buttonclick : ""
              }`}
            >
              09:00 PM
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.radiocontainer}>
          <label>
            <input
              className="mr-2"
              type="radio"
              value="nuevo"
              checked={selectedOption === "nuevo"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            PACIENTE NUEVO
          </label>
          <label>
            <input
              className="mr-2"
              type="radio"
              value="antiguo"
              checked={selectedOption === "antiguo"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            PACIENTE ANTIGUO
          </label>
        </div>
        {selectedOption === "nuevo" ? (
          <div className={styles.containernew}>
            <div className="flex items-center my-1 justify-between">
              <h4 className={styles.h4}>NOMBRE</h4>
              <input
                className={styles.input}
                value={name}
                onChange={(e) => onChange(e, "name")}
              />
            </div>
            <div className="flex items-center my-1 justify-between">
              <h4 className={styles.h4}>EDAD</h4>
              <input
                className={styles.input}
                type="number"
                value={age}
                onChange={(e) => onChange(e, "age")}
              />
            </div>
            <div className="flex items-center my-1 justify-between">
              <h4 className={styles.h4}>CELULAR</h4>
              <input
                className={styles.input}
                type="number"
                value={phone}
                onChange={(e) => onChange(e, "phone")}
              />
            </div>
            <div className={styles.btncontainer1}>
              <button className="button button--gray" onClick={scheduleNew}>
                AGENDAR
              </button>
              <button className="button button--red" onClick={handleClear}>
                LIMPIAR
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.containerold}>
            <div className="flex items-center justify-between">
              <h4 className={styles.h4}>PACIENTE</h4>
              <select
                className={styles.input}
                value={nameCatch}
                onChange={handleChange}
              >
                <option key={""} value="">
                  Seleccione
                </option>
                {NAMES.filter((item) =>
                  item.speciality.includes(speciality)
                ).map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="flex items-center my-1 justify-between">
                <h4 className={styles.h4}>NOMBRE</h4>
                <input
                  disabled={true}
                  className={styles.inputblock}
                  value={nameCatch}
                  onChange={(e) => onChange(e, "name")}
                />
              </div>
              <div className="flex items-center my-1 justify-between">
                <h4 className={styles.h4}>EDAD</h4>
                <input
                  disabled={true}
                  className={styles.inputblock}
                  type="number"
                  value={ageCatch}
                  onChange={(e) => onChange(e, "age")}
                />
              </div>
              <div className="flex items-center my-1 justify-between">
                <h4 className={styles.h4}>CELULAR</h4>
                <input
                  disabled={true}
                  className={styles.inputblock}
                  type="number"
                  value={phoneCatch}
                  onChange={(e) => onChange(e, "phone")}
                />
              </div>
            </div>
            <div className={styles.btncontainer2}>
              <button className="button button--gray" onClick={scheduleOld}>
                AGENDAR
              </button>
              <button className="button button--red" onClick={handleClear}>
                LIMPIAR
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default AddDates;
