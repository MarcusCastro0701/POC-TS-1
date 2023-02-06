import supertest from "supertest";
import app from "../app"
import prisma from "../src/database/db"

const api = supertest(app);

beforeAll(async () => {
    await prisma.reviews.deleteMany({})
})

afterAll(async () => {
    await prisma.reviews.deleteMany({})
})


describe('Testando a API', () => {
    it('Testando get /reviews', async () => {

        await prisma.reviews.createMany({

            data: [
                {
                    "movie_id": 1,
                    "comentary": "Muito emocionante",
                    "rate": 10
                },
                {
                    "movie_id": 2,
                    "comentary": "Surpeendente",
                    "rate": 10
                },
            ]
    
        })

        const resultado = await api.get('/reviews');
        
        expect(resultado.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    movie_id: expect.any(Number),
                    comentary: expect.any(String),
                    rate: expect.any(Number),
                    createdAt: expect.any(String),
                    movie: {
                        title: expect.any(String),
                        release_date: expect.any(String)
                    }
                })
            ])
        )

        expect(resultado.status).toBeGreaterThanOrEqual(200);

        

        
    })
})

describe('Testando a API', () => {
    it('Testando get /reviews', async () => {

        const resultado = await api.get('/reviews');
        
        expect(resultado.body).toEqual(
            expect.arrayContaining([])
        )

        expect(resultado.status).toBeGreaterThanOrEqual(200);

        
    })
})