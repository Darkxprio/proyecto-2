import React, { useState } from "react";
import styles from "./PhisicalExplorations.module.css";
import DermatologicalExam from "./tables/DermatologicalExam";
import FingerProducts from "./tables/FingerProducts";
import Femoral from "./tables/Femoral";
import NeurologicalExam from "./tables/NeurologicalExam";
import OrthopedicExam from "./tables/OrthopedicExam";
import PodriatryExam from "./tables/PodriatryExam";
import AngiolExam from "./tables/AngiolExam";
import Dactyloplasties from "./tables/Dactyloplasties";
import Pulses from "./tables/Pulses";
import OrthopodologicExam from "./tables/OrthopodologicExam";
import ShoeType from "./tables/ShoeType";
import Deformity from "./tables/Deformity";

function PhisicalExporations() {
  const [selectedOption, setSelectedOption] = useState("");

  const explorationsPodology = [
    "",
    "Examen Dermatol",
    "Dedo Supraductos",
    "Femoral",
    "Examen Neurológico",
    "Examen Podologico",
    "Examen Ortopedico",
    "Examen Angiol",
    "Dactiloplastias",
    "Pulsos",
    "Examen Ortopodológico",
    "Tipo de Calzado",
    "Deformidad",
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderTable = () => {
    if (selectedOption === "Examen Dermatol") {
      return <DermatologicalExam />;
    } else if (selectedOption === "Dedo Supraductos") {
      return <FingerProducts />;
    } else if (selectedOption === "Femoral") {
      return <Femoral />;
    } else if (selectedOption === "Examen Neurológico") {
      return <NeurologicalExam />;
    } else if (selectedOption === "Examen Podologico") {
      return <PodriatryExam />;
    } else if (selectedOption === "Examen Ortopedico") {
      return <OrthopedicExam />;
    } else if (selectedOption === "Examen Angiol") {
      return <AngiolExam />;
    } else if (selectedOption === "Dactiloplastias") {
      return <Dactyloplasties />;
    } else if (selectedOption === "Pulsos") {
      return <Pulses />;
    } else if (selectedOption === "Examen Ortopodológico") {
      return <OrthopodologicExam />;
    } else if (selectedOption === "Tipo de Calzado") {
      return <ShoeType />;
    } else if (selectedOption === "Deformidad") {
      return <Deformity />;
    }
  };
  return (
    <div className={styles.card}>
      <h1 className="text-center mb-2">EXPLORACIONES FISICAS</h1>
      <div className="flex justify-center">
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className={styles.input3}
        >
          {explorationsPodology.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </div>
      <div>{renderTable()}</div>
    </div>
  );
}

export default PhisicalExporations;
