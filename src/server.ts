import express from "express"

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
   console.log(`serviço iniciado com sucesso na porta ${PORT}`);
    
})

