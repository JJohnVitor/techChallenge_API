import mongoose from "mongoose";

// String de conexão com o banco de dados

async function conectaNaDataBase() {
  await mongoose.connect("mongodb+srv://admin:admin123@cluster0.799jb.mongodb.net/Aulas?retryWrites=true&w=majority&appName=Cluster0")

  return mongoose.connection


}

export default conectaNaDataBase