// importando modulos instalados
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler json
app.use(
    express.urlencoded({
        extended: true,
    }),
)
  
app.use(express.json())


// rota inicial / breakpoint
app.get('/',function(req,res){
    // vai retornar um json
    res.json({message:"opa"})
})
// 
// conectar ao banco
mongoose.connect('mongodb+srv://user:pwd@primeiraapi.lmwkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// verificar se a conexão foi bem sucedida
.then(
    ()=>{
        // porta para ver resultado
        console.log('conectado com sucesso')
        app.listen(3000)
    }
).catch((err) => console.log(err))
// fiveminds batata123
