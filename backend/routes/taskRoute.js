import express from "express";
import { task } from "../models/taskmodel.js";

const Router = express.Router();

// Add a Task to the Database
Router.post('/', async(req, res) => {
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
Router.get('/', async(req, res) => {
    try{
        const Tasks = await task.find();
        return res.status(200).json({
            count: Tasks.length,
            data: Tasks
        })
    }catch (error){
        console.log(error);
        res.status(500).send({message : error.message});
    }
})

// Get task by id
Router.get('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const Task = await task.findById(id);
        return res.status(200).json(Task);
    }catch (error){
        console.log(error);
        res.status(500).send({message : error.message});
    }
})



// Update Task by id
Router.put('/:id', async(req, res) => {
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
Router.delete('/:id', async(req, res) => {
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

export default Router;