import React, { useEffect, useState } from "react";
export default function InternetConnection() {
  const [online, setOnline] = useState("");
  const checkInternetConnection = () => {
    window.addEventListener("offline", (event) => {
      const statusDisplay = document.getElementById("status");
      setOnline((statusDisplay.textContent = "OFFline"));
    });

    window.addEventListener("online", (event) => {
      const statusDisplay = document.getElementById("status");
      setOnline((statusDisplay.textContent = "Online"));
    });
};
useEffect(() => {
    checkInternetConnection();
    console.log('isActiion',online)
  }, []);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#firstmodal"
      >
        Open First Modal
      </button>

      <div
        className="modal fade"
        id="firstmodal"
        aria-hidden="true"
        aria-labelledby="..."
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center p-5">
            <lord-icon
                src="https://cdn.lordicon.com/tclnsjgx.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
                stroke="65"
                style={{ Width: "250px", Height: "250px" }}
              ></lord-icon>
              <div className="mt-4 pt-4">
                <h4>Uh oh, check internet connection</h4>
                 <p>{online}</p>
                 <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="secondmodal"
        aria-hidden="true"
        aria-labelledby="..."
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center p-5">
              <lord-icon
                src="https://cdn.lordicon.com/tclnsjgx.json"
                trigger="hover"
                colors="primary:#121331,secondary:#08a88a"
                stroke="65"
                style={{ outerWidth: "250px", outerHeight: "250px" }}
              ></lord-icon>
              <div className="mt-4 pt-3">
                <h4 className="mb-3">Follow-Up Email</h4>
                <p className="text-muted mb-4">
                  Hide this modal and show the first with the button below
                  Automatically Send your invitees a follow -Up email.
                </p>
                <div className="hstack gap-2 justify-content-center">
                  <button
                    className="btn btn-soft-danger"
                    data-bs-target="#firstmodal"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Back to First
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
