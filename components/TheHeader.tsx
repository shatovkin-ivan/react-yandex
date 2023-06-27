'use client'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { HeaderBasket } from './TheBasket'
import imgSrc from '../public/images/logo.svg'
import { RootState } from '../store/store'
import { CardItems } from '../types/types'

import styles from '../assets/styles/header.module.scss'

type SumCard = number

export const TheHeader = () => {

    const cart = useSelector((state :RootState) => state.cart)

    const [sum, setSum] = useState<SumCard>()

    const calcSum = (obj: CardItems) => {
        if (Object.keys(obj).length) {
            return {
                sumValue: Object.values(obj).reduce((a, b) => a + b),
            } 
        } 
    }
    
    useEffect(() => {
        const { sumValue } = calcSum(cart) || {}
        setSum(sumValue)
    }, [cart])
    
    
    return (
        <header className={`${styles.header} dark`}>
            <div className="container">
                <div className={styles.header__wrap}>
                    <Link className={styles.header__logo} href={'/'}>
                        <Image
                            src={imgSrc}
                            alt="Логотип Билетопоиска"
                        />
                    </Link>
                    <HeaderBasket count={sum} />
                </div>
            </div>
        </header>
    )
}