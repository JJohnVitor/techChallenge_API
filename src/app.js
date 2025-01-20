import express from "express";
import conectaNaDataBase from "./config/dbconnect.js";
import routes from "./routes/index.js";

// variavel para trabalhar com os metodos da conexao
const conexao = await conectaNaDataBase()

//  evento de erro, para imprimir o erro da conexão
conexao.on("error", (erro)=>{
    console.error("Erro de conexão", erro)
})

// conexao aberta
conexao.once("open", ()=>{
    console.log("Conexao com o banco feita com sucesso")

})

// funcionalidades de express em app
const app = express()

routes(app)



// exportando para server. js e colocando no liste
export default app