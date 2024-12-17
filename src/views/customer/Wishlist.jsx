import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import apiInstance from "../../utils/axios";
import UserData from "../plugin/UserData";
import { addToWishlist } from "../plugin/addToWishlist";
import moment from "moment";
import { Link } from "react-router-dom";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const axios = apiInstance;
  const userData = UserData();

  const fetchWishlist = async () => {
    try {
      const response = await axios.get(
        `customer/wishlist/${userData?.user_id}/`
      );
      setWishlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [userData?.user_id]);

  const handleAddToWishlist = async (product_id) => {
    try {
      await addToWishlist(product_id, userData?.user_id);
      fetchWishlist();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main className="mt-5" style={{ marginBottom: "200px" }}>
        <div className="container">
          <section>
            <div className="row">
              <Sidebar />
              <div className="col-lg-9 mt-1">
                <section>
                  <main
                    className="mb-5"
                    style={{
                      backgroundColor: "#f9f9f9",
                      borderRadius: "12px",
                      padding: "30px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="container">
                      {/* Section: Wishlist */}
                      <section>
                        <h3
                          className="mb-4"
                          style={{
                            fontSize: "1.8rem",
                            color: "#4a4a4a",
                            fontWeight: "600",
                          }}
                        >
                          <i
                            className="fas fa-heart text-danger"
                            style={{ marginRight: "10px" }}
                          />
                          Wishlist
                        </h3>
                        <div className="row">
                          {wishlist.length > 0 ? (
                            wishlist.map((w, index) => (
                              <div
                                key={index}
                                className="col-lg-4 col-md-6 mb-4"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  className="card"
                                  style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "12px",
                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                                    width: "100%",
                                    transition: "transform 0.3s ease-in-out",
                                  }}
                                  onMouseEnter={(e) =>
                                    (e.currentTarget.style.transform =
                                      "translateY(-8px)")
                                  }
                                  onMouseLeave={(e) =>
                                    (e.currentTarget.style.transform =
                                      "translateY(0)")
                                  }
                                >
                                  <div className="bg-image hover-zoom ripple">
                                    <img
                                      src={w.product.image}
                                      className="w-100"
                                      style={{
                                        height: "250px",
                                        objectFit: "cover",
                                        borderRadius: "12px 12px 0 0",
                                      }}
                                    />
                                    <div className="hover-overlay">
                                      <div
                                        className="mask"
                                        style={{
                                          backgroundColor: "rgba(251, 251, 251, 0.15)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="card-body"
                                    style={{
                                      padding: "20px",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                    }}
                                  >
                                    <h6
                                      className="card-title mb-3"
                                      style={{
                                        fontSize: "1.1rem",
                                        color: "#333",
                                        textAlign: "center",
                                        fontWeight: "500",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      {w.product.title.slice(0, 30)}...
                                    </h6>
                                    <p
                                      style={{
                                        fontSize: "0.9rem",
                                        color: "#777",
                                        textAlign: "center",
                                      }}
                                    >
                                      {w.product?.brand.title}
                                    </p>
                                    <h6
                                      style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "600",
                                        color: "#333",
                                      }}
                                    >
                                      ${w.product.price}
                                    </h6>
                                    <button
                                      onClick={() => handleAddToWishlist(w.product.id)}
                                      type="button"
                                      className="btn btn-danger mt-3"
                                      style={{
                                        width: "100%",
                                        borderRadius: "8px",
                                        padding: "12px 0",
                                        fontSize: "1rem",
                                      }}
                                    >
                                      <i className="fas fa-heart" />
                                      {wishlist.includes(w) ? " Remove" : " Add"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <h6
                              style={{
                                textAlign: "center",
                                color: "#999",
                                marginTop: "20px",
                              }}
                            >
                              Your wishlist is empty
                            </h6>
                          )}
                        </div>
                      </section>
                      {/* Section: Wishlist */}
                    </div>
                    {/* Container */}
                  </main>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Wishlist;
