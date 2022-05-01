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
// mongodb+srv://batata:carequinha@primeiraapi.lmwkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// conectar ao banco
mongoose.connect('mongodb+srv://batata:carequinha@primeiraapi.lmwkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// mongoose.connect('mongodb+srv://fiveminds:batata123@fiapteste.q4fkc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// verificar se a conexão foi bem sucedida
.then(
    ()=>{
        // porta para ver resultado
        console.log('conectado com sucesso')
        app.listen(3000)
    }
).catch((err) => console.log(err))
// fiveminds batata123