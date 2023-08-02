import React, {useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    useEffect(()=>{
       
        const auth= localStorage.getItem('customer');
        if(!auth){
            navigate("/customerlogin")

        }
        else{
            getcartdetails();
           
        }
        
     
    },[]);
    const navigate= useNavigate();
    const [items, setItems] = useState([]);
    let [productid, setProductid]= useState([]);
    let totalamount =0
    const getcartdetails=async()=>{
        const auth= localStorage.getItem('customer');
        let customer_id= JSON.parse(auth)._id;
        
        let result= await fetch(`http://localhost:5000/getcart/${customer_id}`);
        result = await result.json();
       const promises = result.map((item)=>getproductdetail(item.product_id));
       const products = await Promise.all(promises);
       setItems(products)
      
       
    }

    const getproductdetail=async(productidd)=>{
        
        let result= await fetch(`http://localhost:5000/getproductdetails/${productidd}`);
        result = await result.json();
       
       return result;
      
        
    }
    const checkout=()=>{
        navigate('/checkout')
    }
  
    const deletecartitem=async(itemid)=>{
     
        let result = await fetch(`http://localhost:5000/deletecartitem/${itemid}`,{
            method: "Delete",

        });
        if (result){
           getcartdetails();
        }
    }


    return (
        <div className="cart">
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-12">
                        <nav class="breadcrumb bg-light mb-30">
                            <a class="breadcrumb-item text-dark" href="#">Home</a>
                            <a class="breadcrumb-item text-dark" href="#">Shop</a>
                            <span class="breadcrumb-item active">Shopping Cart</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-lg-8 table-responsive mb-5">
                <table class="table table-light table-borderless table-hover text-center mb-0">
                    <thead class="thead-dark">
                        <tr>
                            <th>Products</th>
                            <th>Price</th>
                        
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle">
                    {
                             ( items && items.length > 0) ?
                             items.map((item) =>
                             <tr>
                             <td class="align-middle"><img className="cart-img" src={require(`../images/${item.imagepath[0].replace('..\\my-app\\src\\images\\', '')}`)}  alt=""/>   {item.product_name}</td>
                             <td class="align-middle">$ {item.price}</td>
                           
                             <td class="align-middle"> $ {item.price}</td>
                             <td class="align-middle"><button class="btn btn-sm btn-danger" onClick={()=>deletecartitem(item._id)}><i class="fa fa-times"></i></button></td>
                                </tr>
                             )
                             :
                             <span>Cart is empty</span>
                        }
                       
                       
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4">
                <form class="mb-30" action="">
                    <div class="input-group">
                        <input type="text" class="form-control border-0 p-4" placeholder="Coupon Code"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary">Apply Coupon   { items.map((item) =>totalamount = totalamount + item.price)}</button>
                        </div>
                    </div>
                </form>
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Cart Summary</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="border-bottom pb-2">
                  
                        <div class="d-flex justify-content-between mb-3">
                        
                             
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
                            <h5>{totalamount+10}</h5>
                        </div>
                        <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={()=>checkout()}>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}
export default Cart;