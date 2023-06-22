'use client'

import styles from '../../assets/styles/HomePage/catalog.module.scss'

import { useState, useEffect } from "react"
import { CatalogItem } from "./CatalogItem"

export const TheCatalog = () => {
    const [films, setFilms] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/api/movies')
            const res = await response.json()

            setFilms(res)
        }
        fetchData();
    }, []);

    return (
        <ul className={styles.catalog}>
            {
                films && films.map((filmItem) => {
                    return (
                        <CatalogItem key={filmItem.id} film={filmItem}/>
                    )
                })
            }
        </ul>
    )
}