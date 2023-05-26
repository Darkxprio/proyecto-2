import React from 'react'
import styles from './ClinicHistory.module.css'

function ClinicHistory() {
  return (
    <div className={styles.card}>
        <h1 className='text-center mb-2'>INFORMACION PERSONAL</h1>
        <div className='grid grid-cols-2'>
            <div>
                <div className='flex'>
                    <h2>Nombre:</h2><input />
                </div>
                <div className='flex'>
                    <h2>Edad:</h2><input />
                </div>
                <div className='flex'>
                    <h2>Sexo:</h2><input />
                 </div>
                <div className='flex'>
                    <h2>Teléfono:</h2><input />
                </div>
            </div>
            <div>
                <div className='flex'>
                    <h2>Peso:</h2><input />
                </div>
                <div className='flex'>
                    <h2>Talla:</h2><input />
                </div>
                <div className='flex'>
                    <h2>Grupo Sanguineo:</h2><input />
                </div>
            </div>
        </div>
            <div>
                <button>EDITAR</button>
            </div>
    </div>
  )
}

export default ClinicHistory