import React from 'react'
import styles from './MainPage.module.scss'
import Header from '../components/Header'
import Menu from '../components/Menu'
import bannerImage from '../../public/img/Banner.png'
import Gallery from '../components/Gallery'

const MainPage = () => {
  return (
    <>
        <Header />

        <main>
            <section className={styles.principal}>
                <Menu />
                <div className={styles.principal__imagem}>
                    <h1>The most beautiful creatures of the oceans</h1>
                    <img src={bannerImage} alt='main image' />
                </div>
            </section>
        </main>

        <div>
            <Gallery />
        </div>
        
    </>
  )
}

export default MainPage