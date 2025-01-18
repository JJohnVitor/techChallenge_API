import express from "express";
import conectaNaDataBase from "./config/dbconnect.js";
import routes from "./Routes/index.js";

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



// // fazendo um get de todos os post, a partir da fonte de dados do meu objeto post
// app.get("/post", async (req,res) =>{
//     // o metodo find ira no atlas e procurar os dados atras do modelo
//     const listaPost = await post.find({})
//     //fonte de dados "post"
//     res.status(200).json(listaPost)
// })


//Deletando
app.delete("/post/:id", (req,res)=>{
    const index =  buscarPost(req.params.id)
    post.splice(index,1)
    res.status(200).send("Post deletado com sucesso!")


})


// exportando para server. js e colocando no liste
export default app