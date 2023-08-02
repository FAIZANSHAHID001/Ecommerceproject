import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Checkout() {

    const [firstname, setFname] = useState("");
    const [lastname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity]= useState("");
    const [product_id, setProduct_id]= useState([]);
    const [orderstatus, setOrderstatus]= useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
       
        const auth= localStorage.getItem('customer');
        if(!auth){
            navigate("/customerlogin")

        }
        else{
            getcartdetails();
           
        }
        
     
    },[]);
    let totalamount =0
    const navigate= useNavigate();
    const [items, setItems] = useState([]);
    const getcartdetails=async()=>{
        const auth= localStorage.getItem('customer');
        let customer_id= JSON.parse(auth)._id;
        
        let result= await fetch(`http://localhost:5000/getcart/${customer_id}`);
        result = await result.json();
       const promises = result.map((item)=>getproductdetail(item.product_id));
       const products = await Promise.all(promises);
       setItems(products)
      
       
    }
   

    const placeorder=async()=>{
        // const formData = new FormData();
        // formData.append('firstname', fname);
        // formData.append('lastname', lname);
        // formData.append('email', email);
        // formData.append('number', number);
        // formData.append('address', address);
        // formData.append('city', city);
        if(!firstname || !lastname || !email || !number || !address || !city){
            setError(true);
            return false;
        }
          const auth= localStorage.getItem('customer');
        const copiedarray = [...items];
          setProduct_id(copiedarray);
          let customer_id= JSON.parse(auth)._id;
        
        let result= await fetch(`http://localhost:5000/placeorder`,{
            method: 'post',
            body: JSON.stringify({ firstname,lastname, email,number, address, city , product_id , customer_id, totalamount }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if(result){
            setOrderstatus(true);
            setError(false)
        }
    }

    const getproductdetail=async(productidd)=>{
        
        let result= await fetch(`http://localhost:5000/getproductdetails/${productidd}`);
        result = await result.json();
       
       return result;
      
        
    }
    return (
        <div className="checkout">
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-12">
                        <nav class="breadcrumb bg-light mb-30">
                            <a class="breadcrumb-item text-dark" href="#">Home</a>
                            <a class="breadcrumb-item text-dark" href="#">Shop</a>
                            <span class="breadcrumb-item active">Checkout</span>
                        </nav>
                    </div>
                </div>
            </div>
           
            <div class="container-fluid">

        <div class="row px-xl-5">
            
            <div class="col-lg-8">
                {
                    error && <div class="alert alert-danger" role="alert">
                    Fill this form first!!
                                    </div>
                }
                {
                    orderstatus &&  <div class="alert alert-success" role="alert">
                    Congratulations! your order has been placed
                                    </div>
                }
           
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Billing Address</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label>First Name</label>
                            <input class="form-control" type="text" placeholder="John" onChange={((e)=>setFname(e.target.value))} value={firstname}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Last Name</label>
                            <input class="form-control" type="text" placeholder="Doe" onChange={((e)=>setLname(e.target.value))} value={lastname}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>E-mail</label>
                            <input class="form-control" type="text" placeholder="example@email.com" onChange={((e)=>setEmail(e.target.value))} value={email}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Mobile No</label>
                            <input class="form-control" type="text" placeholder="+123 456 789" onChange={((e)=>setNumber(e.target.value))} value={number}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Address Line 1</label>
                            <input class="form-control" type="text" placeholder="123 Street" onChange={((e)=>setAddress(e.target.value))} value={address}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Address Line 2</label>
                            <input class="form-control" type="text" placeholder="123 Street"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Country</label>
                            <select class="custom-select">
                                <option selected>United States</option>
                                <option>Afghanistan</option>
                                <option>Albania</option>
                                <option>Algeria</option>
                            </select>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>City</label>
                            <input class="form-control" type="text" placeholder="New York" onChange={((e)=>setCity(e.target.value))} value={city}/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>State</label>
                            <input class="form-control" type="text" placeholder="New York"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>ZIP Code</label>
                            <input class="form-control" type="text" placeholder="123"/>
                        </div>
                        
                      
                    </div>
                </div>
               
            </div>
            <div class="col-lg-4">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Order Total</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="border-bottom">
                        <h6 class="mb-3">Products</h6>
                        {
                             ( items && items.length > 0) ?
                             items.map((item) =>
                             <div class="d-flex justify-content-between">
                                    <p>{item.product_name}</p>
                                    <p>{item.price}</p>
                                </div>
                             )
                             :
                             <span>Cart is empty</span>
                        }
                       
                       
                    </div>
                    <div class="border-bottom pt-3 pb-2">
                        <div class="d-flex justify-content-between mb-3">
                    {console.log( items.map((item) =>totalamount = totalamount + item.price))}
                            <h6>Subtotal</h6>
                            <h6>{totalamount}</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-medium">Shipping</h6>
                            <h6 class="font-weight-medium">$10</h6>
                        </div>
                    </div>
                    <div class="pt-2">
                        <div class="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>$ {totalamount + 10}</h5>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Payment</span></h5>
                    <div class="bg-light p-30">
                        <div class="form-group">
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" name="payment" id="paypal"/>
                                <label class="custom-control-label" for="paypal">Paypal</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" name="payment" id="directcheck"/>
                                <label class="custom-control-label" for="directcheck">Direct Check</label>
                            </div>
                        </div>
                        <div class="form-group mb-4">
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" name="payment" id="banktransfer"/>
                                <label class="custom-control-label" for="banktransfer">Bank Transfer</label>
                            </div>
                        </div>
                        <button class="btn btn-block btn-primary font-weight-bold py-3" onClick={()=>placeorder()}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}
export default Checkout;