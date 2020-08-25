import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  let featuresCost = 0;
  let i = 0
  for(i=0; i<props.car.features.length; i++){
    featuresCost = featuresCost + props.car.features[i].price
  }
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice + featuresCost}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, null)(Total);