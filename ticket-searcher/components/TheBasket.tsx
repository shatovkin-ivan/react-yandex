import Link from "next/link"
import Image from "next/image";

import cartIcon from '../public/icons/cart-icon.svg'
import styles from '../assets/styles/header.module.scss'

export const HeaderBasket = ({ count }) => {
    console.log(count);
    
    return (
        <Link href={'basket'} className={styles.header__cart}>
            {
                count && <span className={styles.header__count}>{ count }</span>
            }
            <Image 
                src={cartIcon}
                alt="Корзина"
                className={styles.header__basket}
            />
        </Link>
    )
}