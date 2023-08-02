import './adminpanel.css';

function Indexdashboard(props){
    return(
       <>
        <div className="content">
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-12 mt-2 p-4'>
                        <span className='slug'>E-assist Dashboard</span>
                        <h6 className='greetings mt-3'>Hey, Muhammad Asad <br/><span className='subgreeting'>Here is what hapenning with your store today!</span></h6>
                    </div>
                    <div className='col-lg-3 col-md-6 d-flex justify-content-center col-sm-12 mt-2'>
                            <div className='analytics-card'>
                                    <h5 className=' card-title mb-2'>Total Orders</h5>
                                    <span className='orders ' > 1,004</span>
                                    <div className='card-details'>
                                    <i class="fa fa-shopping-bag" aria-hidden="true"/>
                                    </div>
                            </div>
                    </div>
                    <div className='col-lg-3 col-md-6 d-flex justify-content-center col-sm-12 mt-2'>
                            <div className='analytics-card'>
                                    <h5 className=' card-title mb-2'>Total Earnings</h5>
                                    <span className='orders ' > $ 282,300</span>
                                    <div className='card-details'>
                                    <i class="fas fa-dollar-sign"></i>
                                    </div>
                            </div>
                    </div>
                    <div className='col-lg-3 col-md-6 d-flex justify-content-center col-sm-12 mt-2'>
                            <div className='analytics-card'>
                                    <h5 className=' card-title mb-2'>Customers</h5>
                                    <span className='orders ' > 600</span>
                                    <div className='card-details'>
                                    <i class="fa fa-user" aria-hidden="true"/>
                                    </div>
                            </div>
                    </div>
                    <div className='col-lg-3 col-md-6 d-flex justify-content-center col-sm-12 mt-2'>
                            <div className='analytics-card'>
                                    <h5 className=' card-title mb-2'>My balance</h5>
                                    <span className='orders ' >$ 500,250</span>
                                    <div className='card-details'>
                                    <i class="fa-solid fa-wallet"/>
                                    </div>
                            </div>
                    </div>    
                </div>

                <div className='row mt-4'>
                        <div className='col-lg-8 col-md-12 col-sm-12  mt-4 text-align-center'>
                                <div className='table-title '>
                                        <h5>Top Selling Products<br></br> <span className='subgreeting'>Overview of top selling products</span></h5><hr></hr>
                                </div>
                                
                                <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Items Sold</th>
                                        <th scope="col">Actual Price</th>
                                        <th scope="col">Selling Price</th>
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
                              
                               
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12 mt-4'>
                        <div className='table-title '>
                                        <h5>Customer Feedbacks<br></br> <span className='subgreeting'>Top reviews of customers about product</span></h5><hr></hr>
                        </div>
                        <div>
                        <div class="list list-row block">
               <div class="list-item" data-id="19">
                  <div><a href="#" data-abc="true"><span class="w-48 avatar gd-warning">S</span></a></div>
                  <div class="flex">
                     <a href="#" class="item-author text-color" data-abc="true">Sam Kuran</a>
                     <div class="item-except text-muted text-sm h-1x">For what reason would it be advisable for me to think about business content?</div>
                  </div>
                  <div class="no-wrap">
                     <div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
                  </div>
               </div>
               <div class="list-item" data-id="7">
                  <div><a href="#" data-abc="true"><span class="w-48 avatar gd-primary"><img src="https://img.icons8.com/color/48/000000/administrator-male.png" alt="."/></span></a></div>
                  <div class="flex">
                     <a href="#" class="item-author text-color" data-abc="true">Kinley Adolf</a>
                     <div class="item-except text-muted text-sm h-1x">For what reason would it be advisable for me to think about business content?</div>
                  </div>
                  <div class="no-wrap">
                     <div class="item-date text-muted text-sm d-none d-md-block">21 July</div>
                  </div>
               </div>
               <div class="list-item" data-id="17">
                  <div><a href="#" data-abc="true"><span class="w-48 avatar gd-warning">H</span></a></div>
                  <div class="flex">
                     <a href="#" class="item-author text-color" data-abc="true">Velden Kamut</a>
                     <div class="item-except text-muted text-sm h-1x">For what reason would it be advisable for me to think about business content?</div>
                  </div>
                  <div class="no-wrap">
                     <div class="item-date text-muted text-sm d-none d-md-block">13/3/19</div>
                  </div>
               </div>
               <div class="list-item" data-id="16">
                  <div><a href="#" data-abc="true"><span class="w-48 avatar gd-info">F</span></a></div>
                  <div class="flex">
                     <a href="#" class="item-author text-color" data-abc="true">Stuart Kim</a>
                     <div class="item-except text-muted text-sm h-1x">For what reason would it be advisable for me to think about business content?</div>
                  </div>
                  <div class="no-wrap">
                     <div class="item-date text-muted text-sm d-none d-md-block">03/1/19</div>
                  </div>
               </div>
               <div class="list-item" data-id="4">
                  <div><a href="#" data-abc="true"><span class="w-48 avatar gd-success"><img src="https://img.icons8.com/color/48/000000/guest-male.png" alt="."/></span></a></div>
                  <div class="flex">
                     <a href="#" class="item-author text-color" data-abc="true">Simply Fry</a>
                     <div class="item-except text-muted text-sm h-1x">For what reason would it be advisable for me to think about business content?</div>
                  </div>
                  <div class="no-wrap">
                     <div class="item-date text-muted text-sm d-none d-md-block">2 hours ago</div>
                  </div>
               </div>
            </div>
                        </div>
                        </div>
                        
                </div>
            </div>
      </div>
       </>
    )
}
export default Indexdashboard;