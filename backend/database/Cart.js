const mongoose= require('mongoose');

const  cartSchema= new mongoose.Schema({

    customer_id: String,
    product_id: String,
    createdAt: {
        type: Date,
        default: Date.now,
      },


});

module.exports = mongoose.model("cart", cartSchema);