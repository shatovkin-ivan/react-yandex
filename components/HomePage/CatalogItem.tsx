import Link from 'next/link'

import styles from '../../assets/styles/HomePage/card.module.scss'
import { CatalogAmount } from './CatalogAmount'


export const CatalogItem = ({ film, isBasket }) => {
    return (
        <li className={`${styles.filmCard} light`}>
            <div className={styles.filmCard__poster}>
                <img src={film.posterUrl} alt="" />
            </div>
            <div className={styles.filmCard__info}>
                <Link href={`film/${film.id}`}>
                    <p className={styles.filmCard__title}>
                        {film.title}
                    </p>
                </Link>
                <p className={styles.filmCard__genre}>
                    {film.genre}
                </p>
            </div>
            <CatalogAmount id={film.id} isBasket={isBasket} needModal={true}/>
        </li>
    )
}