import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useState, useEffect, } from 'react';

import './style.css';

function Customerlogin(){
    const navigate = useNavigate();
    const[email, setemail]= useState("");
    const[password,setpassword]= useState("");
    const[error, seterror]= useState(false);
    const[empty, setempty]= useState(false);
    useEffect(()=>{
        const auth = localStorage.getItem('customer');
        if(auth){
            navigate('/');
        }
    })
    const getdata=async ()=>{

        if(!email || !password ){
            setempty(true);
            return false;
        }
        let result=await fetch('http://localhost:5000/customerlogin',{
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            } ,
        });
        result=await result.json();
       if(result.email){
                localStorage.setItem("customer", JSON.stringify(result));
                navigate('/');
       }
       else{
             seterror(true);
       }
    }
    return(
        <div className='customerlogin'>
             <div className="container-fluid register">
            <div className="row">
                    <div className="col-lg-6  col-md-12 col-sm-12 ">
                        <div className='d-flex justify-content-center mt-3'>
                            <from className="form mt-5"> 
                                <div className='d-flex justify-content-center'><img width="96" height="96" src="https://img.icons8.com/color/96/user-male-circle--v1.png" alt="user-male-circle--v1"/></div>
                               <div className='d-flex justify-content-center'><h3 className=' ml-2 '> Customer Login</h3></div> 
                                    {error && <div className='d-flex justify-content-center'><span className='invalid-input'>These credentials doesn't match our record</span></div> }    
                                    <div className='col-12 mt-4'>
                                        <label className='label' ><img width="30" height="30" src="https://img.icons8.com/color/96/new-post.png" alt="new-post"/> Email</label><br/>
                                        <input type="text" onChange={((e) => setemail(e.target.value))} value={email}  placeholder='Username or email'></input>
                                       <br></br> {empty && !email && <span className='invalid-input'>Fill this Field</span>}
                                    </div>
                                    <div className='col-12 mt-4'>
                                        <label className='label'><img width="30" height="30" src="https://img.icons8.com/fluency/48/000000/password--v1.png" alt="password--v1"/> Password</label><br></br>
                                        <input type='password' onChange={((e) => setpassword(e.target.value))} value={password}  placeholder='password'></input>
                                        <br></br> {empty && !password && <span className='invalid-input'>Fill this Field</span>}
                                    </div>
                                    <div className='col-12 mt-4'>
                                    <button type="Submit" onClick={getdata}  className='login-btn'>Login</button><br></br>
                                    <div className='mt-2'><span >Do not have an account? <Link to='/customersignup'>Signup</Link></span></div>
                                    </div>
                            </from>
                        </div>
                    </div>

                    <div className="col-6 overlay image d-none d-lg-block">
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Customerlogin;