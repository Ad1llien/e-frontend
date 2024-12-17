import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL, PAYPAL_CLIENT_ID } from '../../utils/constants';
import apiInstance from '../../utils/axios';
import Swal from 'sweetalert2';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Checkout() {
  const [order, setOrder] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const axios = apiInstance;
  const param = useParams();

  useEffect(() => {
    axios.get(`checkout/${param?.order_oid}/`).then((res) => {
      setOrder(res.data);
    });
  }, [loading]);

  const initialOptions = {
    clientId: PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  };

  const handleChange = (e) => {
    setCouponCode(e.target.value);
  };

  const appleCoupon = async () => {
    setLoading(true);

    const formdata = new FormData();
    formdata.append("order_oid", order.oid);
    formdata.append("coupon_code", couponCode);

    try {
      const response = await axios.post('coupon/', formdata);
      setLoading(false);

      Swal.fire({
        icon: response.data.message === "Coupon Activated" ? 'success' : 'warning',
        title: response.data.message,
        text: response.data.message === "Coupon Activated" ? "A new coupon has been applied" : "This coupon is already activated!",
      });

      if (response.data.message === "Coupon Activated") {
        setCouponCode("");
      }

    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: error.response.data.message,
        text: "This coupon does not exist!",
      });
      setCouponCode("");
    }
  };

  const payWithStripe = (event) => {
    setPaymentLoading(true);
    event.target.form.submit();
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mb-4">
          {/* Shipping Details */}
          <div className="card shadow-sm mb-4 p-4">
            <h4>Shipping Address</h4>
            <form>
              <div className="row">
                {['Full Name', 'Email', 'Mobile', 'Address', 'City', 'State', 'Country'].map((label, index) => (
                  <div key={index} className="col-md-6">
                    <div className="form-group mb-3">
                      <label>{label}</label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={order[label.toLowerCase().replace(' ', '_')]}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </form>
          </div>
          
          {/* Billing Details */}
          <div className="card shadow-sm p-4">
            <h4>Billing Address</h4>
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="sameAsShipping" defaultChecked />
              <label className="form-check-label" htmlFor="sameAsShipping">Same as shipping address</label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-4">
            <h4>Order Summary</h4>
            <div className="d-flex justify-content-between mb-3">
              <span>Subtotal</span>
              <span>${order.sub_total}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Shipping</span>
              <span>${order.shipping_amount}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Tax</span>
              <span>${order.tax_fee}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Service Fee</span>
              <span>${order.service_fee}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold mb-4">
              <span>Total</span>
              <span>${order.total}</span>
            </div>

            {/* Coupon Input */}
            <div className="d-flex align-items-center mb-4">
              {loading ? (
                <>
                  <input
                    type="text"
                    className="form-control"
                    value={couponCode}
                    placeholder="Enter Coupon Code"
                    disabled
                  />
                  <button className="btn btn-success ms-2" disabled>
                    <i className="fas fa-spinner fa-spin"></i>
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    className="form-control"
                    value={couponCode}
                    onChange={handleChange}
                    placeholder="Enter Coupon Code"
                  />
                  <button onClick={appleCoupon} className="btn btn-success ms-2">
                    <i className="fas fa-check-circle"></i>
                  </button>
                </>
              )}
            </div>

            {/* Payment Button */}
            {paymentLoading ? (
              <form action={`${API_BASE_URL}stripe-checkout/${param?.order_oid}/`} method="POST">
                <button className="btn btn-primary w-100" type="submit">
                  Processing... <i className="fas fa-spinner fa-spin"></i>
                </button>
              </form>
            ) : (
              <form action={`${API_BASE_URL}stripe-checkout/${param?.order_oid}/`} method="POST">
                <button className="btn btn-primary w-100" type="submit">
                  Pay Now (Stripe)
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
