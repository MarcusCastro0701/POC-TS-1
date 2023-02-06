import prisma from "../database/db";
import { MovieEntity, GenreEntity, ParentalRatingEntity } from "../protocols/review.protocol";
import { movies } from "@prisma/client"
import { verificaMovieId } from "../services/id.verification.service.js";
import { QueryResult } from "pg";

export async function updateMovie(movie_id: number){


    try {
        
        const update = await prisma.movies.update({
            where: {
                id: movie_id
            },
            data:{
                has_review: true
            }
        })

        return update

    } catch (error) {
        
    }

}

export async function retrieveMovies(): Promise<MovieEntity[]>{

    try {
        
        const get = await prisma.movies.findMany({
            include: {
                genre: {
                    select: {
                        genre: true
                    }
                },
                parental_rating: {
                    select: {
                        parental_rating: true
                    }
                }
            }
        })
        return get

    } catch (error) {
        console.log(error, "erro no try/catch de retrieveMovies")
        return error
    }

}



export async function retrieveGenres(): Promise<GenreEntity[]>{

    try {
        const get = await prisma.genres.findMany()
        return get
    } catch (error) {
        console.log(error, "erro no try/catch de retrieveGenres")
        return error
    }

}

export async function retrieveParentalRatings(): Promise<ParentalRatingEntity[]>{

    try {
        const get = await prisma.parentalratings.findMany()
        
        return get
    } catch (error) {
        console.log(error, "erro no try/catch de retrieveGenres")
        return error
    }

}