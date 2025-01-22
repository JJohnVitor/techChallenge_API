import express from "express";
import routes from "./routes/index.js";
import conectaNaDataBase from "./config/dbconnect.js";

// funcionalidades de express em app
const app = express()
routes(app)

// porta de acesso
const PORT = 3000

// se o ambiente não for de teste, conecta no banco de dados
if (process.env.NODE_ENV !== 'test') {
    conectaNaDataBase().then(() => {
        console.log("Conectado com sucesso no MongoDB")
    }).catch((erro) => {
        console.log(`Erro ao conectar ao banco de dados: ${erro.message}`)
    })
}

export default app