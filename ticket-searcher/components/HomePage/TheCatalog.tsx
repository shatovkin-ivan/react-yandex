'use client'

import styles from '../../assets/styles/HomePage/catalog.module.scss'

import { useState, useEffect } from "react"
import { CatalogItem } from "./CatalogItem"

import { useGetMoviesQuery } from '../../store/services/movieApi'

export const TheCatalog = () => {
    const { data, isLoading, error } = useGetMoviesQuery()

    return (
        <ul className={styles.catalog}>
            {
                data && data.map((filmItem) => {
                    return (
                        <CatalogItem key={filmItem.id} film={filmItem}/>
                    )
                })
            }
        </ul>
    )
}