import React, { useState, useEffect } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import "./adminpanel.css";

function Signup() {

    const navigate= useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectdata =async () => {
        console.log(name, email, password);
        let result =await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result=await result.json()
        localStorage.setItem("user", JSON.stringify(result));
            navigate('/admin')

    }

    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth){
            navigate('/admin');
        }
    })

    return (
        <div className='signupcomponent'>
            {/* <div className='container'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4 mt-5'>
                        <h1>Register</h1>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" class="form-control" onChange={((e) => setName(e.target.value))} value={name} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" onChange={((e) => setEmail(e.target.value))} value={email} aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" onChange={((e) => setPassword(e.target.value))} value={password} id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button onClick={collectdata} class="btn btn-primary">Submit</button>

                    </div>
                    <div className='col-4'>

                    </div>
                </div>
            </div> */}

            <div className="container-fluid register">
            <div className="row">
                    <div className="col-lg-6  col-md-12 col-sm-12 ">
                        <div className='d-flex justify-content-center '>
                            <from className="form mt-4"> 
                               <div className='d-flex justify-content-center'><h3 className='mt-5 ml-2 '><img width="96" height="96" src="https://img.icons8.com/color/96/user-male-circle--v1.png" alt="user-male-circle--v1"/> Register</h3></div> 
                               <div className='col-12 mt-4'>
                                        <label className='label' ><img width="30" height="30" src="https://img.icons8.com/office/16/person-male.png" alt="person-male"/> Username</label><br/>
                                        <input type="text"  onChange={((e) => setName(e.target.value))} value={name} placeholder=' Username'></input>
                                    </div>
                                    <div className='col-12 mt-4'>
                                        <label className='label' ><img width="30" height="30" src="https://img.icons8.com/color/96/new-post.png" alt="new-post"/> Email</label><br/>
                                        <input type="text" onChange={((e) => setEmail(e.target.value))} value={email}  placeholder=' email'></input>
                                    </div>
                                    <div className='col-12 mt-4'>
                                        <label className='label'><img width="30" height="30" src="https://img.icons8.com/fluency/48/000000/password--v1.png" alt="password--v1"/> Password</label><br></br>
                                        <input type='password' onChange={((e) => setPassword(e.target.value))} value={password}  placeholder='password'></input>
                                    </div>
                                    <div className='col-12 mt-4'>
                                    <button type="Submit" onClick={collectdata}  className='login-btn'>Register</button><br></br>
                                    <div className='mt-2'><span>Already have an account? <Link to="/admin/login">Login</Link></span></div>
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

export default Signup;