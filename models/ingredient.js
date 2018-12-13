import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const IngredientSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      unique: true,
    },
    quantity: {
      type: Number,
    },
}, { timestamps: true });

IngredientSchema.plugin(mongoosePaginate);

export default mongoose.model('ingredients', IngredientSchema);
