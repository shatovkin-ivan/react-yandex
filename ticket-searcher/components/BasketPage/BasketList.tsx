import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { CatalogItem } from '../HomePage/CatalogItem'
import styles from '../../assets/styles/BasketPage/basket.module.scss'
import { RootState } from '../../store/store'

export const BasketList = () => {

  const [filteredFilms, setFilteredFilms] = useState()
  const cart = useSelector((state: RootState) => state.cart);
  const films = useSelector((state: RootState) => state.films);
  const ids =  Object.keys(cart)
  useEffect(() => {
    const filteredFilms = films.filter((film) => {
      if (ids.indexOf(film.id) >= 0) return film
    })
    setFilteredFilms(filteredFilms)
  }, [])

  return (
    <ul className={styles.basket}>
      {
        filteredFilms && filteredFilms.map(film => {
          return (
            <CatalogItem key={film.id} film={film} isBasket={true}/>
          )
        })
      }
    </ul>
  ) 
}