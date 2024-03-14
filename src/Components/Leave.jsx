import React, { useState } from "react";
import { User } from "../Assets/User";
import { Toast } from "react-bootstrap";
import Header from "./Header";

export default function Leave() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const createLeaveRequests = () => {
    const requests = User.map((user) => ({
      id: user.id,
      name: `${user.firstname} ${user.lastname}`,
      reason: user.reason,
    }));
    setLeaveRequests(requests);
  };

  useState(() => {
    createLeaveRequests();
  }, []);

  const handleApprove = (index) => {
    const updateRequst = [...leaveRequests];
    updateRequst.splice(index, 1);
    setLeaveRequests(updateRequst);

    setShowToast(true);
  };

  const handleDisapprove = (index) => {
    const updateRequst = [...leaveRequests];
    updateRequst.splice(index, 1);
    setLeaveRequests(updateRequst);
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="position-relative col-3 nav">
          <Header />
        </div>
        <div className="col-9 position-absolute">
          <div
            className="d-flex justify-content-center align-items-center position-absolute ms-5 leave w-100"
            style={{ minHeight: "100vh" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-3 text-center mb-5">Leave Request</h1>
                  <div
                    className="card-container"
                    style={{ maxHeight: "60vh", overflowY: "auto" }}
                  >
                    {leaveRequests.length > 0 ? (
                      leaveRequests.map((request, index) => (
                        <div key={request.id} className="card mb-3">
                          <div className="card-title p-3">
                            <h2>{request.name}</h2>
                          </div>
                          <div className="card-body  p-3">
                            <div className="row">
                              <div className="col-md-8">
                                <h5>Reason</h5>
                                <p>{request.reason}</p>
                              </div>
                              <div className="col-md-2">
                                <div className="d-flex">
                                  <button
                                    type="button"
                                    className="btn btn-success ms-3"
                                    onClick={() => handleApprove(index)}
                                  >
                                    Approve
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger ms-3"
                                    onClick={() => handleDisapprove(index)}
                                  >
                                    Decline
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="card">
                        <div className="card-body">
                          <h2 className="text-center">
                            No leave requests found
                          </h2>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Toast
              show={showToast}
              onClose={() => setShowToast(false)}
              className="position-fixed top-50 start-50 translate-middle"
            >
              <Toast.Header>
                <strong className="me-auto">Leave Approval</strong>
              </Toast.Header>
              <Toast.Body>Leave is approved.</Toast.Body>
            </Toast>
          </div>
        </div>
      </div>
    </div>
  );
}
