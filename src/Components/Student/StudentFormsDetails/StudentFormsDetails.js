import React from "react";
import {} from "./StudentFormsDetails.css";
export default function StudentFormsDetails() {
  return (
    <>
       
        <div class="main-content">
          <div class="page-content">
            <div class="container-fluid">
              <div className="row">
                <div className="forms_Header"></div>
                <div className="col-md-12 student_Details">
                    <h5 className="vr" style={{height:'20px'}}>Student Info</h5>
                  <p>
                    Student's Name
                    ..............................................
                  </p>
                  <p>
                    Father's Name ..............................................
                  </p>
                  <p>
                    Mother's Name ..............................................
                  </p>
                  <div className="col-md-4 mb-4">
                   
                      DOB <strong>.../..../...</strong>
                    
                    <strong  style={{marginLeft:'50px'}}>
                      Gender: Male{" "}
                      <input type="radio" name="fav_language"></input>
                      Female <input type="radio" name="fav_language"></input>
                    </strong>
                  </div>
                  <div className="col-md-6">
                    <h5 className="vr">Address</h5>
                    <div className="col-md-3">
                    <p>State:-</p>
                    <p>Distric:-</p>

                    </div>
                    <div className="col-md-3">
                      
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
