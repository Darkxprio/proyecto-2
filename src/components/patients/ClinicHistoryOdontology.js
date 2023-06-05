import React from "react";
import PersonalInformation from "./PersonalInformation";
import HealthQuestionnaire from "./HealthQuestionnaire";
import Treatment from "./Treatment";
import DentalExam from "./DentalExam";

function ClinicHistoryOdontology({ data }) {
  return (
    <div>
      <PersonalInformation data={data} />
      <HealthQuestionnaire data={data} />
      <DentalExam data={data} />
      <Treatment data={data} />
    </div>
  );
}

export default ClinicHistoryOdontology;
