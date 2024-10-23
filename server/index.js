import Express from 'express'
import { User, criarTabelas } from './db.js'
import bcryptjs from 'bcryptjs'
const app = Express()
app.use(Express.json())

//criarTabelas()
//app.get('/pegar', function (req, res) {
//    res.send('enviar esta mensagem')
//})

//app.get('/pegar2', function (req, res) {
//    res.send('esta e outra mensagem')
//})
app.post('/registro', async function (req, res) {
    //verificar se todos os campos foram enviados
    try {
        const { nome, sobrenome, email, senha, dataNascimento } = req.body
        if(!nome || !sobrenome || !email || !senha || !dataNascimento){
            res.status(406).send('Todos os campos devem ser enviados')
            returnn
        }
        
        if(await User.findOne({where:{email:email}})){
            res.status(400).send('usuario ja existe no sistema')
            return
        }

        const senhaSegura = bcryptjs.hashSync(senha, 10)
        const novoUsuario = User.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senhaSegura, 
            dataNascimento: dataNascimento
        })
        res.status(201).send('OK, usuario criado')
    } catch (erro) {
        console.log(erro)

    }
    // encripitar senha do usuario
    // criar usuario na DB
    // devolver resposta para meu cliente
})

app.listen(8000)
