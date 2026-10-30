const OfferCard = () => {
  return (
    <div className="offer-card-area">
      <div className="row no-gap row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
        <div
          className="col"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Hot</div>
            <div className="image">
              <img src="assets/images/offer/offer-card1.png" alt="Food" />
            </div>
            <span className="title">Burger</span>
            <span className="available-item">35+ Burger menu items</span>
            <div className="bg-text">
              <span>Burger</span> <span>Burger</span> <span>Burger</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={50}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item style-two">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">-10%</div>
            <div className="image">
              <img src="assets/images/offer/offer-card2.png" alt="Food" />
            </div>
            <span className="title">Pizza</span>
            <span className="available-item">35+ Burger menu items</span>
            <div className="bg-text">
              <span>Pizza</span> <span>Pizza</span> <span>Pizza</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Hot</div>
            <div className="image">
              <img src="assets/images/offer/offer-card3.png" alt="Food" />
            </div>
            <span className="title">hotdog</span>
            <span className="available-item">35+ Burger menu items</span>
            <div className="bg-text">
              <span>hotdog</span> <span>hotdog</span> <span>hotdog</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item style-two">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">-15%</div>
            <div className="image">
              <img src="assets/images/offer/offer-card4.png" alt="Food" />
            </div>
            <span className="title">chickens</span>
            <span className="available-item">35+ Burger menu items</span>
            <div className="bg-text">
              <span>chickens</span> <span>chickens</span> <span>chickens</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Hot</div>
            <div className="image">
              <img src="assets/images/offer/offer-card5.png" alt="Food" />
            </div>
            <span className="title">seafood</span>
            <span className="available-item">35+ Burger menu items</span>
            <div className="bg-text">
              <span>seafood</span> <span>seafood</span> <span>seafood</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferCard;
