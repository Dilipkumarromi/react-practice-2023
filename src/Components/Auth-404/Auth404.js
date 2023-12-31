import React from "react";

export default function Auth404() {
  return (
    <>
      <div class="auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="auth-page-content overflow-hidden p-0">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8">
                <div class="text-center">
                  <img
                    src="assets/images/error400-cover.png"
                    alt="error img"
                    class="img-fluid"
                  />
                  <div class="mt-3">
                    <h3 class="text-uppercase">Sorry, Page not Found 😭</h3>
                    <p class="text-muted mb-4">
                      The page you are looking for not available!
                    </p>
                    <a href="index.html" class="btn btn-success">
                      <i class="mdi mdi-home me-1"></i>Back to home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
