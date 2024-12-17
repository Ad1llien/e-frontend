import React, { useContext, useState, useEffect } from 'react'
import { useAuthStore } from '../../store/auth';
import { Link } from 'react-router-dom';
import { CartContext } from '../plugin/Context';
import apiInstance from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../views/base/logo.png';


function StoreHeader() {
    const cartCount = useContext(CartContext)
    const [search, setSearch] = useState("")

    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    console.log("user().vendor_id", user().vendor_id);

    const navigate = useNavigate()

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        console.log(search);
    }

    const handleSearchSubmit = () => {
        navigate(`/search?query=${search}`)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1A1A2E' }}>
                <div className="container">
                <Link className="navbar-brand" to="/" style={{ color: '#fff' }}>
                <img src={logo} alt="Store Logo" style={{ height: '70px' }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Account
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to={'/customer/account/'} className="dropdown-item" style={{ color: '#6f42c1' }}><i className='fas fa-user'></i> Account</Link></li>
                                    <li><Link className="dropdown-item" to={`/customer/orders/`} style={{ color: '#6f42c1' }}><i className='fas fa-shopping-cart'></i> Orders</Link></li>
                                    <li><Link className="dropdown-item" to={`/customer/wishlist/`} style={{ color: '#6f42c1' }}><i className='fas fa-heart'></i> Wishlist</Link></li>
                                    <li><Link className="dropdown-item" to={`/customer/notifications/`} style={{ color: '#6f42c1' }}><i className='fas fa-bell'></i> Notifications</Link></li>
                                    <li><Link className="dropdown-item" to={`/customer/settings/`} style={{ color: '#6f42c1' }}><i className='fas fa-cogs'></i> Settings</Link></li>
                             </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Vendor
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/vendor/dashboard/" style={{ color: '#6f42c1' }}> <i className='fas fa-user'></i> Dashboard</Link></li>
                                     <li><Link className="dropdown-item" to="/vendor/products/" style={{ color: '#6f42c1' }}> <i className='bi bi-grid-fill'></i> Products</Link></li>
                                     <li><Link className="dropdown-item" to="/vendor/product/new/" style={{ color: '#6f42c1' }}> <i className='fas fa-plus-circle'></i> Add Products</Link></li>
                                     <li><Link className="dropdown-item" to="/vendor/orders/" style={{ color: '#6f42c1' }}> <i className='fas fa-shopping-cart'></i> Orders</Link></li>
                                     <li><Link className="dropdown-item" to="/vendor/earning/" style={{ color: '#6f42c1' }}> <i className='fas fa-dollar-sign'></i> Earning</Link></li>
                                     <li><Link className="dropdown-item" to="/vendor/reviews/" style={{ color: '#6f42c1' }}> <i className='fas fa-star'></i> Reviews</Link></li>
                                     <li><Link className="dropdown-item" to="/vendor/coupon/" style={{ color: '#6f42c1' }}> <i className='fas fa-tag'></i> Coupon</Link></li>
                                     <li><Link className="dropdown-item" to="/vendor/notifications/" style={{ color: '#6f42c1' }}> <i className='fas fa-bell'></i> Notifications</Link></li>
                                     <li><Link className="dropdown-item" to="/vendor/settings/" style={{ color: '#6f42c1' }}> <i className='fas fa-gear'></i> Settings</Link></li>
                                  </ul>
                            </li>

                        </ul>
                        <div className="d-flex">
                            <input onChange={handleSearchChange} name='search' className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
                            <button onClick={handleSearchSubmit} className="btn search-btn" type="submit">Search</button>
                        </div>
                        {isLoggedIn()
                            ?
                            <>
                                <Link className="btn btn-header" to={'/customer/account/'}>Account</Link>
                                <Link className="btn btn-header" to="/logout">Logout</Link>
                            </>
                            :
                            <>
                                <Link className="btn btn-header" to="/login">Login</Link>
                                <Link className="btn btn-header" to="/register">Register</Link>

                            </>
                        }
                        <Link className="btn btn-danger-header" to="/cart/"><i className='fas fa-shopping-cart'></i> <span id='cart-total-items'>{cartCount || 0}</span></Link>

                    </div>
                </div>
            </nav>
            <style>
                 {`
                     .btn-header {
                         color: #ffffff;
                         border: none;
                         padding: 8px 16px;
                         font-size: 14px;
                        background: transparent;
                         font-weight: normal;
                         transition: all 0.3s ease-in-out;
                     }

                     .btn-header.active {
                         font-weight: bold;
                         color: #ffffff;
                     }

                     .btn-header:hover {
                        background-color: rgba(255, 255, 255, 0.2);
                     }

                     .btn-header.active {
                         border: none;
                         color: #fff;
                         font-weight: bold;
                    }

                     .btn-danger-header {
                         color: #ffffff;
                         border: none;
                         padding: 8px 16px;
                         font-size: 14px;
                        background: transparent;
                         font-weight: normal;
                         transition: all 0.3s ease-in-out;
                     }

                     .btn-danger-header.active {
                         font-weight: bold;
                         color: #ffffff;
                     }

                     .btn-danger-header:hover {
                        background-color: rgba(255, 255, 255, 0.2);
                     }

                     .btn-danger-header.active {
                         border: none;
                         color: #fff;
                         font-weight: bold;
                    }
                          
                     .search-btn {
                         background-color: #6f42c1;
                         color: #ffffff;
                         border: none;
                         padding: 8px 16px;
                         border-radius: 4px;
                         font-size: 14px;
                         font-weight: bold;
                         cursor: pointer;
                         transition: background-color 0.3s;
                     }

                     .search-btn:hover {
                         background-color: #6f42c1;
                         color: rgb(192, 187, 187);
                     }

                     .search-btn:active {
                         background-color:  #6f42c1;
                     }

                 
                 
                 `}
             </style>
        </div>
    )
}

export default StoreHeader

