import express  from "express";
const router = express.Router();
import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'
import Student from '../models/student.js';

import Account from '../models/account.js';
import Std from '../models/student.js';


router.post('/create', async(req,res) => {
   const newcar =req.body.student;
   const id =new mongoose.Types.ObjectId();
   const _student = new Std({
    _id:id,
    FName: newcar.FName,
    LName: newcar.LName,
    price: newcar.price,
    image: newcar.image

   })
   _student.save()
   .then(st_creat => {
    return res.status(200).json({
        msg:st_creat
    })
   })
   .catch(error => {
    return res.status(500).json({
        msg: error.message
    })   
  })
})

router.get('/getStudent', (req,res) => {
    Student.find()
    .then(studens=>{
        return res.status(200).json({
            msg: studens
        })
    })
    .catch(error => {
        return res.status(500).json({
            msg: error.message
        })   
      })
  
})





router.post('/creatNewAccount', async(req,res) =>{
     const user = req.body.user;
     const hash = await bcryptjs.hash(user.password,10);
     const id = new mongoose.Types.ObjectId();


     const _account = new Account({
        _id: id,
        firstName: user.firstName,
        lastName: user.lastName,
        uid: user.uid,
        avatar: "https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg",
        email: user.email,
        password: hash

     });
     _account.save()
     .then(accountCreated =>{
        return res.status(200).json({
            message: accountCreated
        })
     })
     .catch(error => {
        return res.status(500).json({
            message:error.message
        })
     })

})


router.post('/getMyDetails', async(req,res) =>{
    const user = req.body.user;
    Account.findOne({uid: user.uid})
    .then(account =>{
      
        return res.status(200).json({
            message: account
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
     
    })
})

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