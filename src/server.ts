import express from "express"
import { sequelize } from "./database"
import { log } from "console"
import { adminJs, adminJsRouter } from "./adminjs"

const app = express()
app.use(express.static('public'))
app.use(adminJs.options.rootPath, adminJsRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{

  sequelize.authenticate().then(()=>{
      console.log('Conexão ao banco de dados bem sucessedida')
   })
   console.log(`serviço iniciado com sucesso na porta ${PORT}`);
    
})

