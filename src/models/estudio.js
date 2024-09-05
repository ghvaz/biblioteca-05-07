/* - nome
 - criado_em
 - atualizado_em
 */

let nextID = 2

module.exports = (body, id= nextID++) => {
    if(body.nome == undefined && body.nome == "" && 
        body.criado_em == undefined && body.criado_em == "" &&
        body.atualizado_em == undefined && body.atualizado_em == "" 
    ){
        return undefined 
    }else{
        return{
            id, 
            nome: body.nome, 
            criado_em: body.criado_em, 
            atualizado_em: body.atualizado_em
        }
    }
}