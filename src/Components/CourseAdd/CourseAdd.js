import React, { useState } from "react";
import {
  Field,
  Form,
  Formik,
  FormikProps,
  useFormik,
  FormikProvider,
} from "formik";

export default function CourseAdd() {
  const [activeCourse, setActiveCourse] = useState("");
  const selectDropDown = (e) => {
    setActiveCourse(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      sub_title: "",
      duration: "",
      fee: "",
      files: "",
      is_active: activeCourse,
    },

    onSubmit: (values) => {
      console.log("onSubmit", values);
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
                      <FormikProvider value={formik}>
                        <form onSubmit={formik.handleSubmit}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  Title
                                </label>
                                <Field
                                  id="firstName"
                                  name="title"
                                  type="text"
                                  onChange={formik.handleChange}
                                  value={formik.values.firstName}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  Sub Title
                                </label>
                                <Field
                                  id="firstName"
                                  name="sub_title"
                                  type="text"
                                  onChange={formik.handleChange}
                                  value={formik.values.lastName}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  Duration
                                </label>
                                <Field
                                  id="firstName"
                                  name="duration"
                                  type="text"
                                  onChange={formik.handleChange}
                                  value={formik.values.lastName}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  Fee
                                </label>
                                <Field
                                  id="firstName"
                                  name="fee"
                                  type="text"
                                  onChange={formik.handleChange}
                                  value={formik.values.lastName}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  Upload Course Photo
                                </label>
                                <Field
                                  type="file"
                                  name="files"
                                  className="form-control"
                                  accept="image/jpeg"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  Active
                                </label>

                                <Field
                                  as="select"
                                  name="is_active"
                                  className="form-control"
                                >
                                  <option value="true">Active</option>
                                  <option value="false">De-Active</option>
                                </Field>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="text-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </FormikProvider>
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
