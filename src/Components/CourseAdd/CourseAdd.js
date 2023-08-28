import React from "react";
import { Field, Form, Formik, FormikProps,useFormik } from 'formik';

export default function CourseAdd() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      jobType: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-6">
                <div className="card">
                  <div className="card-header align-items-center d-flex cards_heading_color">
                    <h4
                      className="card-title mb-0 flex-grow-1 "
                      style={{ color: "white" }}
                    >
                      Form Grid
                    </h4>
                    <div className="flex-shrink-0"></div>
                  </div>
                  <div className="card-body">
                    <div className="live-preview">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="firstName" className="form-label">
                                First Name
                              </label>
                              <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="firstName" className="form-label">
                                Last Name
                              </label>
                              <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="firstName" className="form-label">
                                Active
                              </label>
                              <Field as="select" name="color">
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                              </Field>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="text-end">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
