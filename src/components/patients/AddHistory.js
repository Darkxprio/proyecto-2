import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../services/Memory";
import styles from "./AddHistory.module.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function AddHistory() {
  const { id, atention, date } = useParams();
  const [state, dispatch] = useContext(Context);

  const [form, setForm] = useState({
    speciality: "",
    professional: "",
    atention: atention,
    date: date,
    treatment: "",
    prescription: "",
    time: "",
  });

  let dateFound = useRef(null);

  useEffect(() => {
    dateFound.current = Object.values(state.dates).find(
      (item) =>
        item.id === id && item.atention === atention && item.date === date
    );

    if (dateFound.current) {
      setForm((prevForm) => ({
        ...prevForm,
        speciality: dateFound.current.speciality,
        professional: dateFound.current.professional,
        treatment: dateFound.current.treatment,
        prescription: dateFound.current.prescription,
        time: dateFound.current.timeRange,
      }));
    }
  }, [id, atention, date, state.dates]);

  const onChange = (event, prop) => {
    setForm((state) => ({ ...state, [prop]: event.target.value }));
  };

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/patient/");
  };

  const handleSubmit = (e) => {
    if (form.treatment === "" || form.prescription === "") {
      console.log("No se puede procesar, falta llenar datos importantes");
    } else {
      dispatch({
        type: "uploadRecipe",
        payload: {
          id: id,
          speciality: form.speciality,
          professional: form.professional,
          atention: form.atention,
          date: form.date,
          treatment: form.treatment,
          prescription: form.prescription,
        },
      });
      e.preventDefault();
      navigate("/patient/");
    }
  };

  return (
    <form className={styles.card}>
      <div className={styles.container1}>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>ESPECIALIDAD</h4>
          <input
            disabled={true}
            value={form.speciality}
            className={styles.inputblock}
          />
        </div>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>PROFESIONAL</h4>
          <input
            disabled={true}
            value={form.professional}
            className={styles.inputblock}
          />
        </div>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>ATENCION</h4>
          <input
            disabled={true}
            value={form.atention}
            className={styles.inputblock}
          />
        </div>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>FECHA</h4>
          <input
            disabled={true}
            value={form.date}
            className={styles.inputblock}
            type="date"
          />
        </div>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>HORARIO</h4>
          <input
            disabled={true}
            value={form.time}
            className={styles.inputblock}
          />
        </div>
      </div>
      <div className={styles.container2}>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>TRATAMIENTO</h4>
          <textarea
            required
            onChange={(e) => onChange(e, "treatment")}
            value={form.treatment}
            className={`${styles.input} resize-none`}
          ></textarea>
        </div>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>PRESCRIPCION</h4>
          <textarea
            required
            onChange={(e) => onChange(e, "prescription")}
            value={form.prescription}
            className={`${styles.input} resize-none`}
          ></textarea>
        </div>
      </div>
      <div className={styles.btncontainer}>
        <button onClick={handleSubmit} className="button button--gray">
          GUARDAR
        </button>
        <button onClick={handleCancel} className="button button--red">
          CANCELAR
        </button>
      </div>
    </form>
  );
}

export default AddHistory;
