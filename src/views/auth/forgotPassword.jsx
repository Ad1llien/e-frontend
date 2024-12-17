

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import apiInstance from '../../utils/axios';
import Swal from 'sweetalert2';

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false); // Track loading state

    const axios = apiInstance;
    const [searchParams] = useSearchParams();
    const otp = searchParams.get('otp');
    const uuid = searchParams.get('uuid');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleEmailSubmit = async () => {
        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'Please enter your email',
            });
            return;
        }

        setLoading(true);  // Set loading state to true when submitting

        try {
            const res = await axios.get(`user/password-reset/${email}/`);
            if (res.data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Password Reset Email Sent!',
                    text: 'Please check your email inbox for further instructions.',
                });
            }
        } catch (err) {
            console.error('Error occurred during password reset:', err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
            });
        } finally {
            setLoading(false);  // Reset loading state after the request is done
        }
    };

    return (
        <section>
            <main style={{ marginBottom: '100px', marginTop: '50px' }}>
                <div className="container">
                    <section>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-5 col-md-8">
                                <div className="card rounded-5">
                                    <div className="card-body p-4">
                                        <h3 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                            Forgot Password
                                        </h3>
                                        <br />
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade show active"
                                                id="pills-login"
                                                role="tabpanel"
                                                aria-labelledby="tab-login"
                                            >
                                                <div>
                                                    {/* Email input */}
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="email">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            className="form-control"
                                                            onChange={handleEmailChange}
                                                            value={email}
                                                            placeholder="Enter your email"
                                                            style={{
                                                                padding: '0.8rem',
                                                                borderRadius: '8px',
                                                                backgroundColor: '#f8f8f8',
                                                                color: '#333',
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="text-center">
                                                        <button
                                                            onClick={handleEmailSubmit}
                                                            className="btn btn-primary w-100"
                                                            style={{
                                                                padding: '1rem',
                                                                fontWeight: 'bold',
                                                                borderRadius: '8px',
                                                                background: 'linear-gradient(90deg, #9F7AEA, #6A5ACD)',
                                                                color: '#FFF',
                                                                transition: 'background 0.3s ease',
                                                            }}
                                                            disabled={loading}
                                                        >
                                                            {loading ? 'Sending...' : 'Reset Password'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </section>
    );
}

export default ForgotPassword;
