import React, { useState } from 'react'
import styles from './CheckDates.module.css'

function CheckDates() {

  const optionSpeciality = ["", "Odontología", "Podología"]
  const optionProfesional = ["", "Nancy Alarcón", "Ana Cuadros", "Ponchi Merengueti"]

  const [form, setForm] = useState({
    speciality: '',
    professional: '',
    date: new Date().toISOString().split('T')[0]
  })

  const onChange = (event, prop) => {
    setForm(state => ({...state, [prop]: event.target.value}))
  }

  const {speciality, professional, date} = form;

  return (
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
          <h4 className={`${styles.h4}`}>PROFESIONAL</h4>
          <select 
            className={styles.input}
            value={professional} 
            onChange={(e) => onChange(e, 'professional')}>
            {optionProfesional.map(item => {
              if(speciality === 'Odontología' && item === 'Ana Cuadros'){
                return null;
              }
              if(speciality === 'Podología' && (item === 'Ana Cuadros' || item === 'Ponchi Merengueti') ){
                return null;
              }
              return <option key={item}>{item}</option>
            })}
          </select>
        </div>
        <div className='flex items-center my-1'>
          <h4 className={`${styles.h4} pr-14`}>FECHA</h4>
          <input 
          className={styles.input} 
          type='date' 
          value={date} 
          onChange={(e) => onChange(e, 'date')}/>
        </div>
        <div className={styles.btncontainer}>
          <button className='button button--gray'>BUSCAR</button>
          <button className='button button--red'>LIMPIAR</button>
        </div>
      </div>
  )
}

export default CheckDates