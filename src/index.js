import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import {rootReducer} from "./reducers"

import 'bulma/css/bulma.css';
import './styles.scss';
//step 2 "create store"
const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
// step 3 "wrap the app"
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
