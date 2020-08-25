import React from 'react';
import { connect } from "react-redux";
import {removecar} from "../actions/remove"
const AddedFeature = props => {
  return (
    <li>
       
      <button onClick={() => props.removecar(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};
//step 5 connect the componenets and add mapdisprops and mapstateprops
const mapDispatchToProps = { removecar: removecar };
 
export default connect(null, mapDispatchToProps)(AddedFeature);


