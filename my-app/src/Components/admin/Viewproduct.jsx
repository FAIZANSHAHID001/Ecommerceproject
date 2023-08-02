import React from 'react';
import './adminpanel.css';

function Viewproduct(){

    return(
        <div className='view-product'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                        <div className='heading-box'>
                        <h4 className='view-product-heading'>Title: Water bottle</h4>
                        <h6>Plastic Products</h6>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='card-price'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Viewproduct;