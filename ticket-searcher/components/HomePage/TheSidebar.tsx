import styles from '../../assets/styles/HomePage/sidebar.module.scss'

export const TheSidebar = () => {
    return (
        <aside className={`${styles.sidebar} light`}>
            <p className={styles.sidebar__title}>
                Фильтр поиска
            </p>
        </aside>
    )
}