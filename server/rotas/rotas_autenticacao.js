import express  from "express"
import { registro, login } from "../controlador/controlador_autenticacao.js"

const rotas_autenticacao = express.Router()

rotas_autenticacao.post('/registro', registro)
rotas_autenticacao.post('/login', login)

export {rotas_autenticacao}