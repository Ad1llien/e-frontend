

import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseProfileData from '../plugin/UseProfileData';

function Sidebar() {

    const userProfile = UseProfileData();
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userProfile) {
            setLoading(false);
        }
    });

    return (
        <div className="col-lg-3" style={{
            backgroundColor: '#fff', 
            color: '#000',            
            borderRadius: '10px', 
            padding: '20px',
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)"
            
        }}>
            {loading === false &&
                <>
                    <div className="d-flex justify-content-center align-items-center flex-column mb-4 shadow rounded-3">
                        <img
                            src={userProfile?.image}
                            style={{ width: 120, height: 120, padding:10, borderRadius: "50%", objectFit: "cover" }}
                            alt=""
                        />
                        <div className="text-center">
                            <h3 className="mb-0">{userProfile?.full_name}</h3>
                            <p className="mt-0">
                                <Link to="/customer/settings/" style={{ color: '#000', textDecoration: 'none' }}>Edit Account</Link>
                            </p>
                        </div>
                    </div>
                    <ol className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/account/'} className="fw-bold" style={{ color: '#000', textDecoration: 'none' }}>Account</Link>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/orders/'} className="fw-bold" style={{ color: '#000', textDecoration: 'none' }}>Orders</Link>
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/wishlist/'} className="fw-bold" style={{ color: '#000', textDecoration: 'none' }}>Wishlist</Link>
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/notifications/'} className="fw-bold" style={{ color: '#000', textDecoration: 'none' }}>Notification</Link>
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/settings/'} className="fw-bold" style={{ color: '#000', textDecoration: 'none' }}>Settings</Link>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className="ms-2 me-auto">
                                <Link to="/logout" className="fw-bold" style={{ color: '#dc3545', textDecoration: 'none' }}>Logout</Link>
                            </div>
                        </li>
                    </ol>
                </>
            }
        </div>
    );
}

export default Sidebar;
