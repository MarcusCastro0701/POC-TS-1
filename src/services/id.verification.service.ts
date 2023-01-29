import prisma from "../database/db.js";

export async function verificaMovieId(idNumber: number){

    const verifica = await prisma.movies.findUnique({
        where: {
            id: idNumber
        }
    })
    
    return verifica
}

