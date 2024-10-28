import express from "express";
import {PORT} from './config.js';

const app = express();

app.listen(PORT, () => {
    console.log(`app listening at ${PORT}`);
});

app.get('/', async(req, res) => {
    console.log(req);
    res.status(234).send("Hello")
})


