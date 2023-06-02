import React from "react";
import PathologicalHistory from "./PathologicalHistory";
import PersonalInformation from "./PersonalInformation";
import PhisicalExporations from "./PhisicalExporations";
import Treatment from "./Treatment";

function ClinicHistory({ data }) {
  return (
    <div>
      <PersonalInformation data={data} />
      <PathologicalHistory data={data} />
      <PhisicalExporations data={data} />
      <Treatment data={data} />
    </div>
  );
}

export default ClinicHistory;

// const explorationsPodology = ["Dedo Supraductos", "Femoral", "Examen Neurológico", "Examen Podologico", "Examen Ortopedico", "Examen Angiol", "Dactiloplastias", "Pulsos"]
