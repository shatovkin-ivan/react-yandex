import styles from '../../assets/styles/HomePage/sidebar.module.scss'

import { CatalogDropFilter } from './CatalogDropFilter'
import { CatalogSearch } from './CatalogSearch'

export const TheSidebar = () => {
    return (
        <aside className={`${styles.sidebar} light`}>
            <p className={styles.sidebar__title}>
                Фильтр поиска
            </p>
            <CatalogSearch title={'Название'}/>
            <CatalogDropFilter title={'Жанр'}/>
            <CatalogDropFilter title={'Кинотеатр'}/>
        </aside>

        
    )
}