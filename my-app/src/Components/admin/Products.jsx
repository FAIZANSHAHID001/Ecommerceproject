import React from 'react';
import './adminpanel.css';
import {Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Productdetail from '../Productdetail';

function Products(){
    const [products, setProducts] = useState([]);
    const [searchkey, setSearchkey]= useState();
    const navigate= useNavigate();
    useEffect(() => {
        getproducts();

    }, []);


    const search=async()=>{

        let result=await fetch(`http://localhost:5000/search/${searchkey}`);
        result=await result.json();
        
      
            setProducts(result);
       
    }
       

    const getproducts = async () => {
        let result = await fetch("http://localhost:5000/getproducts");
        result = await result.json();
        setProducts(result);
        console.log(result);

    }
    const deleteproduct = async(id) => {
        let result= await fetch(`http://localhost:5000/delete/${id}`,{
            method: "Delete",

        });
        result= await result.json();
        if(result){
           getproducts();
        }

    }


    const viewproduct =(productid)=>{
        navigate(`/productdetails/${productid}`)
    }
    return(
        <div className='products'>
            <div className='container mt-4'>
                <div className='row '>
                    <div className='col-lg-5 col-md-6 col-sm-12'>
                    <h4 className='products-heading'><img width="40" height="40" src="https://img.icons8.com/color-glass/48/product.png" alt="product"/>Products</h4>
                    </div>
                    <div className='col-lg-7 col-md-6 col-sm-12 d-flex'>
                    <input className='inpuut' placeholder='Search for car' onChange={((e)=>setSearchkey(e.target.value))} value={searchkey}/>
                            <button className='search-button'  onClick={search}><i class="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 mt-4'>
                       
                        <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Units</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        { (products && products.length > 0 ) ?
                                            products.map((item) =>
                                        <tr>
                                            
                                            <td>{((item.product_name)? <img className='productimg' src={require(`../../images/${item.imagepath[0].replace('..\\my-app\\src\\images\\', '')}`)} alt="..." class="img-thumbnail"/>:<></> )
                                                
                                                }</td>
                                            <td>{item.product_name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.units}</td>
                                            <td>{item.category}</td>
                                            <td><button className='view-button' onClick={()=>viewproduct(item._id)} >View</button><button className='update-button' onClick={()=>deleteproduct(item._id)}>Delete</button></td>
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

                  
                </div>

                <div className='row'>
                  
                <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                <h4 className='products-heading'><img width="40" height="40" src="https://img.icons8.com/emoji/48/warning-emoji.png" alt="warning-emoji"/> Low Inventory Products</h4>

                        <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Items Sold</th>
                                        <th scope="col">Items Left</th>
                                       
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">500</td>
                                        <td data-label="Due Date">3</td>
                                       
                                       </tr>
                                       <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">500</td>
                                        <td data-label="Due Date">3</td>
                                       
                                       </tr>
                                       <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">500</td>
                                        <td data-label="Due Date">3</td>
                                       
                                       </tr>

                                       <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">500</td>
                                        <td data-label="Due Date">3</td>
                                       
                                       </tr>
                                       
                                        </tbody>
                        </table>  
                    </div>

                <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                <h4 className='products-heading'><img width="40" height="40" src="https://img.icons8.com/external-anggara-flat-anggara-putra/64/external-trending-basic-user-interface-anggara-flat-anggara-putra.png" alt="external-trending-basic-user-interface-anggara-flat-anggara-putra"/> Top Selling Products</h4>
                <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Items Sold</th>
                                        <th scope="col">Items Left</th>
                                       
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">500</td>
                                        <td data-label="Due Date">3</td>
                                       
                                       </tr>
                                       <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">500</td>
                                        <td data-label="Due Date">3</td>
                                       
                                       </tr>
                                       <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">500</td>
                                        <td data-label="Due Date">3</td>
                                       
                                       </tr>

                                       <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">500</td>
                                        <td data-label="Due Date">3</td>
                                       
                                       </tr>
                                       
                                        </tbody>
                        </table>  
                </div>
                </div>

              
            </div>
        </div>
    );
}
export default Products;