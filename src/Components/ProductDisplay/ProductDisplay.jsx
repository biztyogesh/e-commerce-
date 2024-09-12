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
      </div>
    </div>
  );
}

export default ProductDisplay;
