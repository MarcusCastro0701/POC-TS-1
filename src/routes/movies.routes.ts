import { Router } from "express";
import {  getMovies, getGenres, getParentalRatings } from "../controllers/movies.controller.js";


const router = Router()

router.get("/movies", getMovies);
router.get("/genres", getGenres);
router.get("/parentalratings", getParentalRatings)


export default router