import Express from 'express'
import { User, criarTabelas } from './db.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
const app = Express()
app.use(Express.json())

//criarTabelas()
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

app.post('/login', async function(req, res){ 
    //validar informações
    try{
    const { email, senha } = req.body
    if (!email || !senha) {
        res.status(400).send("Todos os campos devem ser preenchidos")
            return
        } 
        
        //verificar a existencia do usuario
        const usuario = await User.findOne({where:{email:email}}) // essa linha procura por email
        if (!usuario) {
            res.send('este email nao esta cadastrado')
            return
        }

        //comparo a senha enviada com a senha do banco de dados
       const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha)
        if (!senhaCorreta) {
            res.send('A senha esta incorreta')
            return
        }

        //criar um token de autenticação
        const token = jwt.sign(
        //payload
            {
                nome:usuario.nome,
                email:usuario.email,
                status:usuario.status

            },
        //chave de criptografia
        //tempo de expiração
            'chavecriptografiasupersegura',
            {expiresIn: "30d"},
        )
        
        res.send({msg:'voce foi logado', token: token})
    } catch (erro) {
        console.log(erro)
        res.status(500).send("Houve um problema")
    }
})

app.listen(8000)