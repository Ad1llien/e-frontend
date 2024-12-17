import { useEffect, useState } from 'react';
import { register } from '../../utils/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

function Register() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const resetForm = () => {
        setFullname('');
        setEmail('');
        setPhone('');
        setPassword('');
        setPassword2('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Set isLoading to true when the form is submitted
        setIsLoading(true);

        const { error } = await register(fullname, email, phone, password, password2);
        if (error) {
            alert(JSON.stringify(error));
        } else {
            navigate('/');
            resetForm();
        }

        // Reset isLoading to false when the operation is complete
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
                    maxWidth: '650px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1rem',
                }}
            >
                {/* Title */}
                <div style={{ textAlign: 'center' }}>
                    <h2
                        style={{
                            marginBottom: '0.5rem',
                            color: '#C6C6E4',
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Create an Account
                    </h2>
                    <p
                        style={{
                            color: '#E0E0FF',
                            fontSize: '0.9rem',
                        }}
                    >
                        Join us to start your journey!
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        {/* Full Name Input */}
                        <label htmlFor="fullname" style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
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

                    <div style={{ marginBottom: '1rem' }}>
                        {/* Email Input */}
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                    <div style={{ marginBottom: '1rem' }}>
                        {/* Phone Input */}
                        <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                        {/* Password Input */}
                        <div style={{ flex: '1' }}>
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

                        {/* Confirm Password Input */}
                        <div style={{ flex: '1' }}>
                            <label htmlFor="password2" style={{ display: 'block', marginBottom: '0.5rem' }}>
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="password2"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
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
                    </div>

                    <p style={{ color: '#E0E0FF', fontSize: '0.9rem', textAlign: 'center' }}>
                        {password !== password2 ? 'Passwords do not match' : ''}
                    </p>

                    {/* Register Button */}
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
                        }}
                    >
                        {isLoading ? (
                            <>
                                <span>Processing...</span>
                                <i className="fas fa-spinner fa-spin" style={{ marginLeft: '0.5rem' }} />
                            </>
                        ) : (
                            <>Register</>
                        )}
                    </button>
                </form>

                {/* Already have an account */}
                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#C6C6E4', fontSize: '0.9rem' }}>
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: '#8A94FF', textDecoration: 'none' }}>
                        Login Now
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
