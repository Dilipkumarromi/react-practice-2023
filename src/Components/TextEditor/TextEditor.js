import React, { Component, useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import "./TextEditor.css";
import Swal from "sweetalert2";
import ApiServices from "../../util/ApiServices";
let redStore
export default function TextEditor({ placeholder }) {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [courseList, setCourseList] = useState([]);
  const [drp, setDropDown] = useState("");
  const getCourse = async () => {
    const course = await ApiServices.getCourseList(); 
    
    setCourseList( course);
  };

  const courseDetailsBody=async(course_id)=>{
    const getCourseBody=await ApiServices.getCourseListDetailsBody(course_id);  
    if(getCourseBody.status===204) {
      setContent('enter html content');
    }
    setContent(getCourseBody?.data?.body)
  }
  const onHandle = (e) => {   
    setDropDown(e.target.value);
    courseDetailsBody(e.target.value)
  };
  const saveCourseDetails = async () => {
    const body = {
      course_master_id: +drp,
      body: content,
      is_active: 1,
    };

    const createCourseDetails = await ApiServices.courseDetails(body);

    if (createCourseDetails?.status === 409) {
      return Swal.fire("Dulicate entries are not allowed!", "", "question");
    }
    return Swal.fire("Course Details has been created", "", "success");
  };
  useEffect(() => {
    getCourse();
  }, []);

  //   const config = useMemo(
  //     {
  //       readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //       placeholder: placeholder || "Start typings...",
  //     },
  //     [placeholder]
  //   );
  return (
    <>
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="justify-content-between d-flex align-items-center mb-3"></div>

                <div class="card ">
                  <div class="card-header cards_heading_color">
                    <h4 class="card-title mb-0" style={{ color: "white" }}>
                      Bubble Editor
                    </h4>
                  </div>

                  <div class="card-body">
                    <div className="col-md-4">
                      Course Name:
                      <select
                        class="form-select mb-3"
                        aria-label="Default select example"
                        onChange={onHandle}
                      >
                        <option> Select User</option>
                        {courseList.map((data) => (
                          <option value={data?.id} key={data?.id}>
                            {data?.title}
                            
                          </option>
                          
                        ))}
                      </select>
                    </div>
                    <div class="bubble-editor">
                      <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                      />
                    </div>
                    <div dangerouslySetInnerHTML={{__html:content }} />
                    <div>
                      <div class="input-group">
                        <button
                          class="btn btn-outline-primary float-left mt-2"
                          type="button"
                          id="button-addon1"
                          onClick={saveCourseDetails}
                        >
                          Save
                        </button>
                      </div>
                    </div>
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
