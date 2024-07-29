import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    res.send('Main page')
})

router.post('/upload', (req, res) =>{

    console.log(req.files);
    
    res.send('Upload file')
})


export default router