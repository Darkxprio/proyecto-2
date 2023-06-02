import React, { useState } from "react";
import styles from "./History.module.css";
import ClinicHistory from "./ClinicHistory";
import HistoryAndForward from "./HistoryAndForward";

function History({ dataInfo, dataHistory }) {
  const [activeTab, setActiveTab] = useState("clinicHistory");

  const renderContent = () => {
    switch (activeTab) {
      case "clinicStory":
        return <ClinicHistory data={dataInfo} />;
      case "IndicationsForward":
        return <HistoryAndForward data={dataHistory} />;
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
            HISTORIAL DE CITAS Y AVANCE MEDICO
          </button>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}

export default History;
