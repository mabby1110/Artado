const express = require('express')
const router = express.Router()
const path = require('path')

const User = require('../models/schema')

// create
router.post('/', async (req, res) => {
    // console.log(req.body)
    const { tag, password } = req.body
    const CreateUser = new User({tag, password})
    await CreateUser.save()
    res.json({status: "user saved"})
})

// read
router.get('/', async (req, res) => {
    const ReadUser = await User.find()
    res.json(ReadUser)
})

router.get('/:id', async (req, res) => {
    const ReadUser = await User.findById(req.params.id)
    res.json(ReadUser)
})

//update
router.put('/:id', async (req, res) => {
    const {tag, password} = req.body
    const UpdateUser  = {tag, password}
    await User.findByIdAndUpdate(req.params.id, UpdateUser)
    res.json({status: "user updated"})
})

// delete
router.delete('/:id', async (req, res) => {
    const {tag, password} = req.body
    const DeleteUser = {tag, password}
    await User.findByIdAndDelete(req.params.id, DeleteUser)
    res.json({status: "user deleted"})
})

module.exports = router