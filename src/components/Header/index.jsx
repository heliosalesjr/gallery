import React from 'react'
import logo from '../../../public/img/logo.png'
import search from '../../../public/img/search.png'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.headerz}>
        <img src={logo} alt="Page Logo" />
        <div className={styles.headerz__container}>
            <input type="text" className={styles.headerz__input} placeholder='What are you looking for?'/>
            <img src={search} alt="magnifying glass" />
        </div>
    </header>
  )
}

export default Header