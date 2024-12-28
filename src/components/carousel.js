import CarouselCss from "./carousel.module.css";

function Carousel() {
  return (
    <>
      <div className={CarouselCss.main_box}>
        <img src={"/images/hanuman_1.png"} alt="" id={CarouselCss.hanuman} />
        <div className={CarouselCss.carousel_box}>
          <p id={CarouselCss.p}>भजन मंडली की झलकियाँ</p>
          <div className={CarouselCss.carousel}>
            <div className={CarouselCss.images}>
              <img
                src="/images/kids3.png"
                className={CarouselCss.imgtag}
                alt="Kid 1"
              />
              <img
                src="/images/kids3.png"
                className={CarouselCss.imgtag}
                alt="Kid 2"
              />
              <img
                src="/images/kids3.png"
                className={CarouselCss.imgtag}
                alt="Kid 3"
              />
              <img
                src="/images/kids3.png"
                className={CarouselCss.imgtag}
                alt="Kid 4"
              />
              <img
                src="/images/kids3.png"
                className={CarouselCss.imgtag}
                alt="Kid 5"
              />
              <img
                src="/images/kids3.png"
                className={CarouselCss.imgtag}
                alt="Kid 6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
