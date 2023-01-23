export type ReviewEntity = {
    id: number,
    movie: string,
    genre_id: number,
    release_date: string | Date,
    comentary: string,
    rate: number,
    createdAt: string
}

export type Review = Omit<ReviewEntity, "id" | "createdAt">

export type Comentary = Omit<ReviewEntity, "id" | "movie" | "genre_id" | "release_date" | "rate" | "createdAt">

