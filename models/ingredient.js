var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      unique: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
    },
}, { timestamps: true });

module.exports = mongoose.model('ingredients', IngredientSchema);
