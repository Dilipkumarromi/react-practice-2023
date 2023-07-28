import React, { useEffect, useState } from "react";
import "../VideoPlay/VideoPlayer.css";
import ReactPlayer from "react-player";
ReactPlayer.removeCustomPlayers();
export default function VideoPlay() {
  const [playUrl, setPlayUrl] = useState();
  const url =
    "https://www.youtube.com/watch?v=MlJfixx2dAM&ab_channel=OggyHindi-%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80";
  const playList = () => {
    setPlayUrl(url);
  };
  useEffect(() => {
    playList();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className=""
            style={{ height: 50, backgroundColor: "#6b7b8c" }}
          ></div>

          <div className="col-md-8 mt-2" style={{ marginLeft: "30px" }}>
            <div class="ratio ratio-16x9">
              <ReactPlayer
                url={playUrl}
                controls={true}
                height="90%"
                width="100%"
                pip={true}
              />
            </div>
            <p>Video Title</p>
          </div>

          <div className="col-md-3 mt-2">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title mb-0">Primary Track</h4>
              </div>
              
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      How do I set up my profile ?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li></li>
                        <li>Basic</li>
                        <li>Basic</li>
                        <li>Basic</li>
                        <li>Basic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-body">
                <div class="mx-n3">
                  <div
                    data-simplebar
                    data-simplebar-auto-hide="false"
                    data-simplebar-track="primary"
                    style={{ maxHeight: "275px" }}
                  >
                    <div class="text-center my-2">
                      <a href="javascript:void(0);" class="text-success">
                        <i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>{" "}
                        Load more{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-6"></div>
        </div>
      </div>
    </>
  );
}
