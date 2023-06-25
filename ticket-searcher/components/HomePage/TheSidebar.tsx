'use client'

import styles from '../../assets/styles/HomePage/sidebar.module.scss'

import { CatalogSearch } from './CatalogSearch'

import React, { useState, useContext, useCallback } from 'react'

import Image from 'next/image'
import arrowIcon from '../../public/icons/arrow-icon.svg'

const MenuContext = React.createContext(false)
const GroupContext = React.createContext(false)

const MenuDropDown = ({ children }) => {
    const [activeGroup, setActiveGroup] = useState()

    const switchGroup = useCallback((title) => {
        setActiveGroup(activeTitle => activeTitle === title ? undefined : title)
    }, [])

    return <MenuContext.Provider value={{activeGroup, setActiveGroup, switchGroup}}>{children}</MenuContext.Provider>
}

MenuDropDown.Group = function MenuGroup ({ children, title, placeholder }) {
    const [currentValue, setCurrentValue] = useState()

    const { activeGroup, setActiveGroup } = useContext(MenuContext)
    return (
        <GroupContext.Provider value={{currentValue, setCurrentValue}}>
            <div className={styles.sidebar__filter} >
                <p className={styles.sidebar__subtitle}>{ title }</p>
                <button type='button' className="input" onClick={() => setActiveGroup(title)}>{!currentValue ? placeholder : currentValue}
                    <span className={`${styles.sidebar__arrow} ${activeGroup === title ? 'active' : ''}`}>
                        <Image
                            src={arrowIcon}
                            alt="Логотип Билетопоиска"
                            role="presentation"
                        />
                    </span>
                </button>
                { activeGroup === title && <div className={styles.sidebar__droplist}>{children}</div>}
            </div>
        </GroupContext.Provider>
    )
}

MenuDropDown.Item = function MenuItem ({ title }) {
    const { switchGroup } = useContext(MenuContext)
    const { setCurrentValue } = useContext(GroupContext)
    return (
        <p className={styles.sidebar__item} onClick={() => {
            setCurrentValue((title))
            switchGroup((title))
        }}>{title}</p>
    )
}

export const TheSidebar = () => {
    return (
        <aside className={`${styles.sidebar} light`}>
            <p className={styles.sidebar__title}>
                Фильтр поиска
            </p>
            <CatalogSearch title={'Название'}/>
            <MenuDropDown>
                <MenuDropDown.Group title="Жанр" placeholder="Выберите жанр">
                    <MenuDropDown.Item title="Комедия"/>
                    <MenuDropDown.Item title="Horror"/>
                </MenuDropDown.Group>
                <MenuDropDown.Group title="Кинотеатр" placeholder="Выберите кинотеатр">
                    <MenuDropDown.Item title="Кинотеатр 1"/>
                    <MenuDropDown.Item title="Кинотеатр 2"/>
                </MenuDropDown.Group>
           </MenuDropDown>
        </aside>
    )
}