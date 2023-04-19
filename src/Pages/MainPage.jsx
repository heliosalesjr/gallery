import React from 'react'
import styles from './MainPage.module.scss'
import Header from '../components/Header'
import Menu from '../components/Menu'
import bannerImage from '../../public/img/Banner.png'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Trending from '../components/Trending'

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
        

            <div className={styles.gallery}>
                <Gallery />
                <Trending />
                
            </div>
        </main>
       <Footer /> 
    </>
  )
}

export default MainPage