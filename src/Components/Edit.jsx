// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { User as users } from "../Assets/User";

// export default function Edit() {
//   const navigate=useNavigate()
//   const { id } = useParams();
//   const [values,setValues] = useState({});

//   useEffect(() => {
//     const findUser = users.find((values) => values.id === parseInt(id));
//     setValues(findUser);
//   }, []);

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center"
//       style={{ minHeight: "80vh" }}
//     >
//       <div className="row">
//         <div className="col-md-1"></div>

//         <div className="col-md-10">
//           <div className="formm">
//             <div className="outerdiv container d-flex justify-content-between align-items-center mb-3">
//               <div>
//                 <span className="display-6 fs-4 fw-bold">User</span>
//               </div>
//               <div>
//                 <button className="btn btn-primary" onClick={()=>navigate('/home')}>Back</button>
//               </div>
//             </div>

//             <form>
//               <div className="forms">
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control border-0 border-top-0 border-end-0 border-start-0"
//                       placeholder="First name"
//                       aria-label="First name"
//                       value={values.firstname || '' }
//                       onChange={e => setValues({...values, firstname: e.target.value})}
//                       style={{ borderBottom: "1px solid black" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control border-0 border-top-0 border-end-0 border-start-0"
//                       placeholder="Last name"
//                       aria-label="Last name"
//                       value={values.lastname || '' }
//                       onChange={e => setValues({...values, lastname: e.target.value})}
//                       style={{ borderBottom: "1px solid black" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control border-0 border-top-0 border-end-0 border-start-0"
//                       placeholder="Designation"
//                       value={values.designation || '' }
//                       onChange={e => setValues({...values, designation: e.target.value})}
//                       style={{ borderBottom: "1px solid black" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <select
//                       className="form-select border-0 border-top-0 border-end-0 border-start-0"
//                       aria-label="Role"
//                       style={{ borderBottom: "1px solid black" }}

//                     >
//                       <option selected value="null">
//                         Role
//                       </option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="email"
//                       className="form-control border-0 border-top-0 border-end-0 border-start-0"
//                       placeholder="Email"
//                       value={values.email || '' }
//                       onChange={e => setValues({...values, email: e.target.value})}
//                       style={{ borderBottom: "1px solid black" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="password"
//                       className="form-control border-0 border-top-0 border-end-0 border-start-0"
//                       placeholder="Password"
//                       style={{ borderBottom: "1px solid black" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="tel"
//                       className="form-control border-0 border-top-0 border-end-0 border-start-0 with-bottom-border {
//           border-bottom: 1px solid black;
//         }"
//                       placeholder="Mobile number"
//                       value={values.contactNo || '' }
//                       onChange={e => setValues({...values, contactNo: e.target.value})}
//                       style={{ borderBottom: "1px solid black" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="date"
//                       className="form-control border-0 border-top-0 border-end-0 border-start-0 "
//                       placeholder="Date of Birth"
//                       value={values.dob || '' }
//                       onChange={e => setValues({...values, dob: e.target.value})}
//                       style={{ borderBottom: "1px solid black" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <select
//                       className="form-select border-0 border-top-0 border-end-0 border-start-0"
//                       aria-label="Gender"
//                       style={{ borderBottom: "1px solid black" }}
//                       value={values.gender || '' }
//                       onChange={e => setValues({...values, gender: e.target.value})}
//                     >
//                       <option selected value="null">
//                         Gender
//                       </option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       type="text"
//                       className="form-control border-0 border-top-0 border-end-0 border-start-0"
//                       placeholder="Employee ID Number"
//                       value={values.id || '' }
//                       onChange={e => setValues({...values, id: e.target.value})}
//                       style={{ borderBottom: "1px solid black" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <img src="#" alt="User" className="mt-5" />
//                   </div>
//                   {/* <div className="col-md-6 d-flex justify-content-end align-items-center mt-5">
//                     <button className="btn btn-secondary me-2">Cancel</button>
//                     <button type="submit" className="btn btn-primary">
//                       {loading ? (
//                         <div className="spinner-border" role="status">
//                           <span className="">Loading...</span>
//                         </div>
//                       ) : (
//                         "Submit"
//                       )}
//                     </button>
//                   </div> */}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div className="col-md-1"></div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User as users } from "../Assets/User";
import Header from "./Header";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({});

  useEffect(() => {
    const findUser = users.find((values) => values.id === parseInt(id));
    setValues(findUser);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="position-relative col-3 nav">
          <Header />
        </div>
        <div className="col-9 position-absolute edit w-75">
          <div
            className="d-flex justify-content-center align-items-center edit "
            style={{ minHeight: "80vh" }}
          >
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-10">
                <div className="formm">
                  <div className="outerdiv container d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <span className="display-6 fs-4 fw-bold">User</span>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate("/home")}
                      >
                        Back
                      </button>
                    </div>
                  </div>

                  <form>
                    <div className="forms">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            aria-label="First name"
                            value={values.firstname || ""}
                            onChange={(e) =>
                              setValues({
                                ...values,
                                firstname: e.target.value,
                              })
                            }
                            style={{ borderBottom: "1px solid black" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            aria-label="Last name"
                            value={values.lastname || ""}
                            onChange={(e) =>
                              setValues({ ...values, lastname: e.target.value })
                            }
                            style={{ borderBottom: "1px solid black" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Designation"
                            value={values.designation || ""}
                            onChange={(e) =>
                              setValues({
                                ...values,
                                designation: e.target.value,
                              })
                            }
                            style={{ borderBottom: "1px solid black" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            aria-label="Role"
                            style={{ borderBottom: "1px solid black" }}
                          >
                            <option selected value="null">
                              Role
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={values.email || ""}
                            onChange={(e) =>
                              setValues({ ...values, email: e.target.value })
                            }
                            style={{ borderBottom: "1px solid black" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            style={{ borderBottom: "1px solid black" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="tel"
                            className="form-control with-bottom-border"
                            placeholder="Mobile number"
                            value={values.contactNo || ""}
                            onChange={(e) =>
                              setValues({
                                ...values,
                                contactNo: e.target.value,
                              })
                            }
                            style={{ borderBottom: "1px solid black" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Date of Birth"
                            value={values.dob || ""}
                            onChange={(e) =>
                              setValues({ ...values, dob: e.target.value })
                            }
                            style={{ borderBottom: "1px solid black" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            aria-label="Gender"
                            style={{ borderBottom: "1px solid black" }}
                            value={values.gender || ""}
                            onChange={(e) =>
                              setValues({ ...values, gender: e.target.value })
                            }
                          >
                            <option selected value="null">
                              Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Employee ID Number"
                            value={values.id || ""}
                            onChange={(e) =>
                              setValues({ ...values, id: e.target.value })
                            }
                            style={{ borderBottom: "1px solid black" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <img src="#" alt="User" className="mt-5" />
                        </div>
                        <div className="col-md-6 d-flex justify-content-end align-items-center mt-5">
                          <button className="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
