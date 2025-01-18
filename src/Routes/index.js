import express from "express";
import posts from "./postsRoutes.js"


const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send("Curso de node"))

    //middleware para ter acesso a req e res quando realizadas e modificar ou passar informaçoes extras
    // req onde o body seja um objeto para pelo middleware e vira json, pq  no body e hhtp ta em string
    app.use(express.json(), posts)

}


export default routes