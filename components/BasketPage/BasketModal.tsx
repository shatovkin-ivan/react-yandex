import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'

import { cartActions } from '../../store/features/cart'

import styles from '../../assets/styles/BasketPage/modal.module.scss'


export const BasketModal =({id, setIsModalOpen}) => {
    const dispatch = useDispatch()
    return (
        <div className={`${styles.modal} wrap light`}>
            <div className={styles.modal__wrap}>
                <p>Удаление билета</p>
                <button className={ styles.modal__close } onClick={() => {
                    setIsModalOpen((isOpen) => !isOpen)
                }}></button>
            </div>
            <p className={styles.modal__content}>Вы уверены, что хотите удалить билет?</p>
            <div className={styles.modal__buttons}>
                <button className={`${styles.modal__button} ${styles.modal__button_accept}`} onClick={() => {
                    setIsModalOpen((isOpen) => !isOpen)
                    dispatch(cartActions.reset(id))
                }
                    
                    }>Да</button>
                <button className={styles.modal__button} onClick={() => {
                    setIsModalOpen((isOpen) => !isOpen)
                }}>Нет</button>
            </div>
            {createPortal(<div className={styles.overlay}></div>, document.body)}
        </div>
    )
}