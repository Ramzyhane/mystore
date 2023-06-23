import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import ProductsRoute from './controllers/product.js';
//import grooRouter from './Gro/groo.js';
dotenv.config();
import actions from './controllers/product.js';

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api/products', ProductsRoute)
//app.use('/api/groo', grooRouter)
app.use('/api/', actions)
mongoose.connect(process.env.MONGO_URL)
.then(results => { 
    app.listen(process.env.PORT, () => {
        console.log(results)
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch(error => {
    console.log(error);
})

