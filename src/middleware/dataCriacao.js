module.exports = (rq, rs, next) => {
    let dia = rq.body.criado_em
    
    let data = dia.split("/")
    if(data.length == 3){
        data = data.join("-")
        let aux = new Date(data).toISOString()
        let criacao = aux.split("T")
        rq.body.criado_em = (criacao[0]);
        next()
    }else{
        console.log('ERRO: data invalida.');
        rs.status(400).json()
        next()
    }


}