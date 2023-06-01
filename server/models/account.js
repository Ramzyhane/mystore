import mongoose from "mongoose";
const Schema = mongoose.Schema;

const accountSchema = new Schema({
   _id: mongoose.Schema.Types.ObjectId,
   firstName: String,
   lastName: String,
   uid: String,
   avatar: String,
   email: String,
   password: String
});


export default mongoose.model('Account', accountSchema);