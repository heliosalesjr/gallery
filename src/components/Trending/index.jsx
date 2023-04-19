import React from 'react'
import trendingPics from './trending.json'
import styles from './Trending.module.scss';

export default function Trending() {
  return (
    <aside className={styles.trending}>
        <h2>Trending</h2>
        <ul className={styles.trending__imagens}>
            {trendingPics.map((trendingPic) => {
                return (
                    <li key={trendingPic.id}>
                        <img src={trendingPic.path} alt={trendingPic.alt} />
                    </li>
                )
                })}
        
        </ul>

        <button>See more</button>
    </aside>
  )
}
