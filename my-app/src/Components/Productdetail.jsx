import React from "react";
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Productdetail(){
    const params=useParams();
    
    const [productdetail, setProductdetail]= useState([]);
    useEffect(()=>{
        
        getproductdetail();
      
    
    },[]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <button className="slider-arrow">Previous</button>,
        nextArrow: <button className="slider-arrow">Next</button>,
      };
    const getproductdetail=async()=>{
        
        let result= await fetch(`http://localhost:5000/getproductdetails/${params.id}`);
        result = await result.json();
       
        setProductdetail(result);
      
        
    }


    return(
        <div className="productdetails">
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-12">
                        <nav class="breadcrumb bg-light mb-30">
                            <a class="breadcrumb-item text-dark" href="#">Home</a>
                            <a class="breadcrumb-item text-dark" href="#">Shop</a>
                            <span class="breadcrumb-item active">Shop Detail</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="container-fluid pb-5">
                <div class="row px-xl-5">
                    <div class="col-lg-5 mb-30">
                    <div className="slider-container">
                            <Slider {...settings}>
                            {
                                (productdetail && productdetail.product_name)?
                                productdetail.imagepath.map((image)=>
                                <img src={require(`../images/${image.replace('..\\my-app\\src\\images\\', '')}`)} class="img-thumbnail"/>
                                )
                                :console.log("nooooooooooo")
                            }
                            </Slider>   
                            </div>
                    </div>

                    <div class="col-lg-7 h-auto mb-30">
                        <div class="h-100 bg-light p-30">
                            <h3>{productdetail.product_name}</h3>
                            <div class="d-flex mb-3">
                                <div class="text-primary mr-2">
                                    <small class="fas fa-star"></small>
                                    <small class="fas fa-star"></small>
                                    <small class="fas fa-star"></small>
                                    <small class="fas fa-star-half-alt"></small>
                                    <small class="far fa-star"></small>
                                </div>
                                <small class="pt-1">(99 Reviews)</small>
                            </div>
                            <h3 class="font-weight-semi-bold mb-4">{productdetail.price}</h3>
                            <p class="mb-4">{productdetail.primary}</p>
                          
                       
                            <div class="d-flex align-items-center mb-4 pt-2">
                               
                                <button class="btn btn-primary px-3"><i class="fa fa-shopping-cart mr-1"></i> Add To
                                    Cart</button>
                            </div>
                            <div class="d-flex pt-2">
                                <strong class="text-dark mr-2">Share on:</strong>
                                <div class="d-inline-flex">
                                    <a class="text-dark px-2" href="">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a class="text-dark px-2" href="">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a class="text-dark px-2" href="">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                    <a class="text-dark px-2" href="">
                                        <i class="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row px-xl-5">
                    <div class="col">
                        <div class="bg-light p-30">
                            <div class="nav nav-tabs mb-4">
                                <a class="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                                <a class="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                             
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tab-pane-1">
                                    <h4 class="mb-3">Product Description</h4>
                                   
                                   <p>{productdetail.secondary}</p>
                                </div>
                                <div class="tab-pane fade" id="tab-pane-2">
                                    <h4 class="mb-3">Additional Information</h4>
                                    <p>{productdetail.aditional}</p>
                                  
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    );
}
export default Productdetail;