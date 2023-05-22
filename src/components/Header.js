import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import SVGLogo from '../img/PIE-DIENTE.svg'
import SVGTexto from '../img/CENTRO DENTAL - PODOLOGICO.svg'

function Header() {

  return (
    <div className={styles.container}>
        <Link to={'/'} className='flex m-2 items-center'>
            <img className='h-12' src={SVGLogo} alt='logo' />
            <img className='h-20' src={SVGTexto} alt='logo' />
        </Link>
        <h2 className={styles.h2}>Panel de Control</h2>
    </div>
  )
}

export default Header
