import React from 'react'
import Tags from '../Tags'
import fotos from './jellyImages.json'
import styles from "./Gallery.module.scss"
import Cards from "./Cards"

const Gallery = () => {
  return (
    <section className={styles.gallery}>
        <h2>Browse through the gallery</h2>
        <Tags />
        <Cards itens={fotos} styles={styles} />
    </section>
  )
}

export default Gallery
