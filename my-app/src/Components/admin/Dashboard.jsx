import React from 'react';
import {Link} from 'react-router-dom'
import {useState ,useEffect} from 'react'
import './adminpanel.css'

function Dashboard(){
    const [customerscount, setCustomercount] = useState('0');
    const [ordercount, setOrdercount] = useState('0');
    const [productcount, setProductcount] = useState('0');
    const [orders,setOrders]=useState([]);
    const [customers,setCustomers]=useState([]);





    useEffect(()=>{
        getcustomercount();
        getordercount();
        getproductcount();
        getallorders();
        getallcustomers();
    });

    const deleteorder=async(id)=>{
       
            let result= await fetch(`http://localhost:5000/deleteorder/${id}`,{
                method: "Delete",
    
            });
            result= await result.json();
            if(result){
               getallorders();
            }
    
        
    
    }
    const deletecustomer=async(id)=>{
       
        let result= await fetch(`http://localhost:5000/deletecustomer/${id}`,{
            method: "Delete",

        });
        result= await result.json();
        if(result){
           getallcustomers();
        }

    

}

    const getallcustomers=async()=>{
        let result=await fetch(`http://localhost:5000/allcustomers`);
        result=await result.json();
        setCustomers(result);
    }
    const getallorders=async()=>{
        let result=await fetch(`http://localhost:5000/allorders`);
        result=await result.json();
        setOrders(result);
    }
    const getcustomercount=async()=>{
        let result=await fetch(`http://localhost:5000/countcustomer`);
        result=await result.json();
        setCustomercount(result);
    }
    const getordercount=async()=>{
        let result=await fetch(`http://localhost:5000/countorder`);
        result=await result.json();
        setOrdercount(result);
    }
    const getproductcount=async()=>{
        let result=await fetch(`http://localhost:5000/countproduct`);
        result=await result.json();
        setProductcount(result);
    }
    
    return (
        <div className='dashboard'>
            <div className='container mt-4'>
                <div className='row '>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-4 p-3'>
                        <div className='info-card'>
                            <div className='row'>
                                <div className='col-8 '>
                                   <h5>Customers</h5>
                                   <h5>{customerscount.count}</h5>
                                </div>
                                <div className='col-4 d-flex justify-content-center'>
                                <img width="60" height="60" src="https://img.icons8.com/color/96/male-female-user-group.png" alt="male-female-user-group"/>                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-4 p-3'>
                        <div className='info-card'>
                            <div className='row'>
                                <div className='col-8 '>
                                   <h5>Products</h5>
                                   <h5>{productcount.count}</h5>
                                </div>
                                <div className='col-4 d-flex justify-content-center'>
                                <img width="60" height="60" src="https://img.icons8.com/stickers/100/products-pile.png" alt="products-pile"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-4 p-3'>
                        <div className='info-card'>
                            <div className='row'>
                                <div className='col-8 '>
                                   <h5>Sales</h5>
                                   <h5>{ordercount.count}</h5>
                                </div>
                                <div className='col-4 d-flex justify-content-center'>
                                <img width="60" height="60" src="https://img.icons8.com/color/96/total-sales-1.png" alt="total-sales-1"/>                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-4 p-3'>
                        <div className='info-card'>
                            <div className='row'>
                                <div className='col-8 '>
                                   <h5>Balance</h5>
                                   <h5>$2.5k</h5>
                                </div>
                                <div className='col-4 d-flex justify-content-center'>
                                <img width="60" height="60" src="https://img.icons8.com/emoji/48/money-bag-emoji.png" alt="money-bag-emoji"/>                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className='row mt-4'>
                    <div className='col-lg-9 col-md-12'>
                    <h4><img width="40" height="40" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/64/external-logistics-shipping-delivery-kmg-design-flat-kmg-design-2.png" alt="external-logistics-shipping-delivery-kmg-design-flat-kmg-design-2"/> Orders</h4>

                    <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Location </th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        { (orders && orders.length > 0 ) ?
                                            orders.map((item) =>
                                            <tr>
                                            <td data-label="Account">{item.firstname}</td>
                                            <td data-label="Due Date">{item.city}</td>
                                            <td data-label="Amount">{item.number}</td>
                                            <td data-label="Period">{item.totalamount}</td>
                                            <td data-label="Period"><button className='dashboard-delete ml-2' onClick={()=>deleteorder(item._id)}>Delete</button></td>
                                            </tr>
                                    )
                                    :
                                    <tr>
                                            
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                </tr>
                                   
                                   

                                }
                                    
                                       
                                       
                                        </tbody>
                    </table>  

                    <h4 className='mt-5'><img width="40" height="40" src="https://img.icons8.com/fluency/48/group.png" alt="group"/> Customers</h4>
                    <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">User ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        { (customers && customers.length > 0 ) ?
                                            customers.map((item) =>
                                            <tr>
                                            <td data-label="Account">{item.name}</td>
                                            <td data-label="Due Date">{item.email}</td>
                                            <td data-label="Amount">{item.password}</td>
                                            <td data-label="Period"><Link className='action-button' onClick={()=>deletecustomer(item._id)}><i class="fa fa-trash" aria-hidden="true"></i> Remove </Link></td>
                                           
                                            </tr>
                                    )
                                    :
                                    <tr>
                                            
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                </tr>
}
                                      
                                       
                                        
                                     
                                        </tbody>
                    </table>  
                    </div>
                    <div className='col-lg-3 col-md-12 '>
                        <div className='list-card'>
                            <h4><img width="50" height="50" src="https://img.icons8.com/nolan/64/bulleted-list.png" alt="bulleted-list"/> Categories</h4>
                            <ul>
                               
                                <li>Men Clothing</li>
                                <li>Women Clothing</li>
                                <li>Fragnances</li>
                                <li>Shoes</li>
                                
                               
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
export default Dashboard;