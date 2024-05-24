const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://aleezeynalov:1234567A@cluster0.n2eunza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const bodyParser = require('body-parser')
const cors = require('cors');
const { Timestamp } = require('mongodb');
const Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


app.use(cors())

app.get('/api/chairs', async (req, res) => {

    try {

        const Chairs = await ChairModel.find({});
        res.send(Chairs)
    } catch (error) {
        res.status(500).send({ message: "error" })
    }


})
app.get('/api/chairs/:id', async (req, res) => {

    try {
        const Chairs = ChairModel.findById(req.params.id)
        res.send(Chairs)
    } catch (error) {
        res.status(500).send({ message: "error" })
    }

})
app.delete('/api/chairs/:id', async (req, res) => {
    try {
        const Chairs = ChairModel.findByIdAndDelete(req.params.id)
        res.send(Chairs)
    } catch (error) {
        res.status(500).send({ message: "error" })
    }
})
app.post('/api/chairs', async (req, res) => {
    try {
        const Chairs = ChairModel.findById()
        res.send(Chairs)
    } catch (error) {
        res.status(500).send({ message: "error" })
    }
})

const ChairSchema = new Schema({
    title: { type: String, Request: true },
    price: { type: String, Request: true },
    imgUrl: { type: String, Request: true },

})

const ChairesSchema = mongoose.model('ChairModel', ChairSchema);




mongoose.connect(DB_URL)
    .then(() => {
        console.log('Connected!')
        app.listen(port, () => {
            console.log(`Link: http://localhost:${port}`)
        })

    });