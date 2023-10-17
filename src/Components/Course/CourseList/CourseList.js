import React from 'react'

export default function CourseList() {
  return (
    <>
     <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="card car ">
                  <div class="card-header cards_heading_color">
                    <h4 class="card-title mb-0" style={{ color: "white" }}>
                     Course List - Edit & Update
                    </h4>
                  </div>

                  <div class="card-body">
                    <div id="customerList">
                      <div class="row g-4 mb-3">
                        <div class="col-sm-auto">
                          <div>
                            <button
                              type="button"
                              class="btn btn-success add-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                            >
                              <i class="ri-add-line align-bottom me-1"></i>{" "}
                              Import
                            </button>
                          </div>
                        </div>
                        <div class="col-sm">
                          <div class="d-flex justify-content-sm-end">
                            <div class="search-box ms-2">
                              <input
                                type="text"
                                class="form-control search"
                                placeholder="Search..."
                              />
                              <i class="ri-search-line search-icon"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="table-responsive table-card mt-3 mb-1">
                        <table
                          class="table align-middle table-nowrap"
                          id="customerTable"
                        >
                          <thead class="table-light">
                            <tr>
                              <th scope="col" style={{ width: "50px" }}>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="checkAll"
                                    value="option"
                                  />
                                </div>
                              </th>
                              <th class="sort" data-sort="customer_name">
                                Reg.
                              </th>
                              <th class="sort" data-sort="email">
                                Name
                              </th>
                              <th class="sort" data-sort="phone">
                                Father's Name
                              </th>
                              <th class="sort" data-sort="date">
                                Mother's Name
                              </th>
                              <th class="sort" data-sort="status">
                                course_name
                              </th>
                              <th class="sort" data-sort="status">
                                Study Centre
                              </th>
                              <th class="sort" data-sort="status">
                                centre Code
                              </th>
                              <th class="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody class="list form-check-all">
                            <tr>
                              <th scope="row">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="checkAll"
                                    value="option1"
                                  />
                                </div>
                              </th>
                              <td class="id" style={{ display: "none" }}>
                                <a
                                  href="javascript:void(0);"
                                  class="fw-medium link-primary"
                                >
                                  #VZ2101
                                </a>
                              </td>
                              <td class="customer_name">Mary Cousar</td>
                              <td class="email">marycousar@velzon.com</td>
                              <td class="phone">580-464-4694</td>
                              <td class="date">06 Apr, 2021</td>
                              <td class="status">
                                <span class="badge badge-soft-success text-uppercase">
                                  Active
                                </span>
                              </td>
                              <td>Test Centre</td>

                              <td>Test Code</td>
                              <td>
                                <div class="d-flex gap-2">
                                  <div class="edit">
                                    <button
                                      class="btn btn-sm btn-success edit-item-btn"
                                      data-bs-toggle="modal"
                                      data-bs-target=".bs-example-modal-xl"
                                    >
                                      Details & Update
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="noresult" style={{ display: "none" }}>
                          <div class="text-center">
                            <lord-icon
                              src="https://cdn.lordicon.com/msoeawqm.json"
                              trigger="loop"
                              colors="primary:#121331,secondary:#08a88a"
                              style={{ width: "75px", height: "75px" }}
                            ></lord-icon>
                            <h5 class="mt-2">Sorry! No Result Found</h5>
                            <p class="text-muted mb-0">
                              We've searched more than 150+ Orders We did not
                              find any orders for you search.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-end">
                        <div class="pagination-wrap hstack gap-2">
                          <a
                            class="page-item pagination-prev disabled"
                            href="#"
                          >
                            Previous
                          </a>
                          <ul class="pagination listjs-pagination mb-0"></ul>
                          <a class="page-item pagination-next" href="#">
                            Next
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="myModal"
              class="modal fade"
              tabindex="-1"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="myModalLabel">
                      Upload Excel
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      {" "}
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="card">
                          <div class="card-body">
                            <div class="dropzone">
                              <div class="fallback">
                                <input
                                  name="file"
                                  type="file"
                                  multiple="multiple"
                                />
                              </div>

                              <div class="dz-message needsclick">
                                <div class="mb-3">
                                  <i class="display-4 text-muted ri-upload-cloud-2-fill"></i>
                                </div>

                                <h4>Drop files here or click to upload.</h4>
                              </div>
                            </div>

                            <ul
                              class="list-unstyled mb-0"
                              id="dropzone-preview"
                            ></ul>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div>
                    <div class="live-preview">
                      <div>
                        <div
                          class="modal fade exampleModalFullscreen"
                          tabindex="-1"
                          aria-labelledby="exampleModalFullscreenLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5
                                  class="modal-title"
                                  id="exampleModalFullscreenLabel"
                                >
                                  Fullscreen Modal Heading
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <h6 class="fs-15">
                                  Give your text a good structure
                                </h6>
                                <div class="d-flex">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2">
                                    <p class="text-muted mb-0">
                                      Raw denim you probably haven't heard of
                                      them jean shorts Austin. Nesciunt tofu
                                      stumptown aliqua, retro synth master
                                      cleanse.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Too much or too little spacing, as in the
                                      example below, can make things unpleasant
                                      for the reader. The goal is to make your
                                      text as comfortable to read as possible.{" "}
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      In some designs, you might adjust your
                                      tracking to create a certain artistic
                                      effect. It can also help you fix fonts
                                      that are poorly spaced to begin with.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      For that very reason, I went on a quest
                                      and spoke to many different professional
                                      graphic designers and asked them what
                                      graphic design tips they live.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      You've probably heard that opposites
                                      attract. The same is true for fonts. Don't
                                      be afraid to combine font styles that are
                                      different but complementary, like sans
                                      serif with serif, short with tall, or
                                      decorative with simple. Qui photo booth
                                      letterpress, commodo enim craft beer
                                      mlkshk aliquip jean shorts ullamco ad
                                      vinyl cillum PBR.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      For that very reason, I went on a quest
                                      and spoke to many different professional
                                      graphic designers and asked them what
                                      graphic design tips they live.
                                    </p>
                                  </div>
                                </div>
                                <h6 class="fs-16 my-3">Graphic Design</h6>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Opposites attract, and that’s a fact. It’s
                                      in our nature to be interested in the
                                      unusual, and that’s why using contrasting
                                      colors in Graphic Design is a must. It’s
                                      eye-catching, it makes a statement, it’s
                                      impressive graphic design. Increase or
                                      decrease the letter spacing depending.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Trust fund seitan letterpress, keytar raw
                                      denim keffiyeh etsy art party before they
                                      sold out master cleanse gluten-free squid
                                      scenester freegan cosby sweater.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Just like in the image where we talked
                                      about using multiple fonts, you can see
                                      that the background in this graphic design
                                      is blurred. Whenever you put text on top
                                      of an image, it’s important that your
                                      viewers can understand.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Keytar raw denim keffiyeh etsy art party
                                      before they sold out master cleanse
                                      gluten-free squid scenester freegan cosby
                                      sweater.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-link link-success fw-medium"
                                  data-bs-dismiss="modal"
                                >
                                  <i class="ri-close-line me-1 align-middle"></i>{" "}
                                  Close
                                </a>
                                <button type="button" class="btn btn-primary ">
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* myExtraLargeModalLabel */}

                        <div
                          class="modal fade bs-example-modal-xl"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="myExtraLargeModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5
                                  class="modal-title"
                                  id="myExtraLargeModalLabel"
                                >
                                  Extra large modal
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <h6 class="fs-15">
                                  Give your text a good structure
                                </h6>
                                <div class="d-flex">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2">
                                    <p class="text-muted mb-0">
                                      Raw denim you probably haven't heard of
                                      them jean shorts Austin. Nesciunt tofu
                                      stumptown aliqua, retro synth master
                                      cleanse.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Too much or too little spacing, as in the
                                      example below, can make things unpleasant
                                      for the reader. The goal is to make your
                                      text as comfortable to read as possible.{" "}
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      In some designs, you might adjust your
                                      tracking to create a certain artistic
                                      effect. It can also help you fix fonts
                                      that are poorly spaced to begin with.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      For that very reason, I went on a quest
                                      and spoke to many different professional
                                      graphic designers and asked them what
                                      graphic design tips they live.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      You've probably heard that opposites
                                      attract. The same is true for fonts. Don't
                                      be afraid to combine font styles that are
                                      different but complementary, like sans
                                      serif with serif, short with tall, or
                                      decorative with simple. Qui photo booth
                                      letterpress, commodo enim craft beer
                                      mlkshk aliquip jean shorts ullamco ad
                                      vinyl cillum PBR.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      For that very reason, I went on a quest
                                      and spoke to many different professional
                                      graphic designers and asked them what
                                      graphic design tips they live.
                                    </p>
                                  </div>
                                </div>
                                <h6 class="fs-16 my-3">Graphic Design</h6>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Opposites attract, and that’s a fact. It’s
                                      in our nature to be interested in the
                                      unusual, and that’s why using contrasting
                                      colors in Graphic Design is a must. It’s
                                      eye-catching, it makes a statement, it’s
                                      impressive graphic design. Increase or
                                      decrease the letter spacing depending.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Trust fund seitan letterpress, keytar raw
                                      denim keffiyeh etsy art party before they
                                      sold out master cleanse gluten-free squid
                                      scenester freegan cosby sweater.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Just like in the image where we talked
                                      about using multiple fonts, you can see
                                      that the background in this graphic design
                                      is blurred. Whenever you put text on top
                                      of an image, it’s important that your
                                      viewers can understand.
                                    </p>
                                  </div>
                                </div>
                                <div class="d-flex mt-2">
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 ">
                                    <p class="text-muted mb-0">
                                      Keytar raw denim keffiyeh etsy art party
                                      before they sold out master cleanse
                                      gluten-free squid scenester freegan cosby
                                      sweater.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-link link-success fw-medium"
                                  data-bs-dismiss="modal"
                                >
                                  <i class="ri-close-line me-1 align-middle"></i>{" "}
                                  Close
                                </a>
                                <button type="button" class="btn btn-primary ">
                                  Save changes
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
