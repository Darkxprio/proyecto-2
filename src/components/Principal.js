import React from 'react'
import SVGLogo from '../img/PIE-DIENTE-GRAY.svg'
import SVGTexto from '../img/CENTRO DENTAL - PODOLOGICO.svg'
import styles from './Principal.module.css'

function Principal() {
  return (
    <div className={styles.principal}>
        <img src={SVGLogo} alt='Logo' />
        <img src={SVGTexto} alt='Texto' />
    </div>
  )
}

export default Principal