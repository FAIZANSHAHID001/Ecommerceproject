const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm", {

        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4,
});
