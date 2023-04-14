import React from 'react'
import styles from './Menu.module.scss'
import home from '../../../public/img/home.png'
import mostLiked from '../../../public/img/mais-curtidas.png'
import mostSeen from '../../../public/img/mais-vistas.png'
import news from '../../../public/img/novas.png'
import surprise from '../../../public/img/surpreenda-me.png'


const Menu = () => {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt='' />
                <a href='#'>Start</a>
            </li>

            <li className={styles.menu__item}>
                <img src={mostSeen} alt='' />
                <a href='#'>Most Seen</a>
            </li>

            <li className={styles.menu__item}>
                <img src={mostLiked} alt='' />
                <a href='#'>Most Liked</a>
            </li>

            <li className={styles.menu__item}>
                <img src={news} alt='' />
                <a href='#'>New</a>
            </li>

            <li className={styles.menu__item}>
                <img src={surprise} alt='' />
                <a href='#'>Surprise me!</a>
            </li>
        </ul>
    </nav>
  )
}

export default Menu