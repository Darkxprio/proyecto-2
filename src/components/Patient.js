import React, { useContext, useState } from 'react'
import styles from './Patient.module.css'
import { Context } from '../services/Memory'

function Patient({children}) {

  const [state] = useContext(Context);
  const DATES = Object.values(state.dates);

  const optionSpeciality = ["", "Odontología", "Podología"]

  const [form, setForm] = useState({
    speciality: '',
    name: ''
  })

  const onChange = (event, prop) => {
    setForm(prevState => ({...prevState, [prop]: event.target.value}))
  }

  const {speciality, name} = form;

  return (
    <div>
      <form>
        <div className={styles.container}>
          <div className='flex items-center my-1'>
            <h4 className={styles.h4}>ESPECIALIDAD</h4>
            <select 
                className={styles.input} 
                value={speciality} 
                onChange={(e) => onChange(e, 'speciality')}>
                {optionSpeciality.map(item => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div className='flex items-center'>
            <h4 className={`${styles.h4} pr-8`}>PACIENTE</h4>
            <select
                className={styles.input}
                value={name} 
                onChange={(e) => onChange(e, 'name')}>
                {DATES.map(item => {
                  if(item.speciality.includes("Odontología") && speciality === "Odontología"){
                    return <option key={item.name} value={item.name}>{item.name}</option>
                  }
                  if(item.speciality.includes("Podología") && speciality === "Podología"){
                    return <option key={item.name} value={item.name}>{item.name}</option>
                  }
                  return null;
                })}
            </select>
          </div>
          <div className={styles.btncontainer}>
            <button className='button button--gray'>BUSCAR</button>
            <button className='button button--red'>LIMPIAR</button>
          </div>
        </div>
      </form>
      {children}
    </div>
  )
}

export default Patient