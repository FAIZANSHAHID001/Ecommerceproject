
const express= require('express');
require('./database/config');
const cors= require("cors");
const User= require("./database/User");
const Product = require("./database/Product");
const Customer = require("./database/Customer");
const Cart= require("./database/Cart");
const Order = require("./database/Order");
const bodyParser = require('body-parser');
const path= require('path');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
const upload= multer({
    storage: multer.diskStorage({
        destination: function(req, file,cb){
            cb(null, "../my-app/src/images" )
        },
        limits: {
            fileSize: 50 * 1024 * 1024, // 50MB file size limit
          },
        filename: function(req, file, cb){
            let ext = path.extname(file.originalname)
            cb(null, file.fieldname +"-"+ Date.now()+ ext)
        }
    })
}).array("images");

app.post("/register", async (req,res)=>{
    let user= new User (req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post("/customersignup", async (req,res)=>{
    let customer= new Customer(req.body);
    let result = await customer.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post("/addtocart", async (req,res)=>{
    let cart= new Cart(req.body);
    let result = await cart.save();
    
    res.send(result);
})

app.get('/countCartEntries/:customer_id', async (req, res) => {
    const customer_id = req.params.customer_id;
      const count = await Cart.countDocuments({ customer_id });
      res.json({ count });
  
  });

  app.get('/countcustomer', async (req, res) => {
      const count = await Customer.countDocuments();
      res.json({ count });
  
  });
  app.get('/countorder', async (req, res) => {
      const count = await Order.countDocuments();
      res.json({ count });
  
  });
  app.get('/countproduct', async (req, res) => {
      const count = await Product.countDocuments();
      res.json({ count });
  
  });

  app.get('/allorders', async (req, res) => {
    const result= await Order.find();
    res.send(result);

});

app.get('/allcustomers', async (req, res) => {
    const result= await Customer.find();
    res.send(result);

});
app.post("/placeorder", async (req,res)=>{
    let order= new Order(req.body);
    let result = await order.save();
    
    res.send(result);
})
 app.get("/getcart/:id", async(req,res)=>{
    let result= await Cart.find({customer_id: req.params.id});
    if(result){
        res.send(result);
    }
    else{
        res.send({result:"no car found"});
    }
 })

app.post("/login",async (req, res)=>{
    if(req.body.email && req.body.password){
        let user= await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }
        else{
            res.send({result:"No user found"});
        }   
    }
    else{
        res.send({result:"Something is missing"});
    }
})


app.post("/customerlogin",async (req, res)=>{
    if(req.body.email && req.body.password){
        let user= await Customer.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }
        else{
            res.send({result:"No user found"});
        }   
    }
    else{
        res.send({result:"Something is missing"});
    }
})
app.post("/add-product",upload, async(req,res)=>{
    const productdata = req.body;
    const imagepaths = req.files.map((file) => file.path); 
    productdata.imagepath = imagepaths;
        let item= new Product(productdata);
        let result= await item.save();
        res.send(result);

})

app.get("/getproducts",async(req,res)=>{
    const products= await Product.find();
    if(products.length > 0){
       res.send(products);
    }
    else{
        res.send({result:"no car found"});
    }
})
app.delete("/delete/:id",async (req,res)=>{
    let result=await Product.deleteOne({_id:req.params.id});
    res.send(result);
});

app.delete("/deleteorder/:id",async (req,res)=>{
    let result=await Order.deleteOne({_id:req.params.id});
    res.send(result);
});
app.delete("/deletecustomer/:id",async (req,res)=>{
    let result=await Customer.deleteOne({_id:req.params.id});
    res.send(result);
});
app.delete("/deletecartitem/:id",async (req,res)=>{
    let result=await Cart.deleteOne({product_id:req.params.id});
    res.send(result);
});

app.get("/getproductdetails/:id", async(req,res)=>{
    let result= await Product.findOne({_id: req.params.id});
    if(result){
        res.send(result);
    }
    else{
        res.send({result:"no car found"});
    }
});

app.get("/search/:key", async(req,res)=>{
    let result = await Product.find({
        "$or":[
            {
                product_name: {$regex: req.params.key},
            }

        ]
    });
    res.send(result);
});

app.get("/categorysearch/:key", async(req,res)=>{
    let result = await Product.find({
        "$or":[
            {
                category: {$regex: req.params.key},
            }

        ]
    });
    res.send(result);
});

app.get("/pricesearch/:category/:price", async (req, res) => {

    
    const { category, price } = req.params;
    const numericPrice = parseFloat(price);
    let result = await Product.find({
     
        category: { $regex: category} ,
        price: { $lt: numericPrice },
       
    
    });
  
    res.send(result);
  });



app.get("/getrecentproducts",async(req,res)=>{
    let result= await Product.find().sort({createdAt:-1}).limit(6);
    res.send(result);
})

app.listen(5000);       
