const express = require('express')
const router = express.Router()
const path = require('path')

// create
router.post('/', async (req, res) => {
    // console.log(req.body)
    const { title, description } = req.body
    const task = new Task({title, description})
    await task.save()
    res.json({status: "Task Saved"})
})

// read
router.get('/', async (req, res) => {
    const tasks = await Task.find()
    // console.log(tasks)
    res.json(tasks)
})

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id)
     console.log(tasks)
    res.json(task)
})

//update
router.put('/:id', async (req, res) => {
    const {title, description} = req.body
    const updateTask  = {title, description}
    await Task.findByIdAndUpdate(req.params.id, updateTask)
    res.json({status: "Task Updated"})
})

// delete
router.delete('/:id', async (req, res) => {
    const {title, description} = req.body
    const deleteTask  = {title, description}
    await Task.findByIdAndDelete(req.params.id, deleteTask)
    res.json({status: "Task Deleted"})
})

module.exports = router