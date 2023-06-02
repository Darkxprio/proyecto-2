import React, { useContext, useState } from "react";
import styles from "./PersonalInformation.module.css";
import { useEffect } from "react";
import { Context } from "../../services/Memory";

function PersonalInformation({ data }) {
  const [, dispatch] = useContext(Context);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (data === undefined || data.length === 0 || data[0] === undefined) {
      return;
    } else {
      const { name, age, phone, gender, address, weight, height, blood } =
        data[0];
      setForm((prevForm) => ({
        ...prevForm,
        name: name,
        age: age,
        phone: phone,
      }));
      if (gender === undefined) {
        setForm((prevForm) => ({
          ...prevForm,
          gender: "",
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          gender: gender,
        }));
      }
      if (address === undefined) {
        setForm((prevForm) => ({
          ...prevForm,
          address: "",
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          address: address,
        }));
      }
      if (weight === undefined) {
        setForm((prevForm) => ({
          ...prevForm,
          weight: "",
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          weight: weight,
        }));
      }
      if (height === undefined) {
        setForm((prevForm) => ({
          ...prevForm,
          height: "",
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          height: height,
        }));
      }
      if (blood === undefined) {
        setForm((prevForm) => ({
          ...prevForm,
          blood: "",
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          blood: blood,
        }));
      }
    }
  }, [data]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    weight: "",
    height: "",
    blood: "",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    dispatch({
      type: "addHistory",
      payload: {
        name: form.name,
        age: form.age,
        phone: form.phone,
        gender: form.gender,
        address: form.address,
        weight: form.weight,
        height: form.height,
        blood: form.blood,
      },
    });
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

  return (
    <div className={styles.card}>
      <h1 className="text-center mb-2">INFORMACION PERSONAL</h1>
      <div className="grid grid-cols-2">
        <div className="mr-5">
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Nombre:</h2>
            <input value={form.name} className={styles.input1} disabled />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Teléfono:</h2>
            <input value={form.phone} className={styles.input1} disabled />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Edad:</h2>
            <input value={form.age} className={styles.input1} disabled />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>Sexo:</h2>
            <input
              value={form.gender}
              onChange={(e) => onChange(e, "gender")}
              className={styles.input1}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Dirección:</h2>
            <input
              value={form.address}
              onChange={(e) => onChange(e, "address")}
              className={styles.input2}
              disabled={!isEditing}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Peso:</h2>
            <input
              value={form.weight}
              onChange={(e) => onChange(e, "weight")}
              className={styles.input2}
              disabled={!isEditing}
            />
          </div>
          <div className="flex items-center mb-1 justify-between">
            <h2 className={styles.h2}>Talla:</h2>
            <input
              value={form.height}
              onChange={(e) => onChange(e, "height")}
              className={styles.input2}
              disabled={!isEditing}
            />
          </div>
          <div className="flex items-center justify-between">
            <h2 className={styles.h2}>G.Sanguineo:</h2>
            <input
              value={form.blood}
              onChange={(e) => onChange(e, "blood")}
              className={styles.input2}
              disabled={!isEditing}
            />
          </div>
        </div>
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

export default PersonalInformation;
