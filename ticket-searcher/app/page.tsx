import styles from '../assets/styles/HomePage/template.module.scss'

import { TheSidebar } from '../components/HomePage/TheSidebar'
import { TheCatalog } from '../components/HomePage/TheCatalog'

export default function Home () {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__wrap}>
                    <TheSidebar />
                    <TheCatalog />
                </div>
            </div>
        </section>
    )
}