import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
function Header(){
    const auth= localStorage.getItem('customer');
    const navigate= useNavigate();
    const logoutt=()=>{
     localStorage.clear();
   
    }
    return(
    <>
	  <div class="container-fluid">
        <div class="row bg-secondary py-1 px-xl-5">
            <div class="col-lg-6 d-none d-lg-block">
                <div class="d-inline-flex align-items-center h-100">
                    <Link class="text-body mr-3" to="/">Home</Link>
                    <Link class="text-body mr-3"to="/contactus">Contact</Link>
                   
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <div class="btn-group">
                    
                    
                        {auth? <><h6 className="nav-link headline-name" >{JSON.parse(auth).name}</h6> <Link className="nav-link" onClick={logoutt} to='/customerlogin'><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</Link></> 
                    :<>
                     <Link className="nav-link" to="/customersignup">Register</Link> 
                    <Link className="nav-link" to="/customerlogin">Login</Link> 
                    </>}
                    </div>
                   
                </div>
                <div class="d-inline-flex align-items-center d-block d-lg-none">
                    <a href="" class="btn px-0 ml-2">
                        <i class="fas fa-heart text-dark"></i>
                        <span class="badge text-dark border border-dark rounded-circle pb-2" >0</span>
                    </a>
                    <a href="" class="btn px-0 ml-2">
                        <i class="fas fa-shopping-cart text-dark"></i>
                        <span class="badge text-dark border border-dark rounded-circle pb-2" >0</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <div class="col-lg-4">
                <a href="" class="text-decoration-none">
                    <span class="h1 text-uppercase text-primary bg-dark px-2">E</span>
                    <span class="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Store</span>
                </a>
            </div>
            <div class="col-lg-4 col-6 text-left">
               
            </div>
            <div class="col-lg-4 col-6 text-right">
                <p class="m-0">Customer Service</p>
                <h5 class="m-0">+012 345 6789</h5>
            </div>
        </div>
    </div>

	<div class="container-fluid bg-dark mb-30">
        <div class="row px-xl-5">
           
            <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                    <a href="" class="text-decoration-none d-block d-lg-none">
                        <span class="h1 text-uppercase text-dark bg-light px-2">E</span>
                        <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">Store</span>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <Link to='/' class="nav-item nav-link active">Home</Link>
                            <Link to='/explore' class="nav-item nav-link">Shop</Link>
                            <Link to='/cart' class="nav-item nav-link">Cart</Link>
                           
                            <Link to='/contactus' class="nav-item nav-link">Contact</Link>
                        </div>
                        <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                            
                            <a href="" class="btn px-0 ml-3">
                                <i class="fas fa-shopping-cart text-primary"></i>
                                <span class="badge text-secondary border border-secondary rounded-circle pb-2" >0</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
	</>
      
      
    );
}
export default Header;