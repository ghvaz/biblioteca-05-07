const express = require("express")
const rota = express.Router()

const ctrl = require("../controllers/estudio.js")

rota.get("/", (rq, rs) =>{
    rs.json(ctrl.mstT())
})

rota.get("/:procuraID", (rq,rs)=>{
    let nemo = ctrl.mst(rq.params.procuraID)
    if(nemo == 404){
        rs.status(404).json()
    }else{
        rs.json(nemo)
    }
})

rota.put("/:id", (rq,rs)=>{
    let atualizo/*?*/ = ctrl.atl(rq.params.id, rq.body) 
    rs.status(atualizo)
})

rota.post("/", (rq,rs)=> {
    let crio/*?*/ = ctrl.adic(rq.body)
    rs.status(crio)
})

rota.delete("/:id", (rq,rs)=> {
    let deleto/*?*/ = ctrl.del(rq.params.id)
    rs.status(deleto)
})

module.exports = rota