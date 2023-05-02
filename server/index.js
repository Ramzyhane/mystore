import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import ProductsRoute from './controllers/product.js';
dotenv.config();

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api/products', ProductsRoute)
mongoose.connect(process.env.MONGO_URL)
.then(results => {
    
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch(error => {
    console.log(error);
})

