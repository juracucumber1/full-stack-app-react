import express from 'express'
import mongoose from 'mongoose'

import { registerValidation, loginValidation, postCreateValidation } from './validations.js'

import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController"
import * as PostController from "./controllers/PostController"

mongoose.connect('mongodb+srv://admin:admin@cluster0.pts9fgk.mongodb.net/blog?retryWrites=true&w=majority',
    ).then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express();

app.use(express.json())


app.post('/auth/login', loginValidation, UserController.login)
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe)

// app.get('/posts', PostController.getAll)
// app.get('/posts'/:id, PostController.getOne)
// app.get('/posts'/:id, PostController.getOne)
// app.post('/posts'/:id, PostController.create)
// app.delete('/posts'/:id, PostController.remove)
// app.patch('/posts'/:id, PostController.update)




app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server Ok');
})



// 1:22:00 timeLogVideo