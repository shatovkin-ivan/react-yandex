'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filmsActions } from '../../store/features/films'
import { CatalogItem } from "./CatalogItem"
import { RootState } from '../../store/store'
import styles from '../../assets/styles/HomePage/catalog.module.scss'

export const TheCatalog = () => {

    const dispatch = useDispatch()
    const films = useSelector((state: RootState) => state.films)

    useEffect(() => {
        fetch(`http://localhost:3001/api/movies`)
        .then((response) => response.json())
        .then((actualData) => {
            if (!films.length) dispatch(filmsActions.getData(actualData))
        } )
    }, []);
    
    return (
        <ul className={styles.catalog}>
            {
                films && films.map((filmItem) => {
                    return (
                        <CatalogItem key={filmItem.id} film={filmItem} isBasket={false}/>
                    )
                })
            }
        </ul>
    )
}