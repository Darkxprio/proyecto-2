import React, { useState } from 'react'
import styles from './AddDates.module.css'

function AddDates() {


  
  const [selectSpeciality, setSelectSpeciality] = useState('')
  const optionSpeciality = ["", "Odontología", "Podología"]
  const optionProfesional = ["", "Nancy Alarcón", "Ana Cuadros", "Ponchi Merengueti"]
  const optionType = ["", "Consulta", "Operación", "Chequeo"]

  const handleSpeciality = (e) => {
    setSelectSpeciality(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, selectSpeciality);
  }

  const handleClear = (e) => {
    e.preventDefault();
    setName('')
    setAge('')
    setNumber('')
    setDate('')
    setSelectSpeciality('')
  }

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container1}>
        <div className='flex items-center my-1'>
          <h4 className={styles.h4}>ESPECIALIDAD</h4>
          <select className={styles.input2} value={selectSpeciality} onChange={handleSpeciality}>
            {optionSpeciality.map(item => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className='flex items-center'>
          <h4 className={styles.h4}>PROFESIONAL</h4>
          <select className={styles.input2}>
            {optionProfesional.map(item => {
              if(selectSpeciality === 'Odontología' && item === 'Ana Cuadros'){
                return null;
              }
              if(selectSpeciality === 'Podología' && (item === 'Ana Cuadros' || item === 'Ponchi Merengueti') ){
                return null;
              }
              return <option key={item}>{item}</option>
            })}
          </select>
        </div>
        <div className='flex items-center my-1'>
          <h4 className={`${styles.h4} pr-6`}>ATENCION</h4>
          <select className={styles.input2}>
            {optionType.map(item => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className='flex items-center my-1'>
          <h4 className={`${styles.h4} pr-8`}>DETALLES</h4>
          <textarea className={`${styles.input2} resize-none`}></textarea>
        </div>
      </div>
      <div className={styles.container2}>
        <div className='flex items-center my-1'>
        <h4 className={`${styles.h4} pr-12`}>FECHA</h4>
          <input className={styles.input2} type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className='flex items-center my-1'>
        <h4 className={`${styles.h4} pr-6`}>HORARIO</h4>
          <div>
            {/* <button className='button button--yellow mr-2'>8:00 AM</button>
            <button className='button button--yellow mr-2'>8:30 AM</button> */}



          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <div className='flex items-center my-1'>
          <h4 className={`${styles.h4} pr-9`}>NOMBRE</h4>
          <input className={styles.input3} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex items-center my-1'>
          <h4 className={`${styles.h4} pr-14`}>EDAD</h4>
          <input className={styles.input3} type='number' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className='flex items-center my-1'>
          <h4 className={`${styles.h4} pr-8`}>CELULAR</h4>
          <input className={styles.input3} type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
      </div>
      <div className={styles.btncontainer}>
        <button className='button button--gray' type='submit'>AGENDAR</button>
        <button className='button button--red' onClick={handleClear}>LIMPIAR</button>
      </div>
    </form>
  )
}

export default AddDates