import React, { useEffect, useState } from "react";
import "./StudentList.css";
import ApiServices from "../../util/ApiServices";
export default function StudentList() {
  const [info, setInfo] = useState([]);
  const studentInfo = async () => {
    const data = await ApiServices.getStudentInfo(1);
    setInfo(Array(data?.data?.data));
  };

  useEffect(() => {
    studentInfo();
  }, []);

  info.map((item) => {
    console.log("ddd", item);
  });
  // info.map((item)=>{console.log('item',item)})

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header align-items-center d-flex cards_heading_color">
                  <h4
                    className="card-title mb-0 flex-grow-1"
                    style={{ color: "white" }}
                  >
                    Recent Orders
                  </h4>
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-soft-info btn-sm"
                      style={{ color: "white" }}
                    >
                      <i className="ri-file-list-3-line align-middle"></i>{" "}
                      Generate Report
                    </button>
                  </div>
                </div>

                <div className="card-body">
                  <div className="table-responsive table-card">
                    <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                      <thead className="text-muted table-light">
                        <tr>
                          <th scope="col">Reg</th>
                          <th scope="col">Name</th>
                          <th scope="col">Father</th>
                          <th scope="col">Course</th>
                          <th scope="col">Duration</th>
                          <th scope="col">centre</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {info.map((stdInfo) => (
                          <tr>
                            <td>
                              <a
                                href="apps-ecommerce-order-details.html"
                                className="fw-medium link-primary"
                              >
                                {stdInfo.id}
                              </a>
                            </td>
                            <td>
                              <div className="d-flex align-items-center ">
                                <div className="flex-shrink-0 me-2">
                                  <img
                                    src="assets/images/users/avatar-6.jpg"
                                    alt=""
                                    className="avatar-xs rounded-circle"
                                  />
                                </div>
                                <div className="flex-grow-1 h6">
                                  {stdInfo.first_name}
                                </div>
                              </div>
                            </td>
                            <td>{stdInfo.father_name}</td>
                            <td>
                              <span className="text-success">
                                {stdInfo?.course_master?.sub_title}
                              </span>
                            </td>
                            <td>{stdInfo?.course_master?.duration}</td>

                            <td>
                            <span class="badge badge-label bg-primary"><i class="mdi mdi-circle-medium" style={{fontSize:'12px'}}>{stdInfo.mobile} </i> </span>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="SwitchCheck4"
                                  checked=""
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="SwitchCheck4"
                                >
                                  Yes/No
                                </label>
                              </div>
                            </td>
                           
                            <td>
                              <div className="d-flex gap-2">
                                <div className="edit">
                                  <button
                                    className="btn btn-sm btn-success edit-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#showModal"
                                  >
                                    Edit
                                  </button>
                                </div>

                                <div className="remove">
                                  <button
                                    className="btn btn-sm btn-danger remove-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteRecordModal"
                                  >
                                    Remove
                                  </button>
                                </div>

                                <div className="edit">
                                  <button
                                    className="btn btn-sm btn-success edit-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#zoomInModal"
                                  >
                                    Details
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div
                    className="modal fade zoomIn"
                    id="deleteRecordModal"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            id="btn-close"
                          ></button>
                        </div>

                        {/* model */}
                        <div className="modal-body">
                          <div className="mt-2 text-center">
                            <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                              <h4>Are you Sure ?</h4>
                              <p className="text-muted mx-4 mb-0">
                                Are you Sure You want to Remove this Record ?
                              </p>
                            </div>
                          </div>
                          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                            <button
                              type="button"
                              className="btn w-sm btn-light"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn w-sm btn-danger "
                              id="delete-record"
                            >
                              Yes, Delete It!
                            </button>
                          </div>
                        </div>

                        <div
                          className="modal fade"
                          id="showModal"
                          tabIndex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal Blur --> */}
      <div
        id="zoomInModal"
        class="modal fade zoomIn"
        tabindex="-1"
        aria-labelledby="zoomInModalLabel"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div class="modal-dialog modal-fullscreen-xxl-down">
          <div class="modal-content col-md-12">
            <div class="modal-header">
              <h5 class="modal-title" id="zoomInModalLabel">
                Modal Heading
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
              <p class="text-muted">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections.
              </p>
              <p class="text-muted">
                The bedding was hardly able to cover it and seemed ready to
                slide off any moment. His many legs, pitifully thin compared
                with the size of the rest of him, waved about helplessly as he
                looked. "What's happened to me?" he thought.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary ">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
