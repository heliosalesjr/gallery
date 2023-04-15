import React from 'react'
import styles from './MainPage.module.scss'
import Header from '../components/Header'
import Menu from '../components/Menu'
import bannerImage from '../../public/img/banner.png'
import Gallery from '../components/Gallery'

const MainPage = () => {
  return (
    <>
        <Header />

        <main>
            <section className={styles.principal}>
                <Menu />
                <div className={styles.principal__imagem}>
                    <h1>Start the Riot and destroy 200 years of culture</h1>
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