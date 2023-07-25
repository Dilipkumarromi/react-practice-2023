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
            <p >Video Title</p>
             
          </div>

          <div className="col-md-3 mt-2" data-bs-spy="scroll">
            {/* <div class="accordion accordion-flush" id="accordionFlushExample">
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
                      <li>

                      </li>
                      <li>Basic</li>
                      <li>Basic</li>
                      <li>Basic</li>
                      <li>Basic</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    What can I do with my project ?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    If you had signed up on a free account with Slicktext, then
                    upgraded to a paid plan at a later date, your bill will
                    renew based on the date you had upgraded to a paid plan. All
                    invoices are able to be viewed under your plan options in
                    your SlickText account.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Where can I go to edit voice settings
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    No, we cannot provide this information. Opting out from a
                    list is an anonymous, private act. This prevents further
                    harassment. Providing this information is considered bad
                    practice, and further communication after they opt out would
                    be considered against compliance.
                  </div>
                </div>
              </div>
            </div> */}
            <section class="video-playlist">
              <h3 class="title">Title of Video Playlist</h3>
              <p>10 lessions &nbsp; . &nbsp; 50m 48s</p>
              <div class="videos"></div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
