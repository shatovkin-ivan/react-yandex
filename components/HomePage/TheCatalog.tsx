'use client'

import { CatalogItem } from "./CatalogItem"
import styles from '../../assets/styles/HomePage/catalog.module.scss'

export const TheCatalog = ({ data, loading }) => {

    return (
        <ul className={styles.catalog}>
            {
                data && data.map((filmItem) => {
                    return (
                        <CatalogItem key={filmItem.id} film={filmItem} isBasket={false}/>
                    )
                })
            }
            {
                loading && <div className=""> Loading...</div>
            }
        </ul>
    )
}