import mongoose from "mongoose";
const Schema = mongoose.Schema;

const shopingScema = new Schema({
    ShopId: String
 
})
export default mongoose.model('Shopping', shopingScema);