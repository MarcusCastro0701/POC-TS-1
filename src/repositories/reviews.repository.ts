
import prisma from "../database/db.js";
import { Review, ReviewEntity, NewReview } from "../protocols/review.protocol.js";
import { verificaMovieId } from "../services/id.verification.service.js";

export async function insertReview(review: Review, movie_id: number){


    try {
        const verifica = await verificaMovieId(movie_id);
        if(verifica === null){
            return verifica
        }
        const retorno = await prisma.reviews.create({
            data: review
        });
        return retorno
    } catch (error) {
        const erro = console.log(error, "erro no try/catch de insertReview");
        console.log(erro)
        return erro
    }

}

export async function retrieveReviews(){

    try {
        const get = await prisma.reviews.findMany({
            include: {
                movie: {
                    select: {
                        title: true,
                        release_date: true
                    }
                }
            }
        })
        return get
    } catch (error) {
        console.log(error, "erro no try/catch de getReviews");
        return error
    } 
}

export async function updateReview(idNumber: number, setComentary: NewReview){


    try {
        return await prisma.reviews.upsert({
            where: {
                id: idNumber
            },
            create: setComentary as Review,
            update: {
                comentary: setComentary.comentary
            }
        }); 
    } catch (error) {
        console.log(error, "erro no try/catch de updateReview")
        return error
    }
}

export async function deleteReview(idNumber: number){


    try {
        const deleta = await prisma.reviews.delete({
            where: {
                id: idNumber
            }
        })
        return deleta
    } catch (error) {
        console.log(error, "erro no try/catch de deleteReview")
        return error
    }

}

