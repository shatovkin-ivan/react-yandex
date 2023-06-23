import styles from '../../assets/styles/HomePage/amount.module.scss'

import Image from 'next/image'
import minusIcon from '../../public/icons/minus.svg'
import plusIcon from '../../public/icons/plus.svg'

import { useDispatch, useSelector } from 'react-redux'
import { selectProductAmount } from '../../store/features/cart/selector'
import { cartActions } from '../../store/features/cart'

export const CatalogAmount = ({id}) => {
    const dispatch = useDispatch()
    const productAmount = useSelector((state) => 
        selectProductAmount(state, id)
    )

    return (
        <div className={styles.buttons}>
            <button type="button" className={styles.buttons__item} disabled={!productAmount} onClick={() => dispatch(cartActions.decrement(id))}>
                <Image
                    priority
                    src={ minusIcon }
                    alt="Добавить билет в корзину"
                />
            </button>
            <span className={styles.buttons__amount}>{productAmount}</span>
            <button type="button" className={styles.buttons__item} onClick={() => dispatch(cartActions.increment(id))}>
                <Image
                    priority
                    src={ plusIcon }
                    alt="Убрать билет из корзины"
                />
            </button>
        </div>
    )
}