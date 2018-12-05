var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

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

IngredientSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('ingredients', IngredientSchema);
