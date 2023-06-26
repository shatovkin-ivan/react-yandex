import styles from '../../assets/styles/FilmPage/card.module.scss'

import { CatalogAmount } from '../HomePage/CatalogAmount'

export const FilmCard = ({ film }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.card} light`}>
        <img className={styles.card__image} src={film.posterUrl} alt={film.id}/>
        <div className={styles.card__info}>
          <div className={styles.card__buttons}>
            <CatalogAmount id={film.id} isBasket={false}/>
          </div>
          <h1 className={styles.card__title}>{film.title}</h1>
          <ul className={styles.card__list}>
            <li className={styles.card__item}>
              <p className={styles.card__subtitle}>Жанр:</p>
              <p className={styles.card__data}>{film.genre}</p>
            </li>
            <li className={styles.card__item}>
              <p className={styles.card__subtitle}>Год выпуска: </p>
              <p className={styles.card__data}>{film.releaseYear}</p>
            </li>
            <li className={styles.card__item}>
              <p className={styles.card__subtitle}>Рейтинг: </p>
              <p className={styles.card__data}>{film.rating}</p>
            </li>
            <li className={styles.card__item}>
              <p className={styles.card__subtitle}>Режисёр: </p>
              <p className={styles.card__data}>{film.director}</p>
            </li>
          </ul>
          <p className={styles.card__heading}>
            Описание
          </p>
          <p className={styles.card__description}>
            {film.description}
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}