import styles from '../assets/styles/footer.module.scss'

import Link from 'next/link'

export const TheFooter = () => {
    return (
        <footer className={`${styles.footer} dark`}>
            <div className="container">
                <nav className={`${styles.footer__nav} ${styles.navigation}`}>
                    <ul className={styles.navigation__list}>
                        <li className={styles.navigation__item}>
                            <Link href="questions">
                                Вопросы-ответы
                            </Link>
                        </li>
                        <li className={styles.navigation__item}>
                            <Link href="about">
                                О нас
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}