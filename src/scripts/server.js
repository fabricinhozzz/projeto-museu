
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000
// se não tiver abrindo, ou executando algo, tente mudar o numero da porta


/*
    modelagem de dados
*/


app.use(bodyParser.json())

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username, password }).exec()

    if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas'})
    }

    res.json({ type: user.type })
})


/*
    envio de feedback
*/


/*
    adicionar dados pelo admin
*/


/*
    pegar os dados pro grafico
*/

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})
