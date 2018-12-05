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
      default: 0,
    },
}, { timestamps: true });

IngredientSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('ingredients', IngredientSchema);
