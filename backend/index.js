import express, { json } from "express";
import {PORT, MongoDBURL} from './config.js';
import mongoose, { connect } from "mongoose";
import { task } from "./models/taskmodel.js";

const app = express();
app.use(express.json());

mongoose.connect(MongoDBURL)
.then(()=>{
    console.log("App Connected to Database");
    app.listen(PORT, () => {
        console.log(`app listening at ${PORT}`);
    });
})
.catch(()=>{
    console.log("App couldn't connect to Database");
})


app.get('/', async(req, res) => {
    console.log(req);
    res.status(234).send("Hello")
})

// Add a Task to the Database
app.post('/Tasks', async(req, res) => {
    try{
        if (!req.body.title||
            !req.body.description
        ) {
            return res.status(400).send({
                message: 'Send All required Feilds : title, description'
            });
        }
        const Task_Body = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate,
            priority: req.body.priority,
        }
        const Task = await task.create(Task_Body);
        return res.status(201).send(Task);
    }catch (error){
        console.log(error);
        res.status(500).send({message : error.message});
    }
})

// return All tasks
app.get('/Tasks', async(req, res) => {
    try{
        const Tasks = await task.find();
        return res.status(500).json({
            count: Tasks.length,
            Tasks: Tasks
        })
    }catch (error){
        console.log(error);
        res.status(500).send({message : error.message});
    }
})

// Get task by id
app.get('/Tasks/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const Task = await task.findById({id});
        return res.status(500).json(Task);
    }catch (error){
        console.log(error);
        res.status(500).send({message : error.message});
    }
})

// Update Task by id
app.put('/Tasks/:id', async(req, res) => {
    try{
        if (!req.body.title||
            !req.body.description
        ) {
            return res.status(400).send({
                message: 'Send All required Feilds : title, description'
            });
        }
        const {id} = req.params;
        const result = await task.findByIdAndUpdate(id,req.body);
        if (!result){
            return res.status(404).send({message: "Task not Found"})
        }
        return res.status(201).send({message: "Task Updated Successfully"})
    }catch (error){
        console.log(error);
        res.status(500).send({message : error.message});
    }
})

// Delete Task by id
app.delete('/Tasks/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const result = await task.findByIdAndDelete(id);
        if (!result){
            return res.status(404).send({message: "Task not Found"})
        }
        return res.status(201).send({message: "Task Deleted Successfully"})
    }catch (error){
        console.log(error);
        res.status(500).send({message : error.message});
    }
})



