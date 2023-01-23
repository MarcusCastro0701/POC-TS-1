import { Request, Response } from "express";
import { insertReview, retrieveReviews, updateReview, deleteReview } from "../repositories/reviews.repository.js";
import { Review, Comentary } from "../protocols/review.protocol.js";
import { reviewSchema } from "../schemas/review.schemas.js";
import { connectionDB } from "../database/db.js";
import { verificaId } from "../services/id.verification.service.js";


export async function postReview(req: Request, res: Response){

    const body = req.body as Review;

    const { error } = reviewSchema.validate(body);
    if (error) {
        console.log(error, "reviewSchema inválido em postReview");
        res.status(400).send(error);
        return
    }

    try {
        await insertReview(body);
        res.sendStatus(200);
        return;
    } catch (error) {
        console.log(error, "erro no try/catch de post review");
        res.sendStatus(500);
        return
    }

}

export async function getReviews(req: Request, res: Response){

    try {
        const get = await retrieveReviews();
        res.status(200).send(get.rows);
    } catch (error) {
        console.log(error, "erro no try/catch de get/reviews")
        res.sendStatus(500);
        return
    }

}

export async function updateReviewById(req: Request, res: Response){

    const { id } = req.params
    const comentary = req.body as Comentary

    const idNumber = Number(id)

    const verifica = await verificaId(idNumber)

    if(verifica !== "Ok"){
        res.status(404).send(verifica)
        return
    }


    try {
        await updateReview(idNumber, comentary.comentary)
        res.sendStatus(200)
    } catch (error) {
        console.log(error, "erro no try catch de updateReviewById")
    }

}

export async function deleteReviewById(req: Request, res: Response){

    const { id } = req.params

    const idNumber = Number(id)

    const verifica = await verificaId(idNumber)

    if(verifica !== "Ok"){
        res.status(404).send(verifica)
        return
    }

    try {
        
        await deleteReview(idNumber)
        res.sendStatus(200)

    } catch (error) {
        console.log(error, "erro no try/catch de deleteReviewById");
        res.sendStatus(500)
    }

}