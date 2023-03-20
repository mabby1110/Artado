const express = require('express')
const router = express.Router()
const path = require('path')

const {User, Post } = require('../models/schema')

// create
router.post('/usr/', async (req, res) => {
    // console.log(req.body)
    const { tag, password } = req.body
    const CreateUser = new User({tag, password})
    await CreateUser.save()
    res.json({status: "user saved"})
})

// read
router.get('/usr/', async (req, res) => {
    const ReadUser = await User.find()
    res.json(ReadUser)
})

router.get('/usr/:id', async (req, res) => {
    const ReadUser = await User.findById(req.params.id)
    res.json(ReadUser)
})

//update
router.put('/usr/:id', async (req, res) => {
    const {tag, password} = req.body
    const UpdateUser  = {tag, password}
    await User.findByIdAndUpdate(req.params.id, UpdateUser)
    res.json({status: "user updated"})
})

// delete
router.delete('/usr/:id', async (req, res) => {
    const {tag, password} = req.body
    const DeleteUser = {tag, password}
    await User.findByIdAndDelete(req.params.id, DeleteUser)
    res.json({status: "user deleted"})
})




// create
router.post('/post/', async (req, res) => {
    const {
        Titulo,
        Descripcion,
        Objetivo,
        Rol
    } = req.body
    const CreatePost = new Post({Titulo, Descripcion, Objetivo, Rol})
    await CreatePost.save()
    res.json({status: "Post saved"})
})

// read
router.get('/post/', async (req, res) => {
    const ReadPost = await Post.find()
    res.json(ReadPost)
})

router.get('/post/:id', async (req, res) => {
    const ReadPost = await Post.findById(req.params.id)
    res.json(ReadPost)
})

//update
router.put('/post/:id', async (req, res) => {
    const {
        Titulo,
        Descripcion,
        Objetivo,
        Rol
    } = req.body
    const UpdatePost  = {Titulo, Descripcion, Objetivo, Rol}
    await Post.findByIdAndUpdate(req.params.id, UpdatePost)
    res.json({status: "Post updated"})
})

// delete
router.delete('/post/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id, DeletePost)
    res.json({status: "Post deleted"})
})

module.exports = router