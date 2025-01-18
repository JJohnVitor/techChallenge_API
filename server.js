import "dotenv/config.js"
import app from "./src/app.js"


// porta de acesso
const PORT = 3000


// porta de acesso 3000
app.listen(PORT, () =>{
    console.log("Servidor escutando!")
})