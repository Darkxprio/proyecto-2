import React, { useState } from 'react'
import styles from './History.module.css'
import ClinicHistory from './ClinicHistory'
import TreatmentIndications from './TreatmentIndications'
import AppointmentHistory from './AppointmentHistory'

function History() {
    const [activeTab, setActiveTab] = useState('clinicHistory')

    const renderContent = () => {
        switch(activeTab){
            case 'clinicStory':
                return <ClinicHistory />;
            case 'treatmentIndications':
                return <TreatmentIndications />;
            case 'appointmentHistory':
                return <AppointmentHistory />;
            default:
                return null;
        }
    }

  return (
    <div className={styles.container}>
        <div className='h-8'>
            <div className={styles.btncontainer}>
                <button 
                onClick={() =>setActiveTab('clinicStory')} 
                className={`${styles.button} ${activeTab === 'clinicStory' ? styles.activeButton : ''}`}
                >HISTORIA CLINICA</button>
                <button 
                onClick={() =>setActiveTab('treatmentIndications')} 
                className={`${styles.button} ${activeTab === 'treatmentIndications' ? styles.activeButton : ''}`}
                >TRATAMIENTO E INDICACIONES</button>
                <button 
                onClick={() =>setActiveTab('appointmentHistory')} 
                className={`${styles.button}  ${activeTab === 'appointmentHistory' ? styles.activeButton : ''}`}
                >HISTORIAL DE CITAS</button>
            </div>
        </div>
        {renderContent()}
    </div>
  )
}

export default History