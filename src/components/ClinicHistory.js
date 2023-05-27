import React, { useState } from "react";
import styles from "./ClinicHistory.module.css";
import DermatologicalExam from "./tables/DermatologicalExam";
import FingerProducts from "./tables/FingerProducts";
import Femoral from "./tables/Femoral";
import NeurologicalExam from "./tables/NeurologicalExam";
import OrthopedicExam from "./tables/OrthopedicExam";
import PodriatryExam from "./tables/PodriatryExam";
import AngiolExam from "./tables/AngiolExam";
import Dactyloplasties from "./tables/Dactyloplasties";
import Pulses from "./tables/Pulses";

function ClinicHistory() {
  const [selectedOption, setSelectedOption] = useState("");

  const explorationsPodology = [
    "Examen Dermatol",
    "Dedo Supraductos",
    "Femoral",
    "Examen Neurológico",
    "Examen Podologico",
    "Examen Ortopedico",
    "Examen Angiol",
    "Dactiloplastias",
    "Pulsos",
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
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className={styles.card}>
        <h1 className="text-center mb-2">INFORMACION PERSONAL</h1>
        <div className="grid grid-cols-2">
          <div className="mr-5">
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Nombre:</h2>
              <input className={styles.input1} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Edad:</h2>
              <input className={styles.input1} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Sexo:</h2>
              <input className={styles.input1} />
            </div>
            <div className="flex items-center justify-between">
              <h2 className={styles.h2}>Teléfono:</h2>
              <input className={styles.input1} />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Dirección:</h2>
              <input className={styles.input2} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Peso:</h2>
              <input className={styles.input2} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Talla:</h2>
              <input className={styles.input2} />
            </div>
            <div className="flex items-center justify-between">
              <h2 className={styles.h2}>G.Sanguineo:</h2>
              <input className={styles.input2} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="button button--gray">EDITAR</button>
        </div>
      </div>
      <div className={styles.card}>
        <h1 className="text-center mb-2">ANTECEDENTES PATOLOGICOS</h1>
        <div className="grid grid-cols-6">
          <div className="mr-5">
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Diabetes:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Artrítis:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Sida:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center justify-between">
              <h2 className={styles.h2}>Pie Psoriásico:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
          </div>
          <div className="mr-5">
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Tipo:</h2>
              <input type="text" className={styles.input} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Artrosis:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Lepra:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center justify-between">
              <h2 className={styles.h2}>Pie Artrósico:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
          </div>
          <div className="mr-5">
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Cardiópata:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Hemofilia:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Pie Diabético:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center justify-between">
              <h2 className={styles.h2}>Pie Geriátrico:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
          </div>
          <div className="mr-5">
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Hipertenso:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Tuberculosis:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Pie Sifilítico:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center justify-between">
              <h2 className={styles.h2}>Pie de Atleta:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
          </div>
          <div className="mr-5">
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Epiléptico:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Hepatitis:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Pie Leproso:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center justify-between">
              <h2 className={styles.h2}>TA:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
          </div>
          <div className="mr-5">
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Asma:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Sífilis:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className="flex items-center mb-1 justify-between">
              <h2 className={styles.h2}>Pie Sidoso:</h2>
              <input type="checkbox" className={styles.checkbox} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="button button--gray">EDITAR</button>
        </div>
      </div>
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
    </div>
  );
}

export default ClinicHistory;

// const explorationsPodology = ["Dedo Supraductos", "Femoral", "Examen Neurológico", "Examen Podologico", "Examen Ortopedico", "Examen Angiol", "Dactiloplastias", "Pulsos"]
