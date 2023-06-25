'use client'

import styles from '../assets/styles/header.module.scss'

import { HeaderBasket } from './TheBasket'

import Image from 'next/image'
import imgSrc from '../public/images/logo.svg'
import Link from 'next/link'

import { useSelector } from 'react-redux'

export const TheHeader = () => {

    const cart = useSelector((state) => state.cart)

    console.log(cart);
    
    return (
        <header className={`${styles.header} dark`}>
            <div className="container">
                <div className={styles.header__wrap}>
                    <Link className={styles.header__logo} href={'/'}>
                        <Image
                            src={imgSrc}
                            alt="Логотип Билетопоиска"
                            role="presentation"
                        />
                    </Link>
                    <HeaderBasket />
                </div>
            </div>
        </header>
    )
}