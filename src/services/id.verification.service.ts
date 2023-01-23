import { connectionDB } from "../database/db.js";
import { Request, Response } from "express";

export async function verificaId(idNumber: number){

    const verifica =  await connectionDB.query('SELECT * FROM reviews WHERE id=$1;', [idNumber])
    if(verifica.rows.length === 0){
        return {erro: "review não encontrado"};
    }
    return "Ok"

}