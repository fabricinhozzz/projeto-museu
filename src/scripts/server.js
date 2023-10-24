
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

const dbURI = "mongodb+srv://fabricola:65c40jczWAsrflO4@cluster0.dlt0sum.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.json())

app.post('/login', async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.findOne({ username, password }).exec()

        if (!user) {
            return res.send('Credenciais inválidas')
        }

        if (user.type === 'admin') {
            res.redirect('/admin.html')
        } else if (user.type === 'cliente') {
            res.redirect('/client.html')
        } else {
            res.send('Tipo de usuário inválido')
        }
    } catch (error) {
        console.error('Erro ao autenticar:', error)
        res.status(500).send('Erro ao autenticar')
    }
})

const User = mongoose.model('User', {
    username: String,
    password: String,
    type: String
})

const Feedback = mongoose.model('Feedback', {
    text: String,
    userId: String
})

const AdminData = mongoose.model('AdminData', {
    data: String,
    adminId: String 
})

app.post('/api/feedback', async (req, res) => {
    const { text, userId } = req.body

    try {
        const feedback = new Feedback({ text, userId })
        await feedback.save()

        res.json({ message: 'Feedback enviado com sucesso' })
    } catch (error) {
        console.error('Erro ao enviar feedback:', error)
        res.status(500).json({ message: 'Erro ao enviar feedback' })
    }
})

app.post('/api/admin/addData', async (req, res) => {
    const { data, adminId } = req.body

    try {
        const adminData = new AdminData({ data, adminId })
        await adminData.save()

        res.json({ message: 'Dados adicionados com sucesso' })
    } catch (error) {
        console.error('Erro ao adicionar dados:', error)
        res.status(500).json({ message: 'Erro ao adicionar dados' })
    }
})

app.get('/api/admin/chartData', async (req, res) => {
    try {
        const data = await AdminData.find().exec()

        res.json(data)
    } catch (error) {
        console.error('Erro ao obter dados para o gráfico:', error)
        res.status(500).json({ message: 'Erro ao obter dados para o gráfico' })
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
