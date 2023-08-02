import React from 'react';
import {Link} from 'react-router-dom'
import './adminpanel.css'

function Dashboard(){
    return (
        <div className='dashboard'>
            <div className='container mt-4'>
                <div className='row '>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-4 p-3'>
                        <div className='info-card'>
                            <div className='row'>
                                <div className='col-8 '>
                                   <h5>Customers</h5>
                                   <h5>150</h5>
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
                                   <h5>72</h5>
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
                                   <h5>12</h5>
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
                                        <th scope="col">Product </th>
                                        <th scope="col">Items </th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Revenue</th>
                                        <th scope="col">Profit</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">500</td>
                                        <td data-label="Amount">$50</td>
                                        <td data-label="Period">$100</td>
                                        <td data-label="Period">$50</td>
                                        </tr>
                                        <tr>
                                        <td scope="row" data-label="Account">Glass jar</td>
                                        <td data-label="Due Date">700</td>
                                        <td data-label="Amount">$2,443</td>
                                        <td data-label="Period">$3,000</td>
                                        <td data-label="Period">$700</td>
                                        </tr>
                                        <tr>
                                        <td scope="row" data-label="Account">Bamboo sticks</td>
                                        <td data-label="Due Date">1000</td>
                                        <td data-label="Amount">$1,181</td>
                                        <td data-label="Period">$2,000</td>
                                        <td data-label="Period">$800</td>
                                        </tr>
                                        <tr>
                                        <td scope="row" data-label="Acount">Lunch Box</td>
                                        <td data-label="Due Date">5000</td>
                                        <td data-label="Amount">$842</td>
                                        <td data-label="Period">$1,000</td>
                                        <td data-label="Period">$100</td>
                                        </tr>
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
                                        <tr>
                                        <td data-label="Account">1</td>
                                        <td data-label="Due Date">Asad Ahmad</td>
                                        <td data-label="Amount">test@test.com</td>
                                        <td data-label="Period"><Link className='action-button'><i class="fa fa-trash" aria-hidden="true"></i> Remove </Link></td>
                                       
                                        </tr>
                                        <tr>
                                        <td data-label="Account">1</td>
                                        <td data-label="Due Date">Asad Ahmad</td>
                                        <td data-label="Amount">test@test.com</td>
                                        <td data-label="Period"><Link className='action-button'><i class="fa fa-trash" aria-hidden="true"></i> Remove </Link></td>
                                       
                                        </tr>
                                        <tr>
                                        <td data-label="Account">1</td>
                                        <td data-label="Due Date">Asad Ahmad</td>
                                        <td data-label="Amount">test@test.com</td>
                                        <td data-label="Period"><Link className='action-button'><i class="fa fa-trash" aria-hidden="true"></i> Remove </Link></td>
                                       
                                        </tr>
                                        
                                     
                                        </tbody>
                    </table>  
                    </div>
                    <div className='col-lg-3 col-md-12 '>
                        <div className='list-card'>
                            <h4><img width="50" height="50" src="https://img.icons8.com/nolan/64/bulleted-list.png" alt="bulleted-list"/> Categories</h4>
                            <ul>
                                <Link to="" className='add-category'><li><i class="fa fa-plus" aria-hidden="true"></i> Add Category</li></Link>
                                <li>Electronics</li>
                                <li>Clothing</li>
                                <li>Boys</li>
                                <li>Girls</li>
                                <li>Electronics</li>
                                <li>Clothing</li>
                                <li>Boys</li>
                                <li>Girls</li>
                                <li>Electronics</li>
                               
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
export default Dashboard;