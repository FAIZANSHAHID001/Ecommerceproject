const mongoose= require('mongoose');

const  productSchema= new mongoose.Schema({

    product_name: String,
    imagepath: [String],
    price: Number,
    category: String,
    units: Number,
    primary: String,
    secondary:String,
    aditional: String,
    createdAt: {
        type: Date,
        default: Date.now,
      },

});

module.exports = mongoose.model("products", productSchema);