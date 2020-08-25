import React from 'react';
import { connect } from "react-redux";
import {addCar} from "../actions/addFeatures"

const mapDispatchToProps = { addCar: addCar };

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      
      <button onClick={() => props.addCar(props.feature)}>
           Add Car</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(null, mapDispatchToProps)(AdditionalFeature);

