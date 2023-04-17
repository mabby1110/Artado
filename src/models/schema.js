const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    tag: {type: String, required: true},
    password: {type: String, required: true}
})

const PostSchema = new Schema({
    Titulo: {type: String, required: true},
    Descripcion: {type: String, required: true},
    Objetivo: {type: String, required: true},
    Rol: [
        {
            Titulo: {type: String, required: true},
            Etiquetas: [{type: String, required: true}]
        }
    ],
    imgLink: {type: String, required:false}
})

module.exports = {
    User: mongoose.model('User', UserSchema),
    Post: mongoose.model('Post', PostSchema)
}