import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FavoritesScema = new Schema({
    GadetId: String
 
})
export default mongoose.model('Favorites', FavoritesScema);