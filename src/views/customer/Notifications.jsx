import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import apiInstance from "../../utils/axios";
import UserData from "../plugin/UserData";
import moment from "moment";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const axios = apiInstance;
  const userData = UserData();

  useEffect(() => {
    axios.get(`customer/notification/${userData?.user_id}/`).then((res) => {
      setNotifications(res.data);
      if (notifications) {
        setLoading(false);
      }
    });
  }, []);

  return (
    <div>
      <main className="mt-5" style={{ marginBottom: 200 }}>
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
                    <div className="container px-4">
                      {/* Section: Notifications */}
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
                            className="fas fa-bell"
                            style={{ marginRight: "10px", color: "#6A5ACD" }}
                          />
                          Notifications
                        </h3>
                        <div className="list-group">
                          {notifications.length > 0 ? (
                            notifications.map((noti, index) => (
                              <div
                                key={index}
                                className="list-group-item p-4 mb-3"
                                style={{
                                  backgroundColor: "#fff",
                                  borderRadius: "8px",
                                  border: "1px solid #e6e6e6",
                                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                                  transition: "transform 0.2s ease-in-out",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.transform =
                                    "translateY(-2px)")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.transform =
                                    "translateY(0)")
                                }
                              >
                                <div className="d-flex w-100 justify-content-between">
                                  <h5
                                    className="mb-1"
                                    style={{
                                      fontSize: "1.2rem",
                                      color: "#6A5ACD",
                                      fontWeight: "500",
                                    }}
                                  >
                                    New Order!
                                  </h5>
                                  <small
                                    style={{ color: "#999", fontSize: "0.9rem" }}
                                  >
                                    {moment(noti.date).format("MM-DD-YYYY")}
                                  </small>
                                </div>
                                <p
                                  className="mb-1"
                                  style={{
                                    fontSize: "1rem",
                                    color: "#333",
                                    lineHeight: "1.4",
                                  }}
                                >
                                  Your order #{noti?.order?.oid} was successful.
                                </p>
                                <div style={{ fontSize: "0.9rem", color: "#555" }}>
                                  <small>Total: ${noti?.order?.total}</small>{" "}
                                  <br />
                                  <small>
                                    Shipping: ${noti?.order?.shipping_amount}
                                  </small>{" "}
                                  <br />
                                  <small>Tax: ${noti?.order?.tax_fee}</small>{" "}
                                  <br />
                                  <small>
                                    Service Fee: ${noti?.order?.service_fee}
                                  </small>
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
                              No notifications yet
                            </h6>
                          )}
                        </div>
                      </section>
                      {/* Section: Notifications */}
                    </div>
                    {/* Container */}
                  </main>
                </section>
              </div>
            </div>
          </section>
          {/* Section */}
        </div>
      </main>
    </div>
  );
}

export default Notifications;
