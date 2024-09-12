import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import Product from "../../Pages/Product";

function ProductDisplay(props) {
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={Product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{Product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />

          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {" "}
            ${Product.old_prices}
          </div>
          <div className="productdisplay-right-price-new">
            ${Product.new_prices}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight ,usually knitted ,pullover shirt ,close-fitting and
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size"></div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
      </div>
      <button>ADD TO CART</button>
      <p className="productdisplay-right-category">
        <span>Category: </span>Women , TShirt crop Top
      </p>

      <p className="productdisplay-right-category">
        <span>Tags: </span>Modern, Latest
      </p>
    </div>
  );
}

export default ProductDisplay;
