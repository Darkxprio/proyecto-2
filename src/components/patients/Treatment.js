import React from "react";
import styles from "./Treatment.module.css";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../services/Memory";
import { useEffect } from "react";

function Treatment({ data }) {
  const [, dispatch] = useContext(Context);
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    treatment: "",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    dispatch({
      type: "addTreatment",
      payload: {
        treatment: form.treatment,
        data,
      },
    });
    console.log(form.treatment);
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const onChange = (event, prop) => {
    setForm((state) => ({ ...state, [prop]: event.target.value }));
  };

  useEffect(() => {
    if (data === undefined || data.length === 0 || data[0] === undefined) {
      return;
    } else {
      const { treatment } = data[0];
      setForm({ treatment: treatment || "" });
    }
  }, [data]);

  return (
    <div className={styles.card}>
      <h1 className="text-center mb-2">TRATAMIENTO</h1>
      <div className="flex items-center mb-1 justify-between">
        <h2 className={styles.h2}>Indicaciones:</h2>
        <textarea
          className={`${styles.input} resize-none`}
          value={form.treatment}
          disabled={!isEditing}
          onChange={(e) => onChange(e, "treatment")}
        ></textarea>
      </div>
      <div className="flex justify-center mt-4">
        {isEditing ? (
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={handleSaveClick}
              className="button button--gray mr-5"
            >
              GUARDAR
            </button>
            <button
              onClick={handleCancelClick}
              className="button button--red ml-5"
            >
              CANCELAR
            </button>
          </div>
        ) : (
          <button
            onClick={handleEditClick}
            className="button button--gray mt-2"
          >
            EDITAR
          </button>
        )}
      </div>
    </div>
  );
}

export default Treatment;
