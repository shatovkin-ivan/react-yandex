'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import styles from '../assets/styles/HomePage/template.module.scss'
import { TheSidebar } from '../components/HomePage/TheSidebar'
import { TheCatalog } from '../components/HomePage/TheCatalog'
import { filmsActions } from '../store/features/films'
import { RootState } from '../store/store'

export default function Home () {

    const [cinemas, setCinemas] = useState()
    const dispatch = useDispatch()
    const films = useSelector((state: RootState) => state.films)
    const filters = useSelector((state: RootState) => state.filters)
    const [active, setActive] = useState()
    const [result, setResult] = useState()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3001/api/cinemas')
        .then(response =>  response.json())
        .then(result => {
            setCinemas(result)
        })
    }, [])

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3001/api/movies')
        .then((response) => response.json())
        .then((actualData) => {
            if (!films.length) dispatch(filmsActions.getData(actualData))
            setLoading(false)
        } )
    }, []);

    useEffect(() => {
        const result = []
        let common = []
        const activeAmount = Object.values(filters).map(curr => {
            if(curr === 'Не выбран') {
                return false
            } else return !!curr

        }).filter(curr => curr).length

        setActive(activeAmount)
        const filteredCinema = filterByCinema(films, filters.activeCinema, cinemas)
        const filteredName = filterByName(films, filters.activeName)
        const filteredGenre = filterByGenre(films, filters.activeGenre)
       
        if (filteredCinema) common = common.concat(filteredCinema)
        if (filteredName) common = common.concat(filteredName)
        if (filteredGenre) common = common.concat(filteredGenre)

        const map = new Map()

        for (let i = 0; i < common.length; i++) {
            map.set(common[i].id, 0)
        }
        
        for (let i = 0; i < common.length; i++) {
            if (map.has(common[i].id)) {
               map.set(common[i].id, map.get(common[i].id) + 1)
            }
        }
        
        for (let amount of map.entries()) {
            if (amount[1] === activeAmount) {
                result.push(films.find(film => film.id === amount[0]))
            }
        }
    
        setResult(result)
    }, [filters, cinemas])

    function filterByName (arr, name) {
        return name && arr.filter(item => item.title.toLowerCase().includes(name.toLowerCase()))
    }
    function filterByGenre (arr, genre) {
        if(genre === 'Не выбран') return 
        return genre && arr.filter(item => item.genre === genre)
    }
    function filterByCinema (arr, currentCinema, cinemas) {
        if(currentCinema === 'Не выбран') return 
        const moviesArr = cinemas && currentCinema && cinemas.find(item => {
           if ( item.name.toLowerCase() === currentCinema.toLowerCase()) return item
        }).movieIds
       
        const res = []
        if(moviesArr) {
            for (let i = 0; i < moviesArr.length; i++) {
                res.push(arr.find(item => item.id === moviesArr[i]))
            }
        }
        return res
    }
   
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__wrap}>
                    <TheSidebar cinemas={cinemas}/>
                    <TheCatalog data={active ? result : films} loading={loading}/>
                </div>
            </div>
        </section>
    )
}