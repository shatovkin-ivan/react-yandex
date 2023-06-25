import styles from '../../assets/styles/HomePage/sidebar.module.scss'

export const CatalogSearch = ({title}) => {
    return (
        <div className={styles.sidebar__filter}>
            <p className={styles.sidebar__subtitle}>
                {title}
            </p>
            <input className="input" type="text" placeholder='Введите значение'/>
        </div>
    )
}