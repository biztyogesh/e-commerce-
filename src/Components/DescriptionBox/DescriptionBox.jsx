import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="description-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-description">
        <p>
          Electronic commerce (e-commerce) refers to companies and individuals
          that buy and sell goods and services over the internet. E-commerce
          operates in different types of market segments and can be conducted
          over computers, tablets, smartphones, and other smart devices.
        </p>
        <p>
          Commerce is defined as the exchange of goods and services between two
          or more entities. It typically involves buying and selling things of
          value. Commerce can take place between businesses, between consumers,
          or between businesses and consumers.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
