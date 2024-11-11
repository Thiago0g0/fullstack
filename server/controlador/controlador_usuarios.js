import { rotas_usuarios } from "../rotas/rotas_usuarios.js"

const pegar_usuario_funcao = (req, res) => {
    const id_requisicao = req.params.id
    concole.log('o id enviado foi', id_requisicao)
    res.send(true)
    return
}


export{pegar_usuario_funcao}