import express from 'express'
import mongoose from 'mongoose'

const Gatito = mongoose.model('Gatito', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://shinu:password@localhost:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... gatitos...')
  const Gatitos = await Gatito.find();
  return res.send(Gatitos)
})
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Gatito.create({ tipo: 'Gatito', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))
