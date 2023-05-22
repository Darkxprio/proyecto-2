import React from 'react'
import styles from './Main.module.css'
import Url from './Url'

function Main({children}) {
  return (
    <div className={styles.principal}>
      <aside className={styles.aside}>
        <div>
          <Url to={'/add-dates'} text="Agendar cita">
            <i className="fa-solid fa-calendar-check mr-2"></i>
          </Url>
          <Url to={'/add-patient'} text="Añadir un paciente">
            <i className="fa-solid fa-person mr-3"></i>
          </Url>
          <Url to={'/check-dates'} text="Revisar citas">
            <i className="fa-solid fa-calendar-days mr-2"></i>
          </Url>
          <Url to={'/history'} text="Revisar historia">
            <i className="fa-solid fa-file-medical mr-2"></i>
          </Url>
        </div>
        <div>
        <Url to={'/login'} text="Salir">
            <i className="fa-solid fa-right-from-bracket mr-2"></i>
          </Url>
        </div>
      </aside>
      <main className={styles.main}>
        {children}
      </main>
    </div>

  )
}

export default Main