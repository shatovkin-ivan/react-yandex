'use client'

import { BasketList } from "../../components/BasketPage/BasketList"
import styles from '../../assets/styles/BasketPage/basket.module.scss'

export default function Card () {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <BasketList />
            </div>
        </section>
    ) 
}