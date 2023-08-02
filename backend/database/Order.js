const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    firstname:String,
    lastname: String,
    email:String,
    number:String,
    address: String,
    city: String,
    product_id :[String],
    customer_id: String,
    totalamount: Number,
    createdAt: {
        type: Date,
        default: Date.now,
      },

});

module.exports = mongoose.model("orders",orderSchema);