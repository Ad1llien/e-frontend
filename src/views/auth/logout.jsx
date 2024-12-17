import { useEffect } from 'react';
import { LoggedOutView } from '../shop/home';
import { logout } from '../../utils/auth';
import { Link } from 'react-router-dom';


const Logout = () => {
    useEffect(() => {
        logout();
    }, []);
    return (
        <div
            style={{
                background: '#1A1A2E',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFF',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '3rem',
                    borderRadius: '15px',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(8px)',
                    width: '100%',
                    maxWidth: '500px',  // Енін ұлғайту
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >
                <h3
                    style={{
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                        color: '#C6C6E4',
                        fontSize: '2rem',  // Шрифт өлшемін ұлғайту
                        fontWeight: 'bold',
                    }}
                >
                    You have been logged out
                </h3>
                <div className="d-flex justify-content-center" style={{ marginTop: '2rem' }}>
                    <Link
                        to="/login"
                        className="btn"
                        style={{
                            background: 'linear-gradient(90deg, #9F7AEA, #6A5ACD)',
                            color: '#FFF',
                            padding: '1rem 2rem', // Кнопканың өлшемін үлкейту
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            marginRight: '20px', // Екеуінің арақашықтығын ұлғайту
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Login <i className="fas fa-sign-in-alt" style={{ marginLeft: '0.5rem' }} />
                    </Link>
                    <Link
                        to="/register"
                        className="btn"
                        style={{
                            background: 'linear-gradient(90deg, #9F7AEA, #6A5ACD)',
                            color: '#FFF',
                            padding: '1rem 2rem', // Кнопканың өлшемін үлкейту
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Register <i className="fas fa-user-plus" style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Logout;