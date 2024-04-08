import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {test} from "./controllers/user.controller.js"
dotenv.config()


mongoose.connect(process.env.url_db)
.then(() => {
    console.log('conexion exitosa')
})
.catch(() => {
    console.log('No funcionó')
})

const app = express()
app.use(cors())
app.listen(4000, () => {
    console.log('la api esta corriendo')
})
test()