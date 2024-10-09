const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const TodoModel = require('./Models/todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://YashrajDodia:Yashraj1069@yashrajcluster.c7pjt.mongodb.net/TodoList')

app.get('get' , (req,res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task : task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
});


app.listen(3001,()=>{
    console.log("Server is running")
})
