import { QueryResult } from "pg";
import { connectionDB } from "../database/db.js";
import { Review, ReviewEntity, Comentary } from "../protocols/review.protocol.js";

export async function insertReview(review: Review){

    const {movie, genre_id, release_date, comentary, rate} = review;

    try {
        return await connectionDB.query('INSERT INTO reviews (movie, genre_id, release_date, comentary, rate) VALUES ($1, $2, $3, $4, $5);', [movie, genre_id, release_date, comentary, rate]);
    } catch (error) {
        const erro = console.log(error, "erro no try/catch de insertReview");
        return erro
    }

}

export async function retrieveReviews(): Promise<QueryResult<ReviewEntity>>{

    try {
        return connectionDB.query(
        `SELECT reviews.movie, reviews.release_date, reviews.comentary, 
        reviews.rate, genres.genre  
        FROM reviews
        JOIN genres ON genres.id=reviews.genre_id
        ORDER BY reviews.id DESC`
        )
    } catch (error) {
        console.log(error, "erro no try/catch de getReviews");
        return
    } 
}

export async function updateReview(idNumber: number, comentary: string){


    try {
        return await connectionDB.query('UPDATE reviews SET comentary=$1 WHERE id=$2;', [comentary, idNumber]); 
    } catch (error) {
        return error
    }
}

export async function deleteReview(idNumber: number){


    try {
        return await connectionDB.query('DELETE FROM reviews WHERE id=$1;', [idNumber])
    } catch (error) {
        console.log(error, "erro no try/catch de deleteReview")
        return error
    }

}