import { User } from "../db.js"
import bcryptjs from 'bcryptjs'
import jwt  from "jsonwebtoken"
const registro = async (req, res) => {
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
}

const login = async (req, res) =>{ 
    try{
    const { email, senha } = req.body
    if (!email || !senha) {
        res.status(400).send("Todos os campos devem ser preenchidos")
            return
        } 
        
        const usuario = await User.findOne({where:{email:email}}) 
        if (!usuario) {
            res.status(405).send('este email nao esta cadastrado')
            return
        }

       const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha)
        if (!senhaCorreta) {
            res.status(404).send('A senha esta incorreta')
            return
        }

        const token = jwt.sign(
            {
                nome:usuario.nome,
                email:usuario.email,
                status:usuario.status

            },

            'chavecriptografiasupersegura',
            {expiresIn: "30d"},
        )
        
        res.status(200).send({msg:'voce foi logado', token: token})
    } catch (erro) {
        console.log(erro)
        res.status(500).send("Houve um problema")
    }
}

export {registro, login}