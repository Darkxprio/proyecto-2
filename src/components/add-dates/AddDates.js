import React, { useContext, useEffect, useState } from "react";
import styles from "./AddDates.module.css";
import { Context } from "../../services/Memory";
import AddDatesError from "./AddDatesError";
import Modal from "../Modal";

function AddDates() {
  const [showModal, setShowModal] = useState(false);
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
    setStartTime("");
    setEndTime("");
    setTimes([]);
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
      form.atention === "" ||
      times.length === 0
    ) {
      setShowModal(true);
      e.preventDefault();
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
          times: times,
        },
      });
      clean();
      e.preventDefault();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const scheduleOld = (e) => {
    if (
      form.speciality === "" ||
      form.professional === "" ||
      form.atention === "" ||
      times.length === 0
    ) {
      setShowModal(true);
      e.preventDefault();
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
          times: times,
        },
      });
      clean();
      e.preventDefault();
    }
  };

  const [idTime, setIdTime] = useState("");
  const [timer, setTimer] = useState([]);

  useEffect(() => {
    const timerDefault = [
      "",
      "08:00 AM",
      "08:30 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
      "3:30 PM",
      "4:00 PM",
      "4:30 PM",
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
      "8:00 PM",
      "8:30 PM",
      "9:00 PM",
    ];

    if (form.speciality !== "" && form.professional !== "") {
      setIdTime(
        (form.speciality + form.professional + form.date)
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s/g, "")
          .toUpperCase()
      );
    }

    const filterId = state.time.filter((item) => item.idTime === idTime);

    if (filterId.length === 0) {
      setTimer(timerDefault);
    } else {
      const valuesToRemove = timerDefault.filter((value) =>
        Object.values(filterId[0]).includes(value)
      );

      const filteredArr = timerDefault.filter(
        (value) => !valuesToRemove.includes(value)
      );

      setTimer(filteredArr);
    }

    setNameCatch("");
    setAgeCatch("");
    setPhoneCatch("");
  }, [form.speciality, form.professional, form.date, idTime, state.time]);

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

  const [times, setTimes] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleTime = (e) => {
    const startTimeIndex = parseInt(startTime);
    const endTimeIndex = parseInt(endTime);

    if (
      startTimeIndex >= 1 &&
      endTimeIndex >= 1 &&
      endTimeIndex > startTimeIndex
    ) {
      const selectedTimes = timer.slice(startTimeIndex, endTimeIndex + 1);
      setTimes(selectedTimes);
    } else {
      setTimes([]);
    }
    e.preventDefault();
  };

  return (
    <>
      {showModal && (
        <Modal>
          <AddDatesError onClose={handleCloseModal} />
        </Modal>
      )}

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
        <div
          className={`${styles.container2} ${renderTime() ? "h-48" : "h-36"}`}
        >
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
          <div className="flex items-center my-2">
            <h4 className={styles.h4}>HORARIO</h4>
            <div className="flex flex-auto justify-center">
              <div className="flex items-center">
                <h3 className="mr-5">HORA DE INICIO</h3>
                <select
                  required
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className={styles.input2}
                >
                  {timer.map((item, index) => {
                    return (
                      <option key={index} value={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex items-center">
                <h3 className="mx-5">HORA DE FIN</h3>
                <select
                  required
                  value={endTime}
                  className={styles.input2}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  {timer.map((item, index) => {
                    return (
                      <option key={index} value={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex items-center ml-5">
                <button className="button button--gray" onClick={handleTime}>
                  CONFIRMAR HORARIO
                </button>
              </div>
            </div>
          </div>
          {times.length === 0 ? (
            <div className="">
              <h2 className={`${styles.h2} text-red-600`}>
                Seleccione un horario correcto por favor.
              </h2>
            </div>
          ) : (
            <div>
              <h2 className={styles.h2}>Horario Correcto.</h2>
            </div>
          )}
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
    </>
  );
}

export default AddDates;

// { prop: "", value: "" },
// { prop: "08:00 AM", value: "08:00 AM" },
// { prop: "08:30 AM", value: "08:30 AM" },
// { prop: "09:00 AM", value: "09:00 AM" },
// { prop: "09:30 AM", value: "09:30 AM" },
// { prop: "10:00 AM", value: "10:00 AM" },
// { prop: "10:30 AM", value: "10:30 AM" },
// { prop: "11:00 AM", value: "11:00 AM" },
// { prop: "11:30 AM", value: "11:30 AM" },
// { prop: "12:00 PM", value: "12:00 PM" },
// { prop: "12:30 PM", value: "12:30 PM" },
// { prop: "1:00 PM", value: "1:00 PM" },
// { prop: "1:30 PM", value: "1:30 PM" },
// { prop: "2:00 PM", value: "2:00 PM" },
// { prop: "2:30 PM", value: "2:30 PM" },
// { prop: "3:00 PM", value: "3:00 PM" },
// { prop: "3:30 PM", value: "3:30 PM" },
// { prop: "4:00 PM", value: "4:00 PM" },
// { prop: "4:30 PM", value: "4:30 PM" },
// { prop: "5:00 PM", value: "5:00 PM" },
// { prop: "5:30 PM", value: "5:30 PM" },
// { prop: "6:00 PM", value: "6:00 PM" },
// { prop: "6:30 PM", value: "6:30 PM" },
// { prop: "7:00 PM", value: "7:00 PM" },
// { prop: "7:30 PM", value: "7:30 PM" },
// { prop: "8:00 PM", value: "8:00 PM" },
// { prop: "8:30 PM", value: "8:30 PM" },
// { prop: "9:00 PM", value: "9:00 PM" },
