import React, { useContext, useEffect, useState } from 'react'
import styles from './AddDates.module.css'
import { Context } from '../services/Memory'

function AddDates() {
  const [selectedOption, setSelectedOption] = useState('nuevo');
  const optionSpeciality = ["", "Odontología", "Podología"]
  const optionProfesional = ["", "Nancy Alarcón", "Ana Cuadros", "Ponchi Merengueti"]
  const optionType = ["", "Consulta", "Operación", "Control"]
  const [nameCatch, setNameCatch] = useState('')
  const [ageCatch, setAgeCatch] = useState('')
  const [phoneCatch, setPhoneCatch] = useState('')

  const [form, setForm] = useState({
    speciality: '',
    professional: '',
    atention: '',
    details: '',
    date: new Date().toISOString().split('T')[0],
    name: '',
    age: '',
    phone: ''
  })

  const [state, dispatch] = useContext(Context);

  const NAMES = Object.values(state.info);

  const onChange = (event, prop) => {
    setForm(state => ({...state, [prop]: event.target.value}))
  }

  const handleChange = (e) => {
    const selectedName = e.target.value;
    const selectedItem = NAMES.find(item => item.name === selectedName);
    if (selectedItem) {
      setNameCatch(selectedItem.name);
      setAgeCatch(selectedItem.age);
      setPhoneCatch(selectedItem.phone);
    } else {
      setNameCatch('');
      setAgeCatch('');
      setPhoneCatch('');
    }
  }

  const clean = () =>  {
    setNameCatch("")
    setAgeCatch("")
    setPhoneCatch("")
    setForm({
    speciality: '',
    professional: '',
    atention: '',
    details: '',
    date: new Date().toISOString().split('T')[0],
    name: '',
    age: '',
    phone: '',
  })}

  const handleClear = (e) => {
    e.preventDefault();
    clean();
  }

  const scheduleNew = (e) => {
    if(form.speciality === '' || form.professional === '' || form.atention === '') {
      console.log("No se puede procesar, falta llenar datos importantes")
    } else {
    dispatch({type: 'scheduleNew', 
          payload: {
            name: form.name,
            age: form.age,
            phone: form.phone,
            speciality: form.speciality, 
            professional: form.professional, 
            atention: form.atention,
            details: form.details,
            date: form.date
          }})
    clean();
    e.preventDefault();
  }}

  const scheduleOld = (e) => {
    if(form.speciality === '' || form.professional === '' || form.atention === '') {
      console.log("No se puede procesar, falta llenar datos importantes")
    } else {
    dispatch({type: 'scheduleOld', 
          payload: {
            name: nameCatch,
            phone: phoneCatch,
            age: ageCatch,
            speciality: form.speciality, 
            professional: form.professional, 
            atention: form.atention,
            details: form.details,
            date: form.date
          }
          })
    clean();
    e.preventDefault();
  }}

  useEffect(()=> {
    setNameCatch('')
    setAgeCatch('')
    setPhoneCatch('')
  }, [form.speciality])

  const {speciality, professional, atention, details, date, name, age, phone} = form;

  return (
    <form>
      <div className={styles.container1}>
        <div className='flex items-center my-1 justify-between'>
          <h4 className={styles.h4}>ESPECIALIDAD</h4>
          <select 
            required
            className={styles.input} 
            value={speciality} 
            onChange={(e) => onChange(e , 'speciality')}>
            {optionSpeciality.map(item => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
        <div className='flex items-center justify-between'>
          <h4 className={styles.h4}>PROFESIONAL</h4>
          <select 
            required
            className={styles.input}
            value={professional} 
            onChange={(e) => onChange(e , 'professional')}>
            {optionProfesional.map(item => {
              if(speciality === 'Odontología' && item === 'Ana Cuadros'){
                return null;
              }
              if(speciality === 'Podología' && (item === 'Ana Cuadros' || item === 'Ponchi Merengueti') ){
                return null;
              }
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
        </div>
        <div className='flex items-center my-1 justify-between'>
          <h4 className={styles.h4}>ATENCION</h4>
          <select 
            required
            className={styles.input}
            value={atention}
            onChange={(e) => onChange(e , 'atention')}>
              {optionType.map(item => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
        <div className='flex items-center my-1 justify-between'>
          <h4 
            className={styles.h4}>DETALLES</h4>
          <textarea 
            className={`${styles.input} resize-none`}
            value={details}
            onChange={(e) => onChange(e , 'details')}>
            </textarea>
        </div>
      </div>
      <div className={styles.container2}>
        <div className='flex items-center my-1 justify-between'>
        <h4 className={styles.h4}>FECHA</h4>
          <input 
          className={styles.input} 
          type='date' 
          value={date} 
          onChange={(e) => onChange(e , 'date')}/>
        </div>
        <div className='flex items-center my-1 justify-between'>
        <h4 className={styles.h4}>HORARIO</h4>
          <div>
            PENDIENTE DE HACER ESTA MOÑA, GAAAAAAAAAAA !
          </div>
        </div>
      </div>
      <div>
        <div className={styles.radiocontainer}>
          <label>
            <input
              className='mr-2'
              type="radio"
              value="nuevo"
              checked={selectedOption === 'nuevo'}
              onChange={(e) => setSelectedOption(e.target.value)}/>
            PACIENTE NUEVO
          </label>
          <label>
            <input
              className='mr-2'
              type="radio"
              value="antiguo"
              checked={selectedOption === 'antiguo'}
              onChange={(e) => setSelectedOption(e.target.value)}/>
            PACIENTE ANTIGUO
          </label>
        </div>
        {selectedOption === 'nuevo' ? (
          <div className={styles.containernew}>
            <div className='flex items-center my-1 justify-between'>
              <h4 className={styles.h4}>NOMBRE</h4>
              <input 
              className={styles.input} 
              value={name} 
              onChange={(e) => onChange(e , 'name')}/>
            </div>
            <div className='flex items-center my-1 justify-between'>
              <h4 className={styles.h4}>EDAD</h4>
              <input 
              className={styles.input} 
              type='number' 
              value={age} 
              onChange={(e) => onChange(e , 'age')}/>
            </div>
            <div className='flex items-center my-1 justify-between'>
              <h4 className={styles.h4}>CELULAR</h4>
              <input 
              className={styles.input} 
              type='number' 
              value={phone} 
              onChange={(e) => onChange(e , 'phone')}/>
            </div>
            <div className={styles.btncontainer1}>
              <button className='button button--gray' onClick={scheduleNew}>AGENDAR</button>
              <button className='button button--red' onClick={handleClear}>LIMPIAR</button>
            </div>
          </div>
        ) : 
          <div className={styles.containerold}>
            <div className='flex items-center justify-between'>
              <h4 className={styles.h4}>PACIENTE</h4>
              <select
                  className={styles.input}
                  value={nameCatch} 
                  onChange={handleChange}>
                  <option key={''} value=''>Seleccione</option>
                  {NAMES
                  .filter(item => item.speciality.includes(speciality))
                  .map(item => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <div className='flex items-center my-1 justify-between'>
                <h4 className={styles.h4}>NOMBRE</h4>
                <input 
                disabled={true}
                className={styles.inputblock} 
                value={nameCatch} 
                onChange={(e) => onChange(e , 'name')}/>
              </div>
              <div className='flex items-center my-1 justify-between'>
                <h4 className={styles.h4}>EDAD</h4>
                <input 
                disabled={true}
                className={styles.inputblock} 
                type='number' 
                value={ageCatch} 
                onChange={(e) => onChange(e , 'age')}/>
              </div>
              <div className='flex items-center my-1 justify-between'>
                <h4 className={styles.h4}>CELULAR</h4>
                <input 
                disabled={true}
                className={styles.inputblock} 
                type='number' 
                value={phoneCatch} 
                onChange={(e) => onChange(e , 'phone')}/>
              </div>
            </div>
            <div className={styles.btncontainer2}>
              <button className='button button--gray' onClick={scheduleOld}>AGENDAR</button>
              <button className='button button--red' onClick={handleClear}>LIMPIAR</button>
            </div>
          </div>}
      </div>

    </form>
  )
}

export default AddDates