import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Update.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../services/Memory";

function Update() {
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

  const [form, setForm] = useState({
    speciality: "",
    professional: "",
    atention: atention,
    details: details,
    date: new Date().toISOString().split("T")[0],
    name: "",
    age: "",
    phone: "",
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

    if (dateFound.current) {
      setForm((prevForm) => ({
        ...prevForm,
        speciality: dateFound.current.speciality,
        professional: dateFound.current.professional,
        date: dateFound.current.date,
        name: dateFound.current.name,
        age: dateFound.current.age,
        phone: dateFound.current.phone,
      }));
      setLastForm((prevForm) => ({
        ...prevForm,
        specialityBefore: dateFound.current.speciality,
        professionalBefore: dateFound.current.professional,
        dateBefore: dateFound.current.date,
      }));
    }
  }, [id, details, atention, state.dates]);

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
        },
      });

      e.preventDefault();
      navigate("/check-dates/");
    }
  };

  return (
    <form className={styles.card}>
      <div className={styles.container1}>
        <div className="flex items-center my-1 justify-between">
          <h4 className={styles.h4}>ESPECIALIDAD</h4>
          <select
            required
            className={styles.input}
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
              if (form.speciality === "Odontología" && item === "Ana Cuadros") {
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
          <div>PENDIENTE DE HACER ESTA MOÑA, GAAAAAAAAAAA !</div>
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
  );
}

export default Update;
