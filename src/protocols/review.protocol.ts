export type ReviewEntity = {
    id: number,
    movie_id: number,
    comentary: string,
    rate: number,
    created_at: string,
    movie: MovieEntity
}

export type MovieEntity = {
    id: number,             
    title: string,              
    release_date: string,    
    genre_id: number,           
    parental_rating_id: number,
    genre: Genre,
    parental_rating: ParentalRating
}

export type MovieReview = {
    title: string,
    release_date: string
}

export type Genre ={
    genre: string
}

export type ParentalRating = {
    parental_rating: string
}

export type GenreEntity = {
    id: number,
    genre: string
}

export type ParentalRatingEntity= {
    id: number,
    parental_rating: string
}

export type Movie = Omit<ReviewEntity, "id">

export type Review = Omit<ReviewEntity, "id" | "createdAt" | "movie">

export type Comentary = Omit<ReviewEntity, "id" | "movie" | "genre_id" | "release_date" | "rate" | "createdAt">

export type NewReview = Partial<ReviewEntity>

