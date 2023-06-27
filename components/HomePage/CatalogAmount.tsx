import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { createPortal } from 'react-dom'
import { useState } from 'react'

import minusIcon from '../../public/icons/minus.svg'
import plusIcon from '../../public/icons/plus.svg'
import removeIcon from '../../public/icons/remove.svg'
import { selectProductAmount } from '../../store/features/cart/selector'
import { cartActions } from '../../store/features/cart'
import styles from '../../assets/styles/HomePage/amount.module.scss'
import { BasketModal } from '../BasketPage/BasketModal'

export const CatalogAmount = ({ id, isBasket, needModal }) => {
    const dispatch = useDispatch()
    const productAmount = useSelector((state) => 
        selectProductAmount(state, id)
    )
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        
        <div className={`${styles.buttons}`}>
            <button type="button" className={styles.buttons__item} disabled={!productAmount} onClick={() => {
                
                if(needModal && productAmount > 1) dispatch(cartActions.decrement(id))
                if(needModal && productAmount === 1) setIsModalOpen((isOpen) => !isOpen)
                if (!needModal) dispatch(cartActions.decrement(id))
            }}>
                <Image
                    priority
                    src={ minusIcon }
                    alt="Добавить билет в корзину"
                />
            </button>
            <span className={styles.buttons__amount}>{productAmount}</span>
            <button type="button" className={styles.buttons__item} disabled={productAmount >= 30} onClick={() => dispatch(cartActions.increment(id))}>
                <Image
                    priority
                    src={ plusIcon }
                    alt="Убрать билет из корзины"
                />
            </button>
            {
                isBasket && <button className={ styles.buttons__remove } onClick={() => setIsModalOpen((isOpen) => !isOpen)}>
                    <Image
                        priority
                        src={ removeIcon }
                        alt="Убрать фильм из корзины"
                    />
                </button>
            }
            { 
                isModalOpen && createPortal(<BasketModal id={ id } isModalOpen={ isModalOpen } setIsModalOpen={ setIsModalOpen }/>, document.body) 
            }
        </div>
    )
}