import styles from '../../assets/styles/FilmPage/reviews.module.scss'
import { useEffect, useState } from 'react'

import defaultAvatar from '../../public/images/default-avatar.svg'
import Image from 'next/image'

export const FilmReviews = ({film}) => {
    const [reviews, setReviews] = useState()

    useEffect(() => {
        fetch(`http://localhost:3001/api/reviews?movieId=${film.id}`)
        .then(response =>  response.json())
        .then(data => {
        setReviews(data)
        })
    }, [])

    return (
        <section className={styles.reviews}>
            <div className="container">
                <ul className={styles.reviews__list}>
                    {
                        reviews && reviews.map((review) => {
                            return (
                                <li key={review.id} className={`${styles.reviews__item} light`}>
                                    <Image 
                                        src={review.img ? review.img : defaultAvatar}
                                        alt={review.name}
                                    />
                                    <div className={styles.reviews__info}>
                                        <p className={styles.reviews__subtitle}>
                                            {review.name}
                                        </p>
                                        <p className={styles.reviews__text}>
                                            {review.text}
                                        </p>
                                    </div>
                                    <div className={styles.reviews__rating}>
                                        <span>
                                            Оценка:
                                        </span>
                                        {review.rating}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}