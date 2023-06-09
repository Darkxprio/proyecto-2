import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Update.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../services/Memory";
import Modal from "../Modal";
import UpdateError from "./UpdateError";
import { useMemo } from "react";

function Update() {
  const [showModal, setShowModal] = useState(false);
  const { id, details, atention } = useParams();
  const [state, dispatch] = useContext(Context);
  const optionSpeciality = ["", "Odontología", "Podología"];
  const optionProfesional = [
    "",
    "Nancy Alarcón",
    "Ana Cuadros",
    "Ponchi Merengueti",
  ];
  const optionType = ["", "Consulta", "Operación", "Control"];

  const timer = useMemo(
    () => [
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
    ],
    []
  );

  const [form, setForm] = useState({
    speciality: "",
    professional: "",
    atention: atention,
    details: details,
    date: new Date().toISOString().split("T")[0],
    name: "",
    age: "",
    phone: "",
    timeStart: "",
    timeEnd: "",
  });

  const [lastform, setLastForm] = useState({
    specialityBefore: "",
    professionalBefore: "",
    atentionBefore: atention,
    detailsBefore: details,
    dateBefore: new Date().toISOString().split("T")[0],
  });

  let dateFound = useRef(null);

  useEffect(() => {
    dateFound.current = Object.values(state.dates).find(
      (item) =>
        item.id === id && item.details === details && item.atention === atention
    );

    const [start, end] = dateFound.current.timeRange.split(" - ");

    const startTimeIndexNumber = timer.indexOf(start);
    const endTimeIndexNumber = timer.indexOf(end);

    if (dateFound.current) {
      setForm((prevForm) => ({
        ...prevForm,
        speciality: dateFound.current.speciality,
        professional: dateFound.current.professional,
        date: dateFound.current.date,
        name: dateFound.current.name,
        age: dateFound.current.age,
        phone: dateFound.current.phone,
        timeStart: startTimeIndexNumber,
        timeEnd: endTimeIndexNumber,
      }));
      setLastForm((prevForm) => ({
        ...prevForm,
        specialityBefore: dateFound.current.speciality,
        professionalBefore: dateFound.current.professional,
        dateBefore: dateFound.current.date,
      }));
    }

    const timesBeforeGot = (startTimeIndexNumber, endTimeIndexNumber) => {
      return timer.slice(startTimeIndexNumber, endTimeIndexNumber + 1);
    };

    setInitialTimes(timesBeforeGot(startTimeIndexNumber, endTimeIndexNumber));
  }, [id, details, atention, state.dates, timer]);

  const onChange = (event, prop) => {
    setForm((state) => ({ ...state, [prop]: event.target.value }));
  };

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/check-dates/");
  };

  const handleUpdate = (e) => {
    if (
      form.speciality === "" ||
      form.professional === "" ||
      form.atention === ""
    ) {
      console.log("No se puede procesar, falta llenar datos importantes");
    } else if (Object.keys(times).length === 0) {
      setShowModal(true);
      e.preventDefault();
    } else {
      dispatch({
        type: "updateDate",
        payload: {
          id: id,
          speciality: form.speciality,
          professional: form.professional,
          atention: form.atention,
          details: form.details,
          date: form.date,
          specialityBefore: lastform.specialityBefore,
          professionalBefore: lastform.professionalBefore,
          dateBefore: lastform.dateBefore,
          atentionBefore: lastform.atentionBefore,
          detailsBefore: lastform.detailsBefore,
          times: times,
          timesBeforeGot: initialTimes,
        },
      });

      e.preventDefault();
      navigate("/check-dates/");
    }
  };

  const [initialTimes, setInitialTimes] = useState({});
  const [times, setTimes] = useState({});

  const handleTime = (e) => {
    const startTimeIndex = parseInt(form.timeStart);
    const endTimeIndex = parseInt(form.timeEnd);

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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <UpdateError onClose={handleCloseModal} />
        </Modal>
      )}

      <form className={styles.card}>
        <div className={styles.container1}>
          <div className="flex items-center my-1 justify-between">
            <h4 className={styles.h4}>ESPECIALIDAD</h4>
            <select
              disabled={true}
              required
              className={styles.inputblock}
              value={form.speciality}
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
              value={form.professional}
              onChange={(e) => onChange(e, "professional")}
            >
              {optionProfesional.map((item) => {
                if (
                  form.speciality === "Odontología" &&
                  item === "Ana Cuadros"
                ) {
                  return null;
                }
                if (
                  form.speciality === "Podología" &&
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
            <h4 className={`${styles.h4} pr-6`}>ATENCION</h4>
            <select
              required
              className={styles.input}
              value={form.atention}
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
            <h4 className={`${styles.h4} pr-8`}>DETALLES</h4>
            <textarea
              className={`${styles.input} resize-none`}
              value={form.details}
              onChange={(e) => onChange(e, "details")}
            ></textarea>
          </div>
        </div>
        <div className={styles.container2}>
          <div className="flex items-center my-1 justify-between">
            <h4 className={`${styles.h4} pr-12`}>FECHA</h4>
            <input
              className={styles.input}
              type="date"
              value={form.date}
              onChange={(e) => onChange(e, "date")}
            />
          </div>
          <div className="flex items-center my-1 justify-between">
            <h4 className={`${styles.h4} pr-6`}>HORARIO</h4>
            <div className="flex flex-auto justify-center">
              <div className="flex items-center">
                <h3 className="mx-2">INICIO</h3>
                <select
                  value={form.timeStart}
                  onChange={(e) => onChange(e, "timeStart")}
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
                <h3 className="mx-3">FIN</h3>
                <select
                  value={form.timeEnd}
                  onChange={(e) => onChange(e, "timeEnd")}
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
              <div className="flex items-center ml-5">
                <button onClick={handleTime} className="button button--gray">
                  CONFIRMAR HORARIO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <div className="flex items-center my-1 justify-between">
            <h4 className={`${styles.h4} pr-9`}>NOMBRE</h4>
            <input
              disabled={true}
              className={styles.inputblock}
              value={form.name}
            />
          </div>
          <div className="flex items-center my-1 justify-between">
            <h4 className={`${styles.h4} pr-14`}>EDAD</h4>
            <input
              disabled={true}
              className={styles.inputblock}
              type="number"
              value={form.age}
            />
          </div>
          <div className="flex items-center my-1 justify-between">
            <h4 className={`${styles.h4} pr-8`}>CELULAR</h4>
            <input
              disabled={true}
              className={styles.inputblock}
              type="number"
              value={form.phone}
            />
          </div>
        </div>
        <div className={styles.btncontainer1}>
          <button onClick={handleUpdate} className="button button--gray">
            ACTUALIZAR
          </button>
          <button onClick={handleCancel} className="button button--red">
            CANCELAR
          </button>
        </div>
      </form>
    </>
  );
}

export default Update;
