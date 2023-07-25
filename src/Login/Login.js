import React,{createContext } from "react";
import ApiServeces from "../util/ApiServices";
import "./Login.css";
import AuthUserAccess from "../util/ApiServices";
import { Formik, Form, Field, ErrorMessage } from "formik";
export default function Login() {
  const isLogin=localStorage.getItem('isLogin');
  
  return (
    <div className="auth-page-wrapper pt-5">
      <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
        <div className="bg-overlay"></div>

        {/* <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                        <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                    </svg>
                </div> */}
      </div>

      <div className="auth-page-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card mt-4">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Welcome Back !</h5>
                    <p className="text-muted">Sign in to continue to Velzon.</p>
                  </div>
                  <div className="p-2 mt-4">                   

                    <Formik
                      initialValues={{ email: "", password: "" }}
                       
                      validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = "Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Invalid email address";
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(async() => {
                           
                          await AuthUserAccess.Login(values)
                           
                          // console.log('Auth',JSON.stringify(values, null, 2))
                          setSubmitting(false);
                        }, 400);
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form className="mb-3">
                          <div className="mb-3">
                            <Field
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter username"
                            />
                            <ErrorMessage name="email" component="div" />
                          </div>

                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Field
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Enter password"
                            />
                            <ErrorMessage name="password" component="div" />
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-success w-100"
                          >
                            Submit
                          </button>
                        </Form>
                      )}
                    </Formik>
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
