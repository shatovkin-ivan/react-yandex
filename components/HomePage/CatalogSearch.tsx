import styles from '../../assets/styles/HomePage/sidebar.module.scss'

export const CatalogSearch = ({ title, setActiveName }) => {
    return (
        <div className={styles.sidebar__filter}>
            <p className={styles.sidebar__subtitle}>
                {title}
            </p>
            <input className="input" type="text" onInput={(e) => setActiveName(e.target.value)} placeholder='Введите значение'/>
        </div>
    )
}