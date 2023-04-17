// servidor con express
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const { mongoose } = require('./database')



const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))              // formatea y muestra los request al servidor
app.use(express.json())    //comprueba que los datos recibidos estan en formato json

// Routes
app.use('/api', require('./routes/db.routes'))

// Statics
app.use(express.static(path.join(__dirname, 'public')))
app.use('*', require('./routes/react.routes'))

// Server
app.listen(app.get('port'), () =>{
    console.log(`n.n -> conectado al puerto ${app.get('port')}`)
})