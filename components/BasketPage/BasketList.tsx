import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { CatalogItem } from '../HomePage/CatalogItem'
import styles from '../../assets/styles/BasketPage/basket.module.scss'
import { RootState } from '../../store/store'
import { CardItems } from '../../types/types'

export const BasketList = () => {
  type SumCard = number

  const [filteredFilms, setFilteredFilms] = useState()
  const [sum, setSum] = useState<SumCard>()
  const cart = useSelector((state: RootState) => state.cart);
  const films = useSelector((state: RootState) => state.films);
  const ids =  Object.keys(cart)
  const calcSum = (obj: CardItems) => {
    if (Object.keys(obj).length) {
      return {
        sumValue: Object.values(obj).reduce((a, b) => a + b),
      } 
    } 
  }
  useEffect(() => {
    const filteredFilms = films.filter((film) => {
      if (ids.indexOf(film.id) >= 0) return film
    })
    setFilteredFilms(filteredFilms)
    const { sumValue } = calcSum(cart) || {}
    setSum(sumValue)
  }, [cart])

  return (
    <>
      <ul className={styles.basket}>
        {
          filteredFilms && filteredFilms.map(film => {
            return (
              <CatalogItem key={film.id} film={film} isBasket={true}/>
            )
          })
        }
        {
          !sum && <span>Корзина пуста</span>
        }
      </ul>
      <div className={`${styles.basket__count} light`}>
        <p className={styles.basket__subtitle}>
          Итого билетов:
        </p>
        <span className={styles.basket__val}>
          {sum}
        </span>
      </div>
    </>
  ) 
}