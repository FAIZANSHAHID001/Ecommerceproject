import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Explore() {
    const [products, setProducts] = useState([]);
    const [categorykey, setCategorykey] = useState('Men Clothing');
    const [pricekey, setPricekey] = useState(0);
    const params=useParams();

    
    useEffect(() => {
        if(params.category){
                menucategory();
        }
        else{
            getproductsinfo();
        }
       
    }, []);

    const getproductsinfo=async ()=>{
        let result=await fetch("http://localhost:5000/getproducts");
        result=await result.json();
        setProducts(result);
    }
    const handleRadioChange = (event) => {
        setCategorykey(event.target.value);
      };
      const handlePriceRadioChange = (event) => {
        setPricekey(event.target.value);
      };

      const menucategory=async()=>{
        let result= await fetch(`http://localhost:5000/categorysearch/${params.category}`)
        result= await result.json();       
        setProducts(result);   
      }
      const handleButtonClick =async () => {
        console.log(categorykey);
        let result= await fetch(`http://localhost:5000/categorysearch/${categorykey}`)
        result= await result.json();       
        setProducts(result);    
        console.log(result);    
      };
      const handlePriceButtonClick =async () => {
        console.log(pricekey);
        let result= await fetch(`http://localhost:5000/pricesearch/${categorykey}/${pricekey}`)
        result= await result.json();       
        setProducts(result);    
        console.log(result);    
      };

    return (
        <div className="explore">
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-12">
                        <nav class="breadcrumb bg-light mb-30">
                            <a class="breadcrumb-item text-dark" href="#">Home</a>
                            <a class="breadcrumb-item text-dark" href="#">Shop</a>
                            <span class="breadcrumb-item active">Shop List</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row px-xl-5">

                    <div class="col-lg-3 col-md-4">

                        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filter by Categories</span></h5>
                        <div class="bg-light p-4 mb-30">
                                <input type="radio" id="html" name="fav_language" value="Men Clothing"  checked={categorykey === 'Men Clothing'}
        onChange={handleRadioChange}/>
                                <label for="html" className='ml-2'>Men Clothing</label><br></br>
                                <input type="radio" id="css" name="fav_language" value="Women Clothing"  checked={categorykey === 'Women Clothing'}
        onChange={handleRadioChange}/>
                                <label for="css" className='ml-2'>Women Clothing</label><br></br>
                                <input type="radio" id="javascript" name="fav_language" value="Fashion Accesories"  checked={categorykey === 'Fashion Accesories'}
        onChange={handleRadioChange}/>
                                <label for="javascript" className='ml-2'>Fashion Accesories</label><br></br>
                                <input type="radio" id="javascript" name="fav_language" value="Shoes"  checked={categorykey === 'Shoes'}
        onChange={handleRadioChange}/>
                                <label for="javascript" className='ml-2'>Shoes</label><br></br>
                               
                                <input type="radio" id="javascript" name="fav_language" value="Electronics"  checked={categorykey === 'Electronics'}
        onChange={handleRadioChange}/>
                                <label for="javascript" className='ml-2'>Electronics</label>

                                <div className='btn-di mt-2 d-flex justify-content-center'>
                                    <button class="search-button" onClick={()=>handleButtonClick()}>Search </button>
                                </div>
                            
                        </div>

                        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Search By Price</span></h5>
                        <div class="bg-light p-4 mb-30">
                        <input type="radio" id="option1" name="option" value={20}  onChange={handlePriceRadioChange} />
                            <label for="option1" className='ml-2'>Less then $20 </label><br></br>

                            <input type="radio" id="option2" name="option" value={50} onChange={handlePriceRadioChange} />
                            <label for="option2" className='ml-2'>Less then $50 </label><br></br>

                            <input type="radio" id="option3" name="option" value={100} onChange={handlePriceRadioChange} />
                            <label for="option3" className='ml-2'>Less then $100 </label><br></br>

                            <input type="radio" id="option4" name="option" value={150}  onChange={handlePriceRadioChange}/>
                            <label for="option4" className='ml-2'>Less then $150 </label><br></br>

                            <input type="radio" id="option5" name="option" value={200} onChange={handlePriceRadioChange}/>
                            <label for="option5" className='ml-2'>Greater then $200 </label><br></br>

                            <div className='btn-di mt-2 d-flex justify-content-center'>
                                    <button class="search-button" onClick={()=>handlePriceButtonClick()}>Search </button>
                                </div>
                        </div>


                       

                    </div>

                    <div class="col-lg-9 col-md-8">
                        <div class="row pb-3">
                            <div class="col-12 pb-1">
                                <div class="d-flex align-items-center justify-content-between mb-4">

                                    <div class="ml-2">
                                        <div class="btn-group">
                                            <input type="text" className="inpuut" placeholder="search product" />
                                            <button className="search-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {
                             (products && products.length > 0) ?
                             products.map((item) =>
                             <div class="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div class="product-item bg-light mb-4">
                                    <div class="product-img position-relative overflow-hidden">
                                        <img class="img-fluid w-100"  src={require(`../images/${item.imagepath[0].replace('..\\my-app\\src\\images\\', '')}`)} alt="" />
                                        <div class="product-action">
                                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                                            
                                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div class="text-center py-4">
                                        <a class="h6 text-decoration-none text-truncate" href="">{item.product_name}</a>
                                        <div class="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$ {item.price}</h5>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mb-1">
                                           <h7>{item.units} items remaining</h7>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             )
                             :
                             <span>No record found</span>
                        }
                       
                          

                           
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Explore;