import React from "react";
import ComplementaryExams from "./ComplementaryExams";
import PathologicalHistory from "./PathologicalHistory";
import PersonalInformation from "./PersonalInformation";
import PhisicalExporations from "./PhisicalExporations";
import FootDraw from "./FootDraw";
import Treatment from "./Treatment";

function ClinicHistory() {
  return (
    <div>
      <PersonalInformation />
      <PathologicalHistory />
      <PhisicalExporations />
      <ComplementaryExams />
      <FootDraw />
      <Treatment />
    </div>
  );
}

export default ClinicHistory;

// const explorationsPodology = ["Dedo Supraductos", "Femoral", "Examen Neurológico", "Examen Podologico", "Examen Ortopedico", "Examen Angiol", "Dactiloplastias", "Pulsos"]
