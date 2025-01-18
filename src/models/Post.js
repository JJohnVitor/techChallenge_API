import mongoose from "mongoose";

//Montando a estrutura do Post para o banco
const Postschema = new mongoose.Schema({
    //Propriedade do mongoose para criar ID unicos
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, require: true},
    descricao: {type: String, require: true},
    professor: {type: String, require: true},
    dataInsercao: {type: mongoose.Schema.Types.Date},
}, {versionKey: false})

// modelo, objeto que representa  a colecao no banco, para a api interagir
const post = mongoose.model("Posts", Postschema)

export default post