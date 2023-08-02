import './adminpanel.css';
import {Link} from 'react-router-dom';
function Sidebar(props){


    
    return( 
        
       <div className='sidebarcomponent'>
 <div className={`sidebar ${props.sidebarstatus? "open" : ""}`}>
        <div className='container mt-4 '>
            <div className='row '>
                <div className='col-12'>
                    <h6><img src="https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png"/> Muhammad Asad</h6>
                </div>
            </div>
        </div>
       <ul>
       <li>
            <Link to="/dashboard" ><i class="fas fa-chart-bar"/> Dashboard</Link>
        </li>
       <li>
            <h5>General</h5>
            <hr></hr>
        </li>
        <li>
            <Link to="/dashboard/producthunting" ><i className="fa fa-search" aria-hidden="true"/> Product Hunting</Link>
        </li>
        <li>
        <Link to="/dashboard/productsourcing"><i className="fa-solid fa-truck"></i> Product Sourcing</Link>
        </li>
        <li>
        <Link to="/dashboard/productranking"><i className="fa fa-line-chart"></i>  Product Ranking</Link>
        </li>
      
        <li className='mt-4'>
            <h5>Tools</h5>
            <hr></hr>
        </li>
        <li>
        <Link to="/contentwriting"><i className="fa-solid fa-pen-to-square"></i>  Keyword Researching</Link>
        </li>
       </ul>
      </div>

       </div>
       
      
     
      
    
       
    )
}

export default Sidebar;