const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    name:String,
    email:String,
    password:String,
    createdAt: {
        type: Date,
        default: Date.now,
      },

});

module.exports = mongoose.model("customers",customerSchema);