import { NavLink , json, useNavigate} from 'react-router-dom';
import "./adminpanel.css";

function Adminheader(){
    const navigate= useNavigate();
    const auth= localStorage.getItem('user');
    const logout=()=>{
     localStorage.clear();
     navigate('/admin/register');
    }

    return(
        <div className='adminheader'>
        <nav className="navbar navbar-expand-lg ">
            <NavLink className="navbar-brand ml-4" to="/admin">A store</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link " to="/admin/products"><i class="fa fa-list-alt" aria-hidden="true"></i> Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/admin/addproduct"><i class="fa fa-plus-square" aria-hidden="true"></i> Add Products</NavLink>
                </li>
                    {auth?<li > <NavLink className="nav-link" onClick={logout} to='/admin/login'><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</NavLink> </li>
                    :<>
                    <li className="nav-item"> <NavLink className="nav-link" to="/admin/register">Register</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/admin/login">Login</NavLink> </li>
                    </>}
                    
                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/profile"><i class="fa fa-user" aria-hidden="true"></i> {auth && JSON.parse(auth).name}</NavLink>
                </li>
                </ul>
            </div>
        </nav>
        </div>
    );
}
export default Adminheader;