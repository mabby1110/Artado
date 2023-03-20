// conexion con la base de datos
const mongoose = require('mongoose')
const URI = 'mongodb://127.0.0.1:27017/artado_db'

mongoose.set('strictQuery', false);

mongoose.connect(URI)
    .then(db => console.log('n.n -> DB connected'))
    .catch(err => console.log(`u.u -> ${err}`))