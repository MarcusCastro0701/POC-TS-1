import { Request, Response } from "express";
import { insertReview, retrieveReviews, updateReview, deleteReview } from "../repositories/reviews.repository.js";
import { updateMovie } from "../repositories/movies.repository.js";
import { Review, Comentary, NewReview } from "../protocols/review.protocol.js";
import { reviewSchema } from "../schemas/review.schemas.js";
import { verificaMovieId } from "../services/id.verification.service.js";


export async function postReview(req: Request, res: Response){

    const body = req.body as Review;
    const movie_id = req.body.movie_id as number;

    const { error } = reviewSchema.validate(body);
    if (error) {
        console.log(error, "reviewSchema inválido em postReview");
        res.status(400).send(error);
        return
    }

    try {
        const retorno = await insertReview(body, movie_id);
        const type = typeof retorno
        
        if (type !== 'object' || retorno === null){
            console.log("filme não encontrado no banco ou já existe um review com este filme")
            res.sendStatus(400)
            return
        }

        const update = await updateMovie(movie_id);
        if (update === undefined || update === null){
            console.log("Houve um erro ao fazer o update")
            res.sendStatus(400)
            return
        }

        res.status(200).send(retorno);
        return;
    } catch (error) {
        console.log(error, "erro no try/catch de postReview");
        res.sendStatus(500);
        return
    }

}

export async function getReviews(req: Request, res: Response){

    try {
        const get = await retrieveReviews();
        if(get === null || get === undefined){
            console.log("Houve um erro ao buscar as reviews no banco");
            res.sendStatus(400)
            return
        }
        res.status(200).send(get);
        return
    } catch (error) {
        console.log(error, "erro no try/catch de get/reviews")
        res.sendStatus(500);
        return
    }

}

export async function updateReviewById(req: Request, res: Response){

    const { id } = req.params
    const setComentary = req.body as NewReview

    const idNumber = Number(id)

    try {
        const retorno = await updateReview(idNumber, setComentary)
        if(retorno === null || retorno === undefined){
            console.log("Houve um erro ao fazer o update do comentário");
            res.sendStatus(400)
        }
        res.sendStatus(200)
        return
    } catch (error) {
        console.log(error, "erro no try catch de updateReviewById")
        res.sendStatus(500)
        return
    }

}

export async function deleteReviewById(req: Request, res: Response){

    const { id } = req.params

    const idNumber = Number(id)

    try {
        
        const retorno = await deleteReview(idNumber)
        if(retorno === null || retorno === undefined){
            console.log("Houve um erro ao fazer o delete do review");
            res.sendStatus(400)
        }
        res.sendStatus(200)

    } catch (error) {
        console.log(error, "erro no try/catch de deleteReviewById");
        res.sendStatus(500)
    }

}




