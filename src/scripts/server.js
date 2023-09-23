
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

const adminCredentials = { username: 'admin', password: 'comunismo' }


/*
    modelagem de dados dos clientes
*/


let nextClientId = clientsDB.length + 1

// posso ter errado os caminhos pro login, etc, só vai dar pra saber testando
app.post('../public/login.html', (req, res) => {
    const { username, password } = req.body

    if (username === adminCredentials.username && password === adminCredentials.password) {
        res.redirect('./admin.html')
    } else{
        const client = clientsDB.find((client) => client.username === username)

        if (client) {
            if (client.password === password) {
                res.redirect('../public/client.html')
            } else{
                res.send("erro: usuário ou senha incorreta!")
            }
        } else{
            const newClient = { id: nextClientId++, username, password }
            clientsDB.push(newClient)

            res.send(`cadastro bem sucedido! você comprou o ingresso de número ${newClient.id}`)
        }
    }
})


/*
    envio de feedback
*/


/*
    pegar os dados pro grafico
*/

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})
