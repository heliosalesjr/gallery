import React from 'react'
import styles from './Tags.modules.scss'

export default function Tags() {
  return (
    <div className={styles.tags}>
        <p>Filter by tags</p>
        <ul className={styles.tags__lista}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
  )
}
