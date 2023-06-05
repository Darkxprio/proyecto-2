import React from "react";
import PathologicalHistory from "./PathologicalHistory";
import PersonalInformation from "./PersonalInformation";
import PhisicalExporations from "./PhisicalExporations";
import Treatment from "./Treatment";

function ClinicHistoryPodology({ data }) {
  return (
    <div>
      <PersonalInformation data={data} />
      <PathologicalHistory data={data} />
      <PhisicalExporations data={data} />
      <Treatment data={data} />
    </div>
  );
}

export default ClinicHistoryPodology;
