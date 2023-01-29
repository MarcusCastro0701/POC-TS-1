import joi from "joi";

export const reviewSchema = joi.object({
    movie_id: joi.number().required(),
    comentary: joi.string().required(),
    rate: joi.number().min(0).max(10).required()
})