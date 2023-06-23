import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentSchema = new Schema({
   _id: mongoose.Schema.Types.ObjectId,
   FName: String,
   LName: String,
   createdAt: { type: Date, default: Date.now },
   price: Number,
   image: String,
   isActive: { type: Boolean, default: true }
});


export default mongoose.model('carnews', studentSchema);