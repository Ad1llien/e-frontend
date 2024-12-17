



import React from 'react'

function StoreFooter() {
  return (
    <div>
      <footer className="bg-gradient text-center text-lg-start" style={{ background: 'linear-gradient(135deg, #4e73df, #6f42c1)' }}>
        {/* Grid container */}
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
              <strong style={{ color: ' #1A1A2E', fontSize: '18px' }}>Follow us on social media</strong>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
              {/* Social Media Icons */}
              <a
                className="btn btn-light btn-sm btn-floating me-2"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
             
              <a
                className="btn btn-light btn-sm btn-floating me-2"
                style={{ backgroundColor: "blue" }}
                href="https://t.me/akxdil"
                role="button"
              >
                <i className="fab fa-telegram" />
              </a>
              <a
                className="btn btn-light btn-sm btn-floating me-2"
                style={{ backgroundColor: "green" }}
                href="https://wa.me/87058856886"
                role="button"
              >
                <i className="bi bi-whatsapp" />
              </a>
              <a
                className="btn btn-light btn-sm btn-floating me-2"
                style={{ backgroundColor: "#E1306C" }}
                href="https://www.instagram.com/akxdil?igsh=N20xYTZhNXh0cTZs&utm_source=qr"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <hr className="my-4" style={{ borderColor: ' #1A1A2E' }} />
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <p style={{ color: ' #1A1A2E' }}>
                <strong>About us</strong>
              </p>
              <p style={{ color: ' #1A1A2E' }}>
                We are dedicated to providing high-quality products and exceptional customer service. Join our community and discover the best products at the best prices!
              </p>
            </div>
            {/*Grid column*/}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <p style={{ color: ' #1A1A2E' }}>
                <strong>Quick links</strong>
              </p>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none'}}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <p style={{ color: ' #1A1A2E' }}>
                <strong>Products</strong>
              </p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    Gadgets
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    Home Appliances
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none'}}>
                    Fashion & Apparel
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    Health & Beauty
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            <div className="col-lg-2 mb-4 mb-lg-0">
              <p style={{ color: ' #1A1A2E' }}>
                <strong>Support</strong>
              </p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "#1A1A2E", color: '#FFFFFF' }}
        >
          © 2024 Copyright:  
          <a className="text-light" href="https://mdbootstrap.com/" style={{ textDecoration: 'none' }}>
            storebuy.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  )
}

export default StoreFooter
