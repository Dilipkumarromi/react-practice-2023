import React, { useEffect, useState } from "react";
import "./StudentList.css";
import ApiServices from "../../util/ApiServices";
import NoticeCards from "../NoticeCards/NoticeCards";
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
          <NoticeCards />
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
                              <span class="badge badge-label bg-primary">
                                <i
                                  class="mdi mdi-circle-medium"
                                  style={{ fontSize: "12px" }}
                                >
                                  {stdInfo.mobile}{" "}
                                </i>{" "}
                              </span>
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
        <div class="modal-dialog modal-fullscreen-xxl-down col-md-10">
          <div class="modal-content col-md-10">
            <div class="modal-header">              
              
            </div>
            
            <div class="modal-body">
            <div class="container-fluid">
          <div class="profile-foreground position-relative mx-n4 mt-n4">
            <div class="profile-wid-bg">
              <img
                src="assets/images/profile-bg.jpg"
                alt=""
                class="profile-wid-img"
              />
            </div>
          </div>
          <div class="pt-4 mb-4 mb-lg-3 pb-lg-4">
            <div class="row g-4">
              <div class="col-auto">
                <div class="avatar-lg">
                  <img
                    src="assets/images/users/avatar-1.jpg"
                    alt="user-img"
                    class="img-thumbnail rounded-circle"
                  />
                </div>
              </div>

              <div class="col">
                <div class="p-2">
                  <h3 class="text-white mb-1">Anna Adame</h3>
                  <p class="text-white-75">Owner & Founder</p>
                  <div class="hstack text-white-50 gap-1">
                    <div class="me-2">
                      <i class="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>
                      California, United States
                    </div>
                    <div>
                      <i class="ri-building-line me-1 text-white-75 fs-16 align-middle"></i>
                      Themesbrand
                    </div>
                  </div>
                </div>
              </div>

               
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12 " style={{borderRadius:'5px'}}>
              <div>
                <div class="d-flex">
                  <ul
                    class="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link fs-14 active"
                        data-bs-toggle="tab"
                        href="#overview-tab"
                        role="tab"
                      >
                        <i class="ri-airplay-fill d-inline-block d-md-none"></i>{" "}
                        <span class="d-none d-md-inline-block">Overview</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link fs-14"
                        data-bs-toggle="tab"
                        href="#activities"
                        role="tab"
                      >
                        <i class="ri-list-unordered d-inline-block d-md-none"></i>{" "}
                        <span class="d-none d-md-inline-block">Activities</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link fs-14"
                        data-bs-toggle="tab"
                        href="#projects"
                        role="tab"
                      >
                        <i class="ri-price-tag-line d-inline-block d-md-none"></i>{" "}
                        <span class="d-none d-md-inline-block">Projects</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link fs-14"
                        data-bs-toggle="tab"
                        href="#documents"
                        role="tab"
                      >
                        <i class="ri-folder-4-line d-inline-block d-md-none"></i>{" "}
                        <span class="d-none d-md-inline-block">Documents</span>
                      </a>
                    </li>
                  </ul>
                  
                </div>

                <div class="tab-content pt-4 text-muted">
                  <div
                    class="tab-pane active"
                    id="overview-tab"
                    role="tabpanel"
                  >
                    <div class="row">
                      <div class="col-xxl-3">
                        <div class="card">
                          <div class="card-body profile-header-bg">
                            <h5 class="card-title mb-5" style={{color:'white'}}>
                              Complete Your Profile
                            </h5>
                            <div class="progress animated-progress custom-progress progress-label">
                              <div
                                class="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "30%" }}
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div class="label">30%</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title mb-3">Info</h5>
                            <div class="table-responsive">
                              <table class="table table-borderless mb-0">
                                <tbody>
                                  <tr>
                                    <th class="ps-0" scope="row">
                                      Full Name :
                                    </th>
                                    <td class="text-muted">Anna Adame</td>
                                  </tr>
                                  <tr>
                                    <th class="ps-0" scope="row">
                                      Mobile :
                                    </th>
                                    <td class="text-muted">+(1) 987 6543</td>
                                  </tr>
                                  <tr>
                                    <th class="ps-0" scope="row">
                                      E-mail :
                                    </th>
                                    <td class="text-muted">
                                      daveadame@velzon.com
                                    </td>
                                  </tr>
                                  <tr>
                                    <th class="ps-0" scope="row">
                                      Location :
                                    </th>
                                    <td class="text-muted">
                                      California, United States
                                    </td>
                                  </tr>
                                  <tr>
                                    <th class="ps-0" scope="row">
                                      Joining Date
                                    </th>
                                    <td class="text-muted">24 Nov 2021</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title mb-4">Portfolio</h5>
                            <div class="d-flex flex-wrap gap-2">
                              <div>
                                <a
                                  href="javascript:void(0);"
                                  class="avatar-xs d-block"
                                >
                                  <span class="avatar-title rounded-circle fs-16 bg-dark text-light">
                                    <i class="ri-github-fill"></i>
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="javascript:void(0);"
                                  class="avatar-xs d-block"
                                >
                                  <span class="avatar-title rounded-circle fs-16 bg-primary">
                                    <i class="ri-global-fill"></i>
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="javascript:void(0);"
                                  class="avatar-xs d-block"
                                >
                                  <span class="avatar-title rounded-circle fs-16 bg-success">
                                    <i class="ri-dribbble-fill"></i>
                                  </span>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="javascript:void(0);"
                                  class="avatar-xs d-block"
                                >
                                  <span class="avatar-title rounded-circle fs-16 bg-danger">
                                    <i class="ri-pinterest-fill"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title mb-4">Skills</h5>
                            <div class="d-flex flex-wrap gap-2 fs-15">
                              <a
                                href="javascript:void(0);"
                                class="badge badge-soft-primary"
                              >
                                Photoshop
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="badge badge-soft-primary"
                              >
                                illustrator
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="badge badge-soft-primary"
                              >
                                HTML
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="badge badge-soft-primary"
                              >
                                CSS
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="badge badge-soft-primary"
                              >
                                Javascript
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="badge badge-soft-primary"
                              >
                                Php
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="badge badge-soft-primary"
                              >
                                Python
                              </a>
                            </div>
                          </div>
                        </div>                        
                      </div>                      
                    </div>
                  </div>
                  <div class="tab-pane fade" id="activities" role="tabpanel">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title mb-3">Activities</h5>
                        <div class="acitivity-timeline">
                          <div class="acitivity-item d-flex">
                            <div class="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt=""
                                class="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1">
                                Oliver Phillips{" "}
                                <span class="badge bg-soft-primary text-primary align-middle">
                                  New
                                </span>
                              </h6>
                              <p class="text-muted mb-2">
                                We talked about a project on linkedin.
                              </p>
                              <small class="mb-0 text-muted">Today</small>
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                              <div class="avatar-title bg-soft-success text-success rounded-circle">
                                N
                              </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1">
                                Nancy Martino{" "}
                                <span class="badge bg-soft-secondary text-secondary align-middle">
                                  In Progress
                                </span>
                              </h6>
                              <p class="text-muted mb-2">
                                <i class="ri-file-text-line align-middle ms-2"></i>
                                Create new project Buildng product
                              </p>
                              <div class="avatar-group mb-2">
                                <a
                                  href="javascript: void(0);"
                                  class="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Christi"
                                >
                                  <img
                                    src="assets/images/users/avatar-4.jpg"
                                    alt=""
                                    class="rounded-circle avatar-xs"
                                  />
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  class="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Frank Hook"
                                >
                                  <img
                                    src="assets/images/users/avatar-3.jpg"
                                    alt=""
                                    class="rounded-circle avatar-xs"
                                  />
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  class="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title=" Ruby"
                                >
                                  <div class="avatar-xs">
                                    <div class="avatar-title rounded-circle bg-light text-primary">
                                      R
                                    </div>
                                  </div>
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  class="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="more"
                                >
                                  <div class="avatar-xs">
                                    <div class="avatar-title rounded-circle">
                                      2+
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <small class="mb-0 text-muted">Yesterday</small>
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt=""
                                class="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1">
                                Natasha Carey{" "}
                                <span class="badge bg-soft-success text-success align-middle">
                                  Completed
                                </span>
                              </h6>
                              <p class="text-muted mb-2">
                                Adding a new event with attachments
                              </p>
                              <div class="row">
                                <div class="col-xxl-4">
                                  <div class="row border border-dashed gx-2 p-2 mb-2">
                                    <div class="col-4">
                                      <img
                                        src="assets/images/small/img-2.jpg"
                                        alt=""
                                        class="img-fluid rounded"
                                      />
                                    </div>

                                    <div class="col-4">
                                      <img
                                        src="assets/images/small/img-3.jpg"
                                        alt=""
                                        class="img-fluid rounded"
                                      />
                                    </div>

                                    <div class="col-4">
                                      <img
                                        src="assets/images/small/img-4.jpg"
                                        alt=""
                                        class="img-fluid rounded"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <small class="mb-0 text-muted">25 Nov</small>
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-6.jpg"
                                alt=""
                                class="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1">Bethany Johnson</h6>
                              <p class="text-muted mb-2">
                                added a new member to velzon dashboard
                              </p>
                              <small class="mb-0 text-muted">19 Nov</small>
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <div class="avatar-xs acitivity-avatar">
                                <div class="avatar-title rounded-circle bg-soft-danger text-danger">
                                  <i class="ri-shopping-bag-line"></i>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1">
                                Your order is placed{" "}
                                <span class="badge bg-soft-danger text-danger align-middle ms-1">
                                  Out of Delivery
                                </span>
                              </h6>
                              <p class="text-muted mb-2">
                                These customers can rest assured their order has
                                been placed.
                              </p>
                              <small class="mb-0 text-muted">16 Nov</small>
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-7.jpg"
                                alt=""
                                class="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1">Lewis Pratt</h6>
                              <p class="text-muted mb-2">
                                They all have something to say beyond the words
                                on the page. They can come across as casual or
                                neutral, exotic or graphic.{" "}
                              </p>
                              <small class="mb-0 text-muted">22 Oct</small>
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <div class="avatar-xs acitivity-avatar">
                                <div class="avatar-title rounded-circle bg-soft-info text-info">
                                  <i class="ri-line-chart-line"></i>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1">Monthly sales report</h6>
                              <p class="text-muted mb-2">
                                <span class="text-danger">2 days left</span>{" "}
                                notification to submit the monthly sales report.{" "}
                                <a
                                  href="javascript:void(0);"
                                  class="link-warning text-decoration-underline"
                                >
                                  Reports Builder
                                </a>
                              </p>
                              <small class="mb-0 text-muted">15 Oct</small>
                            </div>
                          </div>
                          <div class="acitivity-item d-flex">
                            <div class="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-8.jpg"
                                alt=""
                                class="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1">
                                New ticket received{" "}
                                <span class="badge bg-soft-success text-success align-middle">
                                  Completed
                                </span>
                              </h6>
                              <p class="text-muted mb-2">
                                User{" "}
                                <span class="text-secondary">Erica245</span>{" "}
                                submitted a ticket.
                              </p>
                              <small class="mb-0 text-muted">26 Aug</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="projects" role="tabpanel">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none profile-project-warning">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Chat App Update
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        2 year Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-warning fs-10">
                                      Inprogress
                                    </div>
                                  </div>
                                </div>

                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-1.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-3.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-light text-primary">
                                              J
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none profile-project-success">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        ABC Project Customization
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        2 month Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-primary fs-10">
                                      Progress
                                    </div>
                                  </div>
                                </div>

                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-8.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-7.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-6.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-primary">
                                              2+
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none profile-project-info">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Client - Frank Hook
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        1 hr Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-info fs-10">
                                      New
                                    </div>
                                  </div>
                                </div>

                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-4.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-light text-primary">
                                              M
                                            </div>
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-3.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none profile-project-primary">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Velzon Project
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        11 hr Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-success fs-10">
                                      Completed
                                    </div>
                                  </div>
                                </div>

                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-7.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-5.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none profile-project-danger">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Brand Logo Design
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        10 min Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-info fs-10">
                                      New
                                    </div>
                                  </div>
                                </div>

                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-7.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-6.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-light text-primary">
                                              E
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none profile-project-primary">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Chat App
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        8 hr Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-warning fs-10">
                                      Inprogress
                                    </div>
                                  </div>
                                </div>

                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-light text-primary">
                                              R
                                            </div>
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-3.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-8.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none profile-project-warning">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Project Update
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        48 min Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-warning fs-10">
                                      Inprogress
                                    </div>
                                  </div>
                                </div>

                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-6.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-5.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-4.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none profile-project-success">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Client - Jennifer
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        30 min Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-primary fs-10">
                                      Process
                                    </div>
                                  </div>
                                </div>

                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-1.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none mb-xxl-0   profile-project-info">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Bsuiness Template - UI/UX design
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        7 month Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-success fs-10">
                                      Completed
                                    </div>
                                  </div>
                                </div>
                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-2.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-3.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-4.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-primary">
                                              2+
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none mb-xxl-0  profile-project-success">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Update Project
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        1 month Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-info fs-10">
                                      New
                                    </div>
                                  </div>
                                </div>
                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-7.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-light text-primary">
                                              A
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none mb-sm-0  profile-project-danger">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        Bank Management System
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        10 month Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-success fs-10">
                                      Completed
                                    </div>
                                  </div>
                                </div>
                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-7.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-6.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-5.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-primary">
                                              2+
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-3 col-sm-6">
                            <div class="card profile-project-card shadow-none mb-0  profile-project-primary">
                              <div class="card-body p-4">
                                <div class="d-flex">
                                  <div class="flex-grow-1 text-muted overflow-hidden">
                                    <h5 class="fs-14 text-truncate">
                                      <a href="#" class="text-dark">
                                        PSD to HTML Convert
                                      </a>
                                    </h5>
                                    <p class="text-muted text-truncate mb-0">
                                      Last Update :{" "}
                                      <span class="fw-semibold text-dark">
                                        29 min Ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                    <div class="badge badge-soft-info fs-10">
                                      New
                                    </div>
                                  </div>
                                </div>
                                <div class="d-flex mt-4">
                                  <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                      <div>
                                        <h5 class="fs-12 text-muted mb-0">
                                          Members :
                                        </h5>
                                      </div>
                                      <div class="avatar-group">
                                        <div class="avatar-group-item">
                                          <div class="avatar-xs">
                                            <img
                                              src="assets/images/users/avatar-7.jpg"
                                              alt=""
                                              class="rounded-circle img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div class="mt-4">
                              <ul class="pagination pagination-separated justify-content-center mb-0">
                                <li class="page-item disabled">
                                  <a
                                    href="javascript:void(0);"
                                    class="page-link"
                                  >
                                    <i class="mdi mdi-chevron-left"></i>
                                  </a>
                                </li>
                                <li class="page-item active">
                                  <a
                                    href="javascript:void(0);"
                                    class="page-link"
                                  >
                                    1
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a
                                    href="javascript:void(0);"
                                    class="page-link"
                                  >
                                    2
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a
                                    href="javascript:void(0);"
                                    class="page-link"
                                  >
                                    3
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a
                                    href="javascript:void(0);"
                                    class="page-link"
                                  >
                                    4
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a
                                    href="javascript:void(0);"
                                    class="page-link"
                                  >
                                    5
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a
                                    href="javascript:void(0);"
                                    class="page-link"
                                  >
                                    <i class="mdi mdi-chevron-right"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="documents" role="tabpanel">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-center mb-4">
                          <h5 class="card-title flex-grow-1 mb-0">Documents</h5>
                          <div class="flex-shrink-0">
                            <input
                              class="form-control d-none"
                              type="file"
                              id="formFile"
                            />
                            <label for="formFile" class="btn btn-danger">
                              <i class="ri-upload-2-fill me-1 align-bottom"></i>{" "}
                              Upload File
                            </label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="table-responsive">
                              <table class="table table-borderless align-middle mb-0">
                                <thead class="table-light">
                                  <tr>
                                    <th scope="col">File Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Upload Date</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center">
                                        <div class="avatar-sm">
                                          <div class="avatar-title bg-soft-primary text-primary rounded fs-20">
                                            <i class="ri-file-zip-fill"></i>
                                          </div>
                                        </div>
                                        <div class="ms-3 flex-grow-1">
                                          <h6 class="fs-15 mb-0">
                                            <a href="javascript:void(0)">
                                              Artboard-documents.zip
                                            </a>
                                          </h6>
                                        </div>
                                      </div>
                                    </td>
                                    <td>Zip File</td>
                                    <td>4.57 MB</td>
                                    <td>12 Dec 2021</td>
                                    <td>
                                      <div class="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-light btn-icon"
                                          id="dropdownMenuLink15"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i class="ri-equalizer-fill"></i>
                                        </a>
                                        <ul
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="dropdownMenuLink15"
                                        >
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-eye-fill me-2 align-middle text-muted"></i>
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-download-2-fill me-2 align-middle text-muted"></i>
                                              Download
                                            </a>
                                          </li>
                                          <li class="dropdown-divider"></li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center">
                                        <div class="avatar-sm">
                                          <div class="avatar-title bg-soft-danger text-danger rounded fs-20">
                                            <i class="ri-file-pdf-fill"></i>
                                          </div>
                                        </div>
                                        <div class="ms-3 flex-grow-1">
                                          <h6 class="fs-15 mb-0">
                                            <a href="javascript:void(0);">
                                              Bank Management System
                                            </a>
                                          </h6>
                                        </div>
                                      </div>
                                    </td>
                                    <td>PDF File</td>
                                    <td>8.89 MB</td>
                                    <td>24 Nov 2021</td>
                                    <td>
                                      <div class="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-light btn-icon"
                                          id="dropdownMenuLink3"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i class="ri-equalizer-fill"></i>
                                        </a>
                                        <ul
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="dropdownMenuLink3"
                                        >
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-eye-fill me-2 align-middle text-muted"></i>
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-download-2-fill me-2 align-middle text-muted"></i>
                                              Download
                                            </a>
                                          </li>
                                          <li class="dropdown-divider"></li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center">
                                        <div class="avatar-sm">
                                          <div class="avatar-title bg-soft-secondary text-secondary rounded fs-20">
                                            <i class="ri-video-line"></i>
                                          </div>
                                        </div>
                                        <div class="ms-3 flex-grow-1">
                                          <h6 class="fs-15 mb-0">
                                            <a href="javascript:void(0);">
                                              Tour-video.mp4
                                            </a>
                                          </h6>
                                        </div>
                                      </div>
                                    </td>
                                    <td>MP4 File</td>
                                    <td>14.62 MB</td>
                                    <td>19 Nov 2021</td>
                                    <td>
                                      <div class="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-light btn-icon"
                                          id="dropdownMenuLink4"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i class="ri-equalizer-fill"></i>
                                        </a>
                                        <ul
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="dropdownMenuLink4"
                                        >
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-eye-fill me-2 align-middle text-muted"></i>
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-download-2-fill me-2 align-middle text-muted"></i>
                                              Download
                                            </a>
                                          </li>
                                          <li class="dropdown-divider"></li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center">
                                        <div class="avatar-sm">
                                          <div class="avatar-title bg-soft-success text-success rounded fs-20">
                                            <i class="ri-file-excel-fill"></i>
                                          </div>
                                        </div>
                                        <div class="ms-3 flex-grow-1">
                                          <h6 class="fs-15 mb-0">
                                            <a href="javascript:void(0);">
                                              Account-statement.xsl
                                            </a>
                                          </h6>
                                        </div>
                                      </div>
                                    </td>
                                    <td>XSL File</td>
                                    <td>2.38 KB</td>
                                    <td>14 Nov 2021</td>
                                    <td>
                                      <div class="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-light btn-icon"
                                          id="dropdownMenuLink5"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i class="ri-equalizer-fill"></i>
                                        </a>
                                        <ul
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="dropdownMenuLink5"
                                        >
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-eye-fill me-2 align-middle text-muted"></i>
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-download-2-fill me-2 align-middle text-muted"></i>
                                              Download
                                            </a>
                                          </li>
                                          <li class="dropdown-divider"></li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center">
                                        <div class="avatar-sm">
                                          <div class="avatar-title bg-soft-info text-info rounded fs-20">
                                            <i class="ri-folder-line"></i>
                                          </div>
                                        </div>
                                        <div class="ms-3 flex-grow-1">
                                          <h6 class="fs-15 mb-0">
                                            <a href="javascript:void(0);">
                                              Project Screenshots Collection
                                            </a>
                                          </h6>
                                        </div>
                                      </div>
                                    </td>
                                    <td>Floder File</td>
                                    <td>87.24 MB</td>
                                    <td>08 Nov 2021</td>
                                    <td>
                                      <div class="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-light btn-icon"
                                          id="dropdownMenuLink6"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i class="ri-equalizer-fill"></i>
                                        </a>
                                        <ul
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="dropdownMenuLink6"
                                        >
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-eye-fill me-2 align-middle"></i>
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-download-2-fill me-2 align-middle"></i>
                                              Download
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-delete-bin-5-line me-2 align-middle"></i>
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center">
                                        <div class="avatar-sm">
                                          <div class="avatar-title bg-soft-danger text-danger rounded fs-20">
                                            <i class="ri-image-2-fill"></i>
                                          </div>
                                        </div>
                                        <div class="ms-3 flex-grow-1">
                                          <h6 class="fs-15 mb-0">
                                            <a href="javascript:void(0);">
                                              Velzon-logo.png
                                            </a>
                                          </h6>
                                        </div>
                                      </div>
                                    </td>
                                    <td>PNG File</td>
                                    <td>879 KB</td>
                                    <td>02 Nov 2021</td>
                                    <td>
                                      <div class="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn btn-light btn-icon"
                                          id="dropdownMenuLink7"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i class="ri-equalizer-fill"></i>
                                        </a>
                                        <ul
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="dropdownMenuLink7"
                                        >
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-eye-fill me-2 align-middle"></i>
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-download-2-fill me-2 align-middle"></i>
                                              Download
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i class="ri-delete-bin-5-line me-2 align-middle"></i>
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="text-center mt-3">
                              <a
                                href="javascript:void(0);"
                                class="text-success "
                              >
                                <i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>
                                Load more{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
