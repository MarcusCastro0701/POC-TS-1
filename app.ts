import express from "express";
import cors from "cors"

//Routes
import reviewRouter from './src/routes/reviews.routes.js'
import movieRouter from './src/routes/movies.routes.js'
//


//Configs app
const app = express();

app.use(cors());
app.use(express.json());

app.use(reviewRouter);
app.use(movieRouter)
//







const port = 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));