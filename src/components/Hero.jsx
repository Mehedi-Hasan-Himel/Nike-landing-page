import React from "react";
import Shoe from "/images/shoe_image.png";
import Flipkart from "/images/flipkart.png";
import Amazon from "/images/amazon.png";

const Hero = () => {
  return (
    <main className="hero container">
      {/* Hero Content Section Start */}
      <section className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <section className="shop-btn">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Category</button>
        </section>
        <section className="available">
          <p>Also Available On</p>
          <div className="available-e-com">
            <img src={Flipkart} alt="" />
            <img src={Amazon} alt="" />
          </div>
        </section>
      </section>
      {/* Hero Content Section End */}

      {/* Hero Image Section Start */}
      <section className="hero-img">
        <img src={Shoe} alt="" />
      </section>
      {/* Hero Image Section End */}
    </main>
  );
};

export default Hero;
