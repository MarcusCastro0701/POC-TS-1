import dotevnv from "dotenv"

export function loadEnvs(){

    let path = ".env";
if(process.env.NODE_ENV === "test"){
    path = ".env.test"
}

dotevnv.config({ path })


}