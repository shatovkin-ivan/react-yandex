export interface CardItems {
    [identifier: string]: number;
}
export interface FilmInterface {
    description: string,
    director: string,
    genre: string,
    id: string,
    posterUrl: string,
    rating: number,
    releaseYear: number, 
    reviewIds: Array<string>
}