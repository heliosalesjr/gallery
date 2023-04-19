import React from 'react'
import open from '../../../../public/img/open.png'
import favorito from '../../../../public/img/favorito.png'


export default function Cards({itens, styles}) {
  return (
    <ul className={styles.gallery__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.gallery__card}>
            <img
              className={styles.gallery__imagem}
              src={item.imagem}
              alt={item.titulo}
            />
            <p className={styles.gallery__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={favorito} alt="ícone coração de curtir" />
                <img src={open} alt="ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
