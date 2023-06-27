'use client'

import { useSelector, useDispatch } from "react-redux"
import React, { useState, useContext, useCallback, useEffect } from 'react'
import Image from 'next/image'

import styles from '../../assets/styles/HomePage/sidebar.module.scss'
import { CatalogSearch } from './CatalogSearch'
import arrowIcon from '../../public/icons/arrow-icon.svg'
import { filterActions } from "../../store/features/filters"
import { RootState } from "../../store/store"

export const MenuContext = React.createContext(false)
export const GroupContext = React.createContext(false)

type Props = {
    children: JSX.Element,
    title: string,
    placeholder: string
}

const MenuDropDown = ({ children }: Props) => {
    const [activeGroup, setActiveGroup] = useState()

    const switchGroup = useCallback((title) => {
        setActiveGroup(activeTitle => activeTitle === title ? undefined : title)
    }, [])

    return <MenuContext.Provider value={{activeGroup, switchGroup}}>{children}</MenuContext.Provider>
}

MenuDropDown.Group = function MenuGroup ({ children, title, placeholder }: Props) {
    
    const [currentValue, setCurrentValue] = useState()

    const { activeGroup, switchGroup } = useContext(MenuContext)
    return (
        <GroupContext.Provider value={{currentValue, setCurrentValue}}>
            <div className={styles.sidebar__filter} >
                <p className={styles.sidebar__subtitle}>{ title }</p>
                <button type='button' className="input" onClick={() => switchGroup(title)}>{!currentValue ? placeholder : currentValue}
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

MenuDropDown.Item = function MenuItem ({ title, setActiveGenre, setActiveCinema, isGenre, isCinema }) {
    const { switchGroup } = useContext(MenuContext)
    const { setCurrentValue } = useContext(GroupContext)
    return (
        <p className={styles.sidebar__item} onClick={() => {
            setCurrentValue((title))
            switchGroup((title))
            isGenre && setActiveGenre((title))
            isCinema && setActiveCinema((title))
        }}>{title}</p>
    )
}

export const TheSidebar = ({ cinemas }) => {

    const [activeGenre , setActiveGenre] = useState()
    const [activeName , setActiveName] = useState()
    const [activeCinema , setActiveCinema] = useState()

    const films = useSelector((state: RootState) => state.films);
    const genres = []
    
    for (let i = 0; i < films.length; i++) {
        if (!genres.includes(films[i].genre)) genres.push(films[i].genre)
    }

    const dispatch = useDispatch()

    const activeFilters = { activeName, activeGenre, activeCinema }

    useEffect(() => {
        dispatch(filterActions.getFilters(activeFilters))
    }, [activeFilters])

    return (
        <aside className={`${styles.sidebar} light`}>
            <p className={styles.sidebar__title}>
                Фильтр поиска
            </p>
            <CatalogSearch setActiveName={setActiveName} title={'Название'}/>
            <MenuDropDown>
                <MenuDropDown.Group title="Жанр" placeholder="Выберите жанр">
                    <MenuDropDown.Item title='Не выбран' setActiveGenre={setActiveGenre} isGenre={true} isCinema={false}/>
                    {
                        genres && genres.map((genre) => {
                            return <MenuDropDown.Item key={genre} title={genre} setActiveGenre={setActiveGenre} isGenre={true} isCinema={false}/>
                        })
                    }
                </MenuDropDown.Group>
                <MenuDropDown.Group title="Кинотеатр" placeholder="Выберите кинотеатр">
                    <MenuDropDown.Item title='Не выбран' setActiveCinema={setActiveCinema} isGenre={false} isCinema={true} />
                    {
                        cinemas && cinemas.map((cinema) => {
                            return <MenuDropDown.Item key={cinema.id} title={cinema.name} setActiveCinema={setActiveCinema} isGenre={false} isCinema={true} />
                        })
                    }
                </MenuDropDown.Group>
           </MenuDropDown>
        </aside>
    )
}