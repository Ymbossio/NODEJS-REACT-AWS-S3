import express from "express";
import router from "./photo.routes.js";
import cors from 'cors'
import fileUpload from "express-fileupload";

const app = express()
const PORT = 2508

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './Archivos'
}))

app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`Server run on port ${PORT} 🚀`)
})
