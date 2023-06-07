import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import UserError from "./UserError";
import SVGLogo from "../img/CENTRO DENTAL - PODOLOGICO.svg";

function Login() {
  const [user, setUser] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && password === "admin") {
      navigate("/");
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <UserError onClose={handleCloseModal} />
        </Modal>
      )}
      <form className={styles.container} onSubmit={handleSubmit}>
        <img className="h-40" src={SVGLogo} alt="Logo" />
        <h2 className={styles.h2}>LOGIN</h2>
        <div className={styles.text}>
          <input
            className={styles.input}
            value={user}
            onChange={handleUser}
            placeholder="Usuario"
          />
        </div>
        <div className={styles.text}>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={handlePassword}
            placeholder="Contraseña"
          />
        </div>
        <button type="submit" className="button button--gray mt-2">
          INICIAR SESION
        </button>
      </form>
    </>
  );
}

export default Login;
