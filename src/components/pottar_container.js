import React from "react";
import PotterContainerCss from "./pottar_container.module.css";

function PotterContainer() {
  return (
    <div className={PotterContainerCss.container}>
      <div
        className={PotterContainerCss.potterContainer}
        style={{
          backgroundImage: "url('/images/potter.png')", // Ensure the path is correct
        }}
      >
        <div
          className={PotterContainerCss.overlay}
          style={{
            backgroundImage: "url('/images/redLayer.png')",
          }}
        >
          <div className={PotterContainerCss.top_box}>
            <div className={PotterContainerCss.paragraph}>
              <h1>सुविचार</h1>
              <div
                style={{
                  height: "2px",
                  width: "68%",
                  backgroundColor: "white",
                  margin: "10px 0",
                }}
              ></div>
              <h4>
                रेत और मिट्टी से हम कहानियों को आकार देते हैं | हर बर्तन एक कृति
                है, जो हाथों से बनी है और जुनून से तपाई गई है | स्वागत है उस
                दुनिया में, जहाँ सृजन हमारा हुनर है और हर कृति में एक अनकही
                कहानी बसी है |
              </h4>
            </div>

            <img
              src={"/images/kids3.png"}
              alt="kidImage"
              id={PotterContainerCss.kidImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotterContainer;
