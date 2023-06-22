import styles from '../../assets/styles/HomePage/card.module.scss'

export const CatalogItem = ({film}) => {
    return (
        <li className={`${styles.filmCard} light`}>
            <div className={styles.filmCard__poster}>
                <img src={film.posterUrl} alt="" />
            </div>
            <div className={styles.filmCard__info}>
                <p className={styles.filmCard__title}>
                    {film.title}
                </p>
                <p className={styles.filmCard__genre}>
                    {film.genre}
                </p>
            </div>
            <div className={styles.filmCard__buttons}>
                
            </div>
        </li>
    )
}