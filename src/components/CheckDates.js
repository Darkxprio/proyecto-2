import React, { useContext, useState } from 'react'
import styles from './CheckDates.module.css'
import { Context } from '../services/Memory'
import TableDates from './TableDates'

function CheckDates() {

  const optionSpeciality = ["", "Odontología", "Podología"]
  const optionProfesional = ["", "Nancy Alarcón", "Ana Cuadros", "Ponchi Merengueti"]
  const [searchResults, setSearchResults] = useState([])
  const [state] = useContext(Context);

  const [form, setForm] = useState({
    speciality: '',
    professional: '',
    date: new Date().toISOString().split('T')[0]
  })

  const handleClear = (e) => {
    e.preventDefault();
    setForm({
      speciality: '',
      professional: '',
      date: new Date().toISOString().split('T')[0]
    })
  }

  const handleSubmit = () => {
    const result = state.dates.filter(item => {
      if (date && (professional === '') && (speciality === '')) {
        return item.date === date;
      } else if (date && speciality && (professional === '')) {
        return item.date === date && item.speciality === speciality;
      } else if (date && professional && (speciality === '')) {
        return item.date === date && item.professional === professional;
      } else if (date && professional && speciality) {
        return (
          item.date === date &&
          item.professional === professional &&
          item.speciality === speciality
        );
      } else {
        return false;
      }})
    setSearchResults(result)
  }

  const onChange = (event, prop) => {
    setForm(state => ({...state, [prop]: event.target.value}))
  }

  const {speciality, professional, date} = form;

  return (
      <div className={styles.container}>
        <div className='flex items-center my-1 justify-between'>
          <h4 className={styles.h4}>ESPECIALIDAD</h4>
          <select 
              className={styles.input} 
              value={speciality} 
              onChange={(e) => onChange(e, 'speciality')}>
              {optionSpeciality.map(item => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className='flex items-center justify-between'>
          <h4 className={styles.h4}>PROFESIONAL</h4>
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
        <div className='flex items-center my-1 justify-between'>
          <h4 className={styles.h4}>FECHA</h4>
          <input 
          className={styles.input} 
          type='date' 
          value={date} 
          onChange={(e) => onChange(e, 'date')}/>
        </div>
        <div className={styles.btncontainer}>
          <button onClick={handleSubmit} className='button button--gray'>BUSCAR</button>
          <button onClick={handleClear} className='button button--red'>LIMPIAR</button>
        </div>
        <TableDates data={searchResults} />
      </div>
  )
}

export default CheckDates