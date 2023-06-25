'use client'

import { useParams } from 'next/navigation'
import { useGetMovieQuery } from '../../../store/services/movieApi'
import { FilmCard } from '../../../components/FilmPage/FilmCard'
import { FilmReviews } from '../../../components/FilmPage/FilmReviews'

export default function Film () {
    const params = useParams()

    const { data, isLoading, error } = useGetMovieQuery(params.id)
    if (data) {
        return (
            <>
                <FilmCard film={data}/>
                <FilmReviews film={data} />
            </>
        )
    }  
}