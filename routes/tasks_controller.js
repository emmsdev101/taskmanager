const express = require('express')
const TaskModel = require('../model/taskmodel')
const app = express()


// Creating new task
app.post('/', async(req, res)=>{
    const task_create =  new TaskModel({
        description:req.body.description,
        category:req.body.category,
        task_date:req.body.task_date,
        task_time:req.body.task_time
    })
    try {
        const task_created = await task_create.save()
        res.json(task_created)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})
// Fetching tasks
app.get('/', async(req, res)=>{
    try {
        const data = await TaskModel.find({},{
        "date_created":0,
        "_id": 0,
        "__v": 0
    })
        res.json(data)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})
app.get('/category/:category', async(req, res)=>{
    try {
        const data = await TaskModel.find({
            category:req.params.category
        },{
            "date_created":0,
            "_id": 0,
            "__v": 0
        })
        res.json(data)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})
// Deleting tasks
app.delete('/', async(req, res)=>{
    try {
        const deleting = await TaskModel.deleteMany()
        if (deleting.ok) {
            res.json(deleting)
        }
    } catch (error) {
        res.json(error)
        console.log(error)
    } 
})


module.exports = app