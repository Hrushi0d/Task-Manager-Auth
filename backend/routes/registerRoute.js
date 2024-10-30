import express from "express";
import { user } from "../models/usersmodel.js";
import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt'

const Router = express.Router();

Router.post('/register', async(req,res) => {
    try {
        if (!req.body.name||
            !req.body.email||
            !req.body.password
        ) {
            return res.status(400).send({
                message: 'Send All required Feilds : name, email, password'
            });
        }
        const pass = await bcrypt.hash(req.body.password, 10)
        const User_Body = {
            name: req.body.name,
            email: req.body.email,
            password: pass,
        }
        const User = await user.create(User_Body);
        return res.status(201).send(User);
    } catch (error) {
        res.status(500).send({messsage: error.message})
    }
})

Router.post('/', async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({
                message: 'Send all required fields: email, password'
            });
        }

        
        const USER = await user.findOne({ email: req.body.email });
        if (!USER) {
            return res.status(404).send({ status: 'error', message: 'User not found' });
        }

        
        const isValidPassword = await bcrypt.compare(req.body.password, USER.password);
        if (!isValidPassword) {
            return res.status(401).send({ status: 'error', message: 'Wrong password' });
        }

        
        const token = jwt.sign({ email: USER.email, id: USER._id }, "secret123", { expiresIn: '1h' });

        return res.status(200).send({ status: 'ok', user: token });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

export default Router;
