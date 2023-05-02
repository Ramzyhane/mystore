import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentSchema = new Schema({
   _id: mongoose.Schema.Types.ObjectId,
   studentName: String
});

export default mongoose.model('Student', studentSchema);