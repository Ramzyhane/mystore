import express  from "express";
const router = express.Router();
import mongoose from "mongoose";


router.get('/sayHellow', async(req,res) => {
    return res.status(200).json({
        message: 'Hellow from server side '
    })
})

export default router;