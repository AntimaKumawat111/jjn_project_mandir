import React from "react";
import SecondWindowCss from "./second_window.module.css";

function SecondWindow() {
  return (
    <>
      <div className={SecondWindowCss.main_container}>
        {/* <img src={"/images/patt1.png"} alt="patt" style={{width:"100%",height:"100vh", objectFit:"cover"}} /> */}
        <div
          className={SecondWindowCss.patt_Container}
          style={{
            backgroundImage: "url('/images/patt1.png')",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
            opacity: "0.2",
            zIndex: "0",
            position:"absolute",
          }}
        ></div>

        <div className={SecondWindowCss.upper_container}>
          <img src={"./images/holi1.png"} alt="holi" id={SecondWindowCss.holiImg}/>

          <div className={SecondWindowCss.paragraph}>
            <h4>What we do ?</h4>
            <div
              style={{
                height: "2px",
                width: "68%",
                backgroundColor: "#F97300",
                margin: "10px 0",
              }}
            ></div>
            <h4>
              भजन मंडली दवारा हर मंगलवार या शनिवार को भजन का कार्यक्रम होता है,
              जिसकी महिलाएं शामिल होती हैं | संस्थान में सभी हिंदू त्योहारों को
              धूमधाम से मनाया जाता है | यहां महिला सशक्तिकरण, योग तथा अन्य
              कल्याणकारी कार्य भी करवाये जाते हैं |
            </h4>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
}

export default SecondWindow;
