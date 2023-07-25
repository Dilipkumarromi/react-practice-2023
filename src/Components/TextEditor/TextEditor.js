import React, { Component, useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import './TextEditor.css'
export default function TextEditor({ placeholder }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

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

                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title mb-0">Bubble Editor</h4>
                  </div>

                  <div class="card-body">
                    <div className="col-md-4">
                      Course Name:
                      <select
                        class="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="bubble-editor" >
                      <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                        
                      />
                    </div>
                     
                    <div>
                      <div class="input-group" >
                        <button
                          class="btn btn-outline-primary float-left mt-2"
                          type="button"
                          id="button-addon1"
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
