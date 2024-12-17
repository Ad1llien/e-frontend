


import { useEffect, useState } from 'react';
import { login } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const resetForm = () => {
        setUsername('');
        setPassword('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await login(username, password);
        if (error) {
            alert(error);
        } else {
            navigate('/');
            resetForm();
        }
        setIsLoading(false);
    };

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
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    width: '100%',
                    maxWidth: '450px', // Ені үлкейттім
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >
                {/* Title */}
                <h2
                    style={{
                        textAlign: 'center',
                        marginBottom: '0.5rem',
                        color: '#C6C6E4',
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                    }}
                >
                    Sign In
                </h2>
                <p
                    style={{
                        textAlign: 'center',
                        color: '#E0E0FF',
                        fontSize: '0.9rem',
                    }}
                >
                    Welcome back! Please enter your details
                </p>

                {/* Form */}
                <form onSubmit={handleLogin}>
                    {/* Email Input */}
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Email or Phone
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(46, 39, 39, 0.1)',
                                color: '#FFF',
                                outline: 'none',
                                transition: 'border-color 0.3s ease',
                            }}
                        />
                    </div>

                    {/* Password Input */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: '#FFF',
                                outline: 'none',
                                transition: 'border-color 0.3s ease',
                            }}
                        />
                    </div>

                    {/* Sign-In Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        style={{
                            width: '100%',
                            padding: '0.8rem',
                            border: 'none',
                            borderRadius: '8px',
                            background: 'linear-gradient(90deg, #9F7AEA, #6A5ACD)',
                            color: '#FFF',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            boxShadow: '0 0 8px rgba(106, 90, 205, 0.6)',
                            transition: '0.3s ease',
                        }}
                    >
                        {isLoading ? (
                            <>
                                <span>Processing...</span>
                                <i className="fas fa-spinner fa-spin" style={{ marginLeft: '0.5rem' }} />
                            </>
                        ) : (
                            <>Sign In</>
                        )}
                    </button>
                </form>

                {/* Forgot Password */}
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <Link to="/forgot-password" style={{ color: '#8A94FF', textDecoration: 'none' }}>
                        Forgot Password?
                    </Link>
                </div>

                {/* New Account */}
                <p style={{ textAlign: 'center', marginTop: '1rem', color: '#C6C6E4', fontSize: '0.9rem' }}>
                    Don't have an account?{' '}
                    <Link to="/register" style={{ color: '#8A94FF', textDecoration: 'none' }}>
                        Join Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
