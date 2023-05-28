import React, { useState } from "react";
import styles from "./History.module.css";
import ClinicHistory from "./ClinicHistory";
import IndicationsForward from "./IndicationsForward";
import AppointmentHistory from "./AppointmentHistory";

function History() {
  const [activeTab, setActiveTab] = useState("clinicHistory");

  const renderContent = () => {
    switch (activeTab) {
      case "clinicStory":
        return <ClinicHistory />;
      case "IndicationsForward":
        return <IndicationsForward />;
      case "appointmentHistory":
        return <AppointmentHistory />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className="h-8">
        <div className={styles.btncontainer}>
          <button
            onClick={() => setActiveTab("clinicStory")}
            className={`${styles.button} ${
              activeTab === "clinicStory" ? styles.activeButton : ""
            }`}
          >
            HISTORIA CLINICA
          </button>
          <button
            onClick={() => setActiveTab("IndicationsForward")}
            className={`${styles.button} ${
              activeTab === "IndicationsForward" ? styles.activeButton : ""
            }`}
          >
            INDICACIONES Y AVANCE
          </button>
          <button
            onClick={() => setActiveTab("appointmentHistory")}
            className={`${styles.button}  ${
              activeTab === "appointmentHistory" ? styles.activeButton : ""
            }`}
          >
            HISTORIAL DE CITAS
          </button>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}

export default History;
