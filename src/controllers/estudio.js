const estudio = require("../models/estudio.js")
const model = require("../models/estudio.js")

let db = [{id: 1, 
    nome: "estudio Genrico numero 1", 
    criado_em: 2000, 
    atualizado_em: 2020
}]

module.exports = {
    adic: (body) => {
        let nov = model(body)
        if(nov){
            db.push(nov)

            return 201
        }else{ return 418 }
    },

    mstT: () => {return db},

    mst: (Qid)=>{
        let posicao = db.findIndex((estudio)=> estudio.id == Qid) 
        if(posicao == (-1)){
            return 404
        }else{
            return db[posicao]
        }
    },

    atl: (Qid, body) => {
        let posicao = db.findIndex((estudio)=> estudio.id == Qid) 
        if(posicao != (-1)){
            let nov = model(body)
            if(nov){
                db[posicao] = nov

                return 200
            }else{ return 418 }
        }else{ return 404 }
    },

    del: (Qid) =>{
        let posicao = db.findIndex((estudio)=> estudio.id == Qid) 
        if(posicao == (-1)){

            return 404
        }else{
            db.splice(posicao, 1)

            return 200
        }
    }
}