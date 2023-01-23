import joi from "joi";

export const reviewSchema = joi.object({
    movie: joi.string().required(),
    genre_id: joi.number().min(1).max(5),
    release_date: joi.string().required(),
    comentary: joi.string().required(),
    rate: joi.number().min(0).max(10).required()
})