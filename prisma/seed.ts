import prisma from "../src/database/db.js";


async function main() {

    await prisma.parentalratings.createMany({
        data: [
            {
                "parental_rating": "Livre para todos os públicos"
            },
            {
                "parental_rating": "Não recomendado para menores de 10 anos"
            },
            {
                "parental_rating": "Não recomendado para menores de 12 anos"
            },
            {
                "parental_rating": "Não recomendado para menores de 14 anos"
            },
            {
                "parental_rating": "Não recomendado para menores de 16 anos"
            },
            {
                "parental_rating": "Não recomendado para menores de 18 anos"
            },
        ]
    })

    await prisma.genres.createMany({
        data: [
            {
                "genre": "Aventura"
            },
            {
                "genre": "Ficção Científica"
            },
            {
                "genre": "Drama"
            },
            {
                "genre": "Suspense"
            },
            {
                "genre": "Comédia"
            },
        ]
    })

    await prisma.movies.createMany({
        data: [
            {
                "title": "indiana Jones",
                "release_date": "10-10-2022",
                "genre_id": 1,
                "parental_rating_id": 2,
                "has_review": true
            },
            {
                "title": "Star Wars",
                "release_date": "15-05-2010",
                "genre_id": 2,
                "parental_rating_id": 2,
                "has_review": true
            },
            {
                "title": "Forrest Gump",
                "release_date": "15-05-1998",
                "genre_id": 3,
                "parental_rating_id": 3,
                "has_review": false
            },
            {
                "title": "O Detetive",
                "release_date": "15-05-2009",
                "genre_id": 4,
                "parental_rating_id": 4,
                "has_review": false
            },
            {
                "title": "Click",
                "release_date": "15-05-2004",
                "genre_id": 5,
                "parental_rating_id": 1,
                "has_review": false
            },
        ]
    })

    await prisma.reviews.createMany({

        data: [
            {
                "movie_id": 1,
                "comentary": "Muito emocionante",
                "rate": 10
            },
            {
                "movie_id": 2,
                "comentary": "Achei incrível",
                "rate": 10
            }
        ]

    })

}

main()

  .then(() => {
    console.log("registro feito com sucesso")}
    )

  .catch(e => {
    console.log(e);
    process.exit(1)
  })

  .finally(async () => {
    prisma.$disconnect()
  })