import express from "express";
import PostController from "../controllers/postController.js";

const routes = express.Router();

routes.get("/posts", PostController.listasPosts)
routes.get("/posts/busca", PostController.ListarPostsPorTitulo)
routes.get("/posts/:id", PostController.listarPostPorId)
routes.post("/posts", PostController.cadastrarPost)
routes.put("/posts/:id", PostController.atualizarPost)
routes.delete("/posts/:id", PostController.excluirPost)





export default routes