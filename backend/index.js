import express from "express";
import {PORT, MongoDBURL} from './config.js';
import mongoose from "mongoose";
import taskRoute from "./routes/taskRoute.js";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

mongoose.connect(MongoDBURL)
.then(()=>{
    console.log("App Connected to Database");
    app.listen(PORT, () => {
        console.log(`app listening at ${PORT}`);
    });
})
.catch((error) => {
  console.error("App couldn't connect to Database:", error);
});


app.use("/api/tasks", taskRoute)


app.get('/', async(req, res) => {
    console.log(req);
    res.status(234).send("Hello")
})