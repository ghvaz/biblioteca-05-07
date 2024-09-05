const expr = require("express")
const app = expr()
const port = 8000

app.use(expr.json())


let rotas_estudio = require('./routes/estudio.js')
app.use("/std", rotas_estudio)

app.listen(port, ()=>{
    console.log('Ouvindo na porta '+port);
})