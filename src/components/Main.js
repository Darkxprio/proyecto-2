import React from 'react'
import styles from './Main.module.css'
import Url from './Url'

function Main({children}) {
  return (
    <div className={styles.principal}>
      <aside className={styles.aside}>
        <div>
          <Url text="Agendar cita">
            <i className="fa-solid fa-calendar-check mr-2"></i>
          </Url>
          <Url text="Añadir un paciente">
            <i className="fa-solid fa-person mr-3"></i>
          </Url>
          <Url text="Revisar citas">
            <i className="fa-solid fa-calendar-days mr-2"></i>
          </Url>
          <Url text="Revisar historia">
            <i className="fa-solid fa-file-medical mr-2"></i>
          </Url>
        </div>
        <div>
        <Url to={'/'} text="Salir">
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