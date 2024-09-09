const db = require('../db.json')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try{
        const {email, senha} = req.body
        if(!email || !senha){
            res.send({erro:'email ou senha não enviado'})
        }
        const cliente = listClientes.find(
            (cliente) => cliente?.email == email)
        
        if(!cliente){
            res.status(404).send({error: 'not found'})
        }

        const senhaValida = bcrypt.compareSync(senha, cliente.senha)
        if(!senhaValida){
            res.send({error: 'a senha não é válida'})
        }

        const token = jwt.sign(
            {
                nome: cliente.nome,
                email: cliente.email,
                _id: cliente.id
            },
            'jwt_secret_key',
            {expiresIn: 1000*60*60*24*365}
        )

        res.cookie("TokenAulaBE", token).send({message:'ok'})
    }catch(e){
        console.log(e)
    }
}

module.exports = {login}