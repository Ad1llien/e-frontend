import React from "react";
import Sidebar from "./Sidebar";
import UseProfileData from "../plugin/UseProfileData";
import { useNavigate } from "react-router-dom";

function Account() {
  const userProfile = UseProfileData();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <main
        className="mt-5"
        style={{ marginBottom: "170px", backgroundColor: "#fff" }}
      >
        <div className="container">
          <section>
            <div className="row">
              <Sidebar />
              <div className="col-lg-9 mt-1">
                <main
                  className="mb-5"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "40px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Container for demo purpose */}
                  <div className="container px-4">
                    {/* Section: Summary */}
                    <section className="">
                      <div className="row">
                        <div className="col-12">
                          <div className="bg-light p-4 rounded-lg shadow-sm">
                            <h2 style={{ color: " #6A5ACD" }}>
                              Hi, {userProfile?.full_name}
                            </h2>
                            <p style={{ fontSize: "1.1rem", color: "#555" }}>
                              From your account dashboard, you can easily check
                              and view your
                              <a
                                href=""
                                style={{
                                  color: " #6A5ACD",
                                  textDecoration: "none",
                                }}
                              >
                                {" "}
                                orders
                              </a>
                              , manage your{" "}
                              <a
                                href=""
                                style={{
                                  color: " #6A5ACD",
                                  textDecoration: "none",
                                }}
                              >
                                {" "}
                                shipping address
                              </a>
                              ,{" "}
                              <a
                                href=""
                                style={{
                                  color: " #6A5ACD",
                                  textDecoration: "none",
                                }}
                              >
                                {" "}
                                change password
                              </a>
                              , and{" "}
                              <a
                                href=""
                                style={{
                                  color: " #6A5ACD",
                                  textDecoration: "none",
                                }}
                              >
                                {" "}
                                edit account
                              </a>{" "}
                              information.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* Section: Quick Actions */}
                    <section className="mt-4">
                      <div className="row">
                        <div className="col-md-4">
                          <div
                            className="card text-center shadow-sm"
                            style={{
                              padding: "20px",
                              backgroundColor: "#F8F9FA",
                              borderRadius: "8px",
                              minHeight: "200px",
                            }}
                          >
                            <i
                              className="fas fa-shopping-cart fa-3x"
                              style={{ color: "#6A5ACD" }}
                            ></i>
                            <h5 className="mt-3">View Orders</h5>
                            <p style={{ fontSize: "0.9rem", color: "#555" }}>
                              Check the status of your recent orders.
                            </p>
                            <button
                              onClick={() => handleNavigation("/orders")}
                              className="btn btn-primary btn-sm"
                            >
                              Go to Orders
                            </button>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className="card text-center shadow-sm"
                            style={{
                              padding: "20px",
                              backgroundColor: "#F8F9FA",
                              borderRadius: "8px",
                              minHeight: "200px",
                            }}
                          >
                            <i
                              className="fas fa-user-edit fa-3x"
                              style={{ color: "#6A5ACD" }}
                            ></i>
                            <h5 className="mt-3">Edit Profile</h5>
                            <p style={{ fontSize: "0.9rem", color: "#555" }}>
                              Update your personal information.
                            </p>
                            <button
                              onClick={() => handleNavigation("/edit-profile")}
                              className="btn btn-primary btn-sm"
                            >
                              Edit Profile
                            </button>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className="card text-center shadow-sm"
                            style={{
                              padding: "20px",
                              backgroundColor: "#F8F9FA",
                              borderRadius: "8px",
                              minHeight: "200px",
                            }}
                          >
                            <i
                              className="fas fa-lock fa-3x"
                              style={{ color: "#6A5ACD" }}
                            ></i>
                            <h5 className="mt-3">Change Password</h5>
                            <p style={{ fontSize: "0.9rem", color: "#555" }}>
                              Keep your account secure by updating your
                              password.
                            </p>
                            <button
                              onClick={() => handleNavigation("/change-password")}
                              className="btn btn-primary btn-sm"
                            >
                              Change Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </main>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Account;
