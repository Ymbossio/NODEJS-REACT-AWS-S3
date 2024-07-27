import express from "express";

const app = express()
const PORT = 2508

app.listen(PORT, ()=>{
    console.log(`Server run on port ${PORT} 🚀`)
})


app.get('/', (req, res)=>{
    res.send('Main page')
})