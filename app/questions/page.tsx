'use client'

import React, { useState } from 'react'
import styles from '../../assets/styles/QustionsPage/questions.module.scss'
import questionsArrow from '../../public/icons/questionsArrow.svg'
import Image from 'next/image'

export const GroupContext = React.createContext(false)

export const MenuDropDown = ({children}) => {
    return <div className={styles.questions__list}>{children}</div>
}

MenuDropDown.Group = function MenuGroup ({children, title}) {
    
    const [isActive, setIsActive] = useState()

    return (
        <GroupContext.Provider value={{isActive, setIsActive}}>
            <div className={ `${styles.questions__item} light` } onClick={() => setIsActive((!isActive))}>
                <p className={ styles.questions__subtitle }>{title}</p>
                <span className={ `${styles.questions__toggle} ${isActive ? styles.questions__toggle_open : ''}` }>
                    <Image 
                        src={questionsArrow} 
                        alt="arrow"
                    />
                </span>
                <div className={styles.questions__content}>
                    {isActive && <div className="">{children}</div>}
                </div>
            </div>
            
         </GroupContext.Provider>
    )   
}

MenuDropDown.Item = function MenuItem ({ title }) {
    return  <div className={styles.test}>{title}</div>
}

export default function Question() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.questions}>
                    <div className={`${styles.questions__head} light`}>
                        <h1 className={`${styles.questions__title}`}>Вопросы-ответы</h1>
                    </div>
                    <MenuDropDown>
                        <MenuDropDown.Group title="Что такое Билетопоиск?">
                            <MenuDropDown.Item title="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."/>
                        </MenuDropDown.Group>
                        <MenuDropDown.Group title="Какой компании принадлежит Билетопоиск?">
                            <MenuDropDown.Item title="C 15 октября 2013 года сервис принадлежит компании «Яндекс»"/>
                        </MenuDropDown.Group>
                    
                        <MenuDropDown.Group title="Как купить билет на Билетопоиск?">
                            <MenuDropDown.Item title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ipsam."/>
                        </MenuDropDown.Group>
                    
                        <MenuDropDown.Group title="Как оставить отзыв на Билетопоиск?">
                            <MenuDropDown.Item title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ipsam."/>
                        </MenuDropDown.Group>
                    </MenuDropDown>
                </div>
            </div>
        </section>
        
    )
}

