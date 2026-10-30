const Headline = ({ mb = "105" }) => {
  return (
    <div className={`headline-area mb-${mb} rmb-85 rel z-1`}>
      <span className="marquee-wrap">
        <span className="marquee-inner left">
          <span className="marquee-item">Italian pizza</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">delicious foods</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">burger king</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
        </span>
        <span className="marquee-inner left">
          <span className="marquee-item">Italian pizza</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">delicious foods</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">burger king</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
        </span>
        <span className="marquee-inner left">
          <span className="marquee-item">Italian pizza</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">delicious foods</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">burger king</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
        </span>
      </span>
      <div className="headline-shapes">
        <div className="shape one">
          <img src="assets/images/shapes/tomato.png" alt="Shape" />
        </div>
        <div className="shape two">
          <img src="assets/images/shapes/burger.png" alt="Shape" />
        </div>
      </div>
    </div>
  );
};
export default Headline;
