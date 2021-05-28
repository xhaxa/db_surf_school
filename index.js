require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')


mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB || 'test',
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) { throw new Error(err) }
  console.info('Connected to MongoDB')
})

const app = express()
  .use(cors())
  .use(morgan('combined'))
  .use(express.json())
  
app.listen(process.env.PORT, (err) => {
  if (err) { throw new Error(err) }
  console.info('>'.repeat(40))
  console.info('Reboot Server life')
  console.info('PORT: localhost:', process.env.PORT)
  console.info('>'.repeat(40) + '\n')
})

//EN EL PACKAGE JSON. EN SCRIPTS, DAR LA MANERA DE FUNCIONAR AL USUARIO QUE LO USE, INDICANDOLO tb EN LA DOCUMENTACIÓN PERO NORMALMENTE "dev" : "nodemon index.js" HACER UNA INTERFACE PORQUE EL USUARIO NO TIENE PORQUE SABER SU FORMA DE ENTRAR .. EL USUARIO PONDRÁ npm run dev ---- (y  puedes tener mil scripts incluso con variables. "dev" : "ENVIRONMENT=DEV nodemon index.js")O UN "start" o un "bu¡ld" o "prod"