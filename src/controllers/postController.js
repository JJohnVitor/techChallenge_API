// Centralizar a logica o que as rotas vao chamar para executar as acoes das req e res
import post from "../models/Post.js";


class PostController{

    static async listasPosts(req,res){
        try{

        // o metodo find ira no atlas e procurar os dados atras do modelo
        const listaPost = await post.find({})
        //fonte de dados "post"
        res.status(200).json(listaPost)

        }catch(erro){
            res.status(500).json({message:`${erro.message}- falha na requisição`})


        }


    }

    static async listarPostPorId(req,res){
        try{
        const id = req.params.id
        // o metodo find ira no atlas e procurar os dados atras do modelo
        const postEncontrado = await post.findById(id)
        //fonte de dados "post"
        res.status(200).json(postEncontrado)

        }catch(erro){
            res.status(500).json({message:`${erro.message}- falha na requisição do post`})


        }


    }

    static async cadastrarPost(req,res){
        try{
            const novoPost = await post.create(req.body);
            res.status(201).json({message: "Criado com sucesso", post: novoPost})

        } catch(erro){
            res.status(500).json({
                message:`${erro.message} - falha ao cadastrar livro`
            })

        }

    }

    static async atualizarPost(req,res){
        try{
        const id = req.params.id
        // o metodo findByIdAndUpdate ira no atlas e procurar os dados atras do modelo e atualizar atraves do req.body
        await post.findByIdAndUpdate(id, req.body)
        //fonte de dados "post"
        res.status(200).json({message: "Livro atualizado com sucesso"})

        }catch(erro){
            res.status(500).json({message:`${erro.message}- falha na atualização`})


        }


    }


    static async excluirPost(req,res){
        try{
        const id = req.params.id
        // o metodo findByIdAndUpdate ira no atlas e procurar os dados atras do modelo e atualizar atraves do req.body
        await post.findByIdAndDelete(id)
        //fonte de dados "post"
        res.status(200).json({message: "Livro excluido com sucesso"})

        }catch(erro){
            res.status(500).json({message:`${erro.message}- falha na exclusão`})


        }


    }


    static async ListarPostsPorTitulo(req, res){
        const titulo = req.query.titulo
        const descricao =  req.query.descricao

        try{
            // acesso no banco pelo mongoose, acessando o modelo usando o find pata pegar os titutlos
            const postPorTitulo = await post.find({titulo: { $regex: '.*' + titulo + '.*' }})
            res.status(200).json(postPorTitulo)

        } catch(erro)
        {
            res.status(500).json({message: `${erro.message}, falha na busca`})
        }
    }





}

export default PostController