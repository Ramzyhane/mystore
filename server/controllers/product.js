import express  from "express";
const router = express.Router();
import mongoose from "mongoose";
import Student from '../models/student.js';


router.get('/getStudents', async(req,res) => {
    Student.find()
    .then(students => {
        return res.status(200).json({
            message: students
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error
        })
        
    })
  
})

router.post('/createProduct', async(req,res) => {
    const studentNmae = req.body.studentNmae;
    const id = new mongoose.Types.ObjectId();

    const _student = new Student({
        _id: id,
        studentName: studentNmae
    })
    _student.save()
    .then(student => {
        console.log(student)
        return res.status(200).json({
            message: student._id
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error
        })

    })

   
})


export default router;