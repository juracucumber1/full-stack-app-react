import express from 'express'
import mongoose from 'mongoose'

import { registerValidation, loginValidation, postCreateValidation } from './validations.js'

import checkAuth from "./utils/checkAuth.js";

// import {create} from "./controllers/PostControl"
// import { register, getMe, login } from "./controllers/UserControl"

import * as UserControl from "../controllers/UserControl"
import * as PostControl from "../controllers/PostControl"

mongoose.connect('mongodb+srv://admin:admin@cluster0.pts9fgk.mongodb.net/blog?retryWrites=true&w=majority',
    ).then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express();

app.use(express.json())


app.post('/auth/login', loginValidation, UserControl.login)
app.post('/auth/register', registerValidation, UserControl.register);
app.get('/auth/me', checkAuth, UserControl.getMe)

// app.get('/posts', PostController.getAll)
// app.get('/posts'/:id, PostController.getOne)
app.post('/posts', PostControl.create)
// app.delete('/posts', PostController.remove)
// app.patch('/posts', PostController.update)




app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server Ok');
})



// 1:31:00 timeLogVideo