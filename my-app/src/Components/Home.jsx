import './style.css';
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
function Home(){
    const [recentproducts, setRecentproducts]= useState([]);
    const [cartstatus, setCartstatus]= useState(false);
    const navigate= useNavigate();
    useEffect(()=>{
        getrecentproducts();
});

const addtocart=async(productid)=>{
    const auth= localStorage.getItem('customer');
    let customer_id= JSON.parse(auth)._id;
    let product_id = productid
    let result = await fetch('http://localhost:5000/addtocart', {
        method: 'post',
        body: JSON.stringify({ customer_id, product_id }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    result= await result.json();
    if(result.customer_id){
            alert("item added to cart");
    }
}
const getrecentproducts=async()=>{
    let result =await fetch("http://localhost:5000/getrecentproducts");
     result= await result.json();
         setRecentproducts(result);
}
const categoryselect=(category)=>{
        navigate(`/explore/${category}`);
}   

const viewproduct=(id)=>{
    navigate(`/productdetails/${id}`);
   
}
    return(
        <div className='homepage'>
            <div class="container-fluid mb-3">
                <div class="row px-xl-5">
                    <div class="col-lg-8">
                        <div id="header-carousel" class="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#header-carousel" data-slide-to="1"></li>
                                <li data-target="#header-carousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item position-relative active" >
                                    <img class="position-absolute w-100 h-100" src="img/carousel-1.jpg"/>
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3 forme">
                                            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                                            <p class="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <Link class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" to='/explore'>Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item position-relative" >
                                    <img class="position-absolute w-100 h-100" src="img/carousel-2.jpg" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3 forme">
                                            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                                            <p class="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <Link class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" to='/explore'>Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item position-relative" >
                                    <img class="position-absolute w-100 h-100" src="img/carousel-3.jpg" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3 forme">
                                            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                                            <p class="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <Link class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" to='/explore'>Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="product-offer mb-30">
                            <img class="img-fluid" src="img/offer-1.jpg" alt=""/>
                            <div class="offer-text">
                                <h6 class="text-white text-uppercase">Save 20%</h6>
                                <h3 class="text-white mb-3">Fragnances</h3>
                                <a href="" class="btn btn-primary" onClick={()=>categoryselect("Fragnances")}>Shop Now</a>
                            </div>
                        </div>
                        <div class="product-offer mb-30" >
                            <img class="img-fluid" src="img/offer-2.jpg" alt=""/>
                            <div class="offer-text">
                                <h6 class="text-white text-uppercase">Save 20%</h6>
                                <h3 class="text-white mb-3">Jewllery</h3>
                                <a href="" class="btn btn-primary" onClick={()=>categoryselect("Jewllery")}>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-5">
                <div class="row px-xl-5 pb-3">
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="d-flex align-items-center bg-light mb-4 featuredproducts" >
                            <h1 class="fa fa-check text-primary m-0 mr-3"></h1>
                            <h5 class="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="d-flex align-items-center bg-light mb-4 featuredproducts" >
                            <h1 class="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                            <h5 class="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="d-flex align-items-center bg-light mb-4 featuredproducts" >
                            <h1 class="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                            <h5 class="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="d-flex align-items-center bg-light mb-4 featuredproducts" >
                            <h1 class="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                            <h5 class="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Hot Products</span></h2>
        <div class="row px-xl-5">

        {recentproducts && (recentproducts.length>0)?
							recentproducts.map((item)=>
							 <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                    <img src={require(`../images/${item.imagepath[0].replace('..\\my-app\\src\\images\\', '')}`)} class="img-thumbnail"/>
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" onClick={()=>addtocart(item._id)}><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" onClick={()=>viewproduct(item._id)}><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">{item.product_name}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>$ {item.price}</h5>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                        <h7>{item.units} Items remaining</h7>
                        </div>
                    </div>
                </div>
            </div>
							):
							<></>	
						}
           
           
        </div>
            </div>

            <div class="container-fluid pt-5 pb-3">
                <div class="row px-xl-5">
                    <div class="col-md-6">
                        <div class="product-offer mb-30" >
                            <img class="img-fluid" src="img/carousel-1.jpg" alt=""/>
                            <div class="offer-text">
                                <h6 class="text-white text-uppercase">Save 20%</h6>
                                <h3 class="text-white mb-3">Men Clothing</h3>
                                <a  class="btn btn-primary" onClick={()=>categoryselect("Men Clothing")}>Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-offer mb-30" >
                            <img class="img-fluid" src="img/offer-2.jpg" alt=""/>
                            <div class="offer-text">
                                <h6 class="text-white text-uppercase">Save 20%</h6>
                                <h3 class="text-white mb-3">Women Clothing</h3>
                                <a href="" class="btn btn-primary" onClick={()=>categoryselect("Women Clothing")}>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
          
        </div>
    );
}
export default Home;