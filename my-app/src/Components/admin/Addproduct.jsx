import "./adminpanel.css"
import React from 'react';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function Addproduct(){
    const navigate= useNavigate();
    const [product_name, setproduct_name]= useState("");
    const [images, setImages] = useState([]);
    const [price, setprice]= useState("");
    const [category, setcategory]= useState("");
    const [secondary, setSecondary]= useState("");
    const [primary, setPrimary]= useState("");
    const [aditional, setAditional]= useState("");
    const [units, setUnits]= useState("");
    const [empty, setempty] = useState(false);

    
    const handleImageUpload = (event) => {
        const files = event.target.files;
    const uploadedImages = Array.from(files);
    setImages(uploadedImages);
      };
      const getFileExtension = (filename) => {
        const parts = filename.split('.');
        return parts[parts.length - 1];
      };
      const formData = new FormData();
      formData.append('product_name', product_name);
    images.forEach((image, index) => {
        const extension = getFileExtension(image.name);
        formData.append('images', image, `image_${index}.${extension}`);
      });
      formData.append('price', price);
      formData.append('category', category);
      formData.append('units', units);
      formData.append('primary', primary);
      formData.append('secondary', secondary);
      formData.append('aditional', aditional);

    const getproduct=async ()=>{
        if(!product_name || !images || !units || !price || !primary || !secondary || !aditional){
            setempty(true);
            return false;
        }
        let result= await fetch("http://localhost:5000/add-product",{
            method: 'POST',
            body: formData,


        });
        if(result){
            navigate("/admin/products");
        }
    
    }
    return(
        <div className="addproduct">
            {/* <h1>ADD PRODUCT</h1>
            <div className='container'>
                <div className='row'>s
                    <div className='col-4'></div>
                    <div className='col-4 mt-5'>
                       
                        <div class="form-group">
                            <label for="exampleInputEmail1">Product Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" onChange={((e)=>setproduct_name(e.target.value))} value={product_name} placeholder="Enter name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Price</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" onChange={((e)=>setprice(e.target.value))} value={price} placeholder="Price" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Category</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" onChange={((e)=>setcategory(e.target.value))} value={category} placeholder="Categpry" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input type="text" class="form-control" id="exampleInputPassword1"  placeholder="Discription" onChange={((e)=>setdiscription(e.target.value))} value={discription} />
                        </div>
                        <button onClick={getproduct} class="btn btn-primary">Add Product</button>


                    </div>
                    <div className='col-4'>

                    </div>
                </div>
            </div> */}

            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 mt-4">
                        <h4 className="add-product-heading"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/add--v1.png" alt="add--v1"/> Add New Product</h4>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <div className="form-card">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Product Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" onChange={((e)=>setproduct_name(e.target.value))} value={product_name} placeholder="water bottle etc.."/>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Product Image</label>
                                    <input type="file" multiple class="form-control" id="exampleFormControlInput1" onChange={handleImageUpload} placeholder="water bottle etc.."/>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Price</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"  onChange={((e)=>setprice(e.target.value))} value={price} placeholder="$XXX"/>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Category</label>
                                    <select class="form-control"  onChange={((e)=>setcategory(e.target.value))} value={category} id="exampleFormControlSelect1">
                                    <option>Shoes</option>
                                    <option>Men Clothing</option>
                                    <option>Women Clothing</option>
                                    <option>Fragnances</option>
                                    <option>Jewllery</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">SKU Units</label>
                                    <input type="email" class="form-control"  onChange={((e)=>setUnits(e.target.value))} value={units} id="exampleFormControlInput1" placeholder="XXX"/>
                                </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Primary Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" onChange={((e)=>setPrimary(e.target.value))} value={primary}></textarea>
                                </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                <label for="exampleFormControlTextarea1">Secondary Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={((e)=>setSecondary(e.target.value))} value={secondary}></textarea>
                                </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                <label for="exampleFormControlTextarea1">Aditional Information</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={((e)=>setAditional(e.target.value))} value={aditional}></textarea>
                                </div>
                                </div>
                                
                                <div className="col-12">
                                    <button className="add-product-btn" onClick={getproduct}>Add Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addproduct;