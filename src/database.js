// conexion con la base de datos
const mongoose = require('mongoose')
const URI = 'mongodb+srv://daniel117622:ids@danieldelacruz.iavhn.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);

mongoose.connect(URI)
    .then(db => console.log('n.n -> DB connected'))
    .catch(err => console.log(`u.u -> ${err}`))