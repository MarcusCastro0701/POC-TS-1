import { Router } from "express";
import { postReview, getReviews, updateReviewById, deleteReviewById } from "../controllers/reviews.controller.js";


const router = Router()

router.post("/reviews", postReview);
router.get("/reviews", getReviews);
router.put("/reviews/:id", updateReviewById);
router.delete("/reviews/:id", deleteReviewById )

export default router