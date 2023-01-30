import { Request, Response } from "express";
import { retrieveMovies, retrieveGenres, retrieveParentalRatings } from "../repositories/movies.repository.js";
import { Review, Comentary, NewReview } from "../protocols/review.protocol.js";
import { reviewSchema } from "../schemas/review.schemas.js";



export async function getMovies(req: Request, res: Response){

    try {
        const retorno = await retrieveMovies()
        if(retorno === null || retorno === undefined){
            console.log("Houve um erro ao buscar os movies no banco")
            res.sendStatus(400);
            return
        }
        console.log(retorno)
        res.status(200).send(retorno)
    } catch (error) {
        console.log(error, "houve um erro no try/catch de getMovies")
        res.sendStatus(500)
    }

}

export async function getGenres(req: Request, res: Response){

    try {
        const retorno = await retrieveGenres()
        if(retorno === null || retorno === undefined){
            console.log("Houve um erro ao buscar os gêneros no banco");
            res.sendStatus(400)
        }
        res.status(200).send(retorno)
        return
    } catch (error) {
        console.log(error, "erro no try/catch de getGenres")
        res.sendStatus(500);
        return
    }

}

export async function getParentalRatings(req: Request, res: Response){

    try {
        const retorno = await retrieveParentalRatings()
        if(retorno === null || retorno === undefined){
            console.log("Houve um erro ao buscar as classificações indicativas no banco");
            res.sendStatus(400)
        }
        res.status(200).send(retorno)
        return
    } catch (error) {
        console.log(error, "erro no try/catch de getParentalRatings")
        res.sendStatus(500);
        return
    }

}