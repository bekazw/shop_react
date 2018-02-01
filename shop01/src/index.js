import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RootReducer from './reducers/storeConfig';

let store0 = createStore ( RootReducer ); 

console.log (store0.getState());

ReactDOM.render(
    <Provider store = { store0 } >
        <App />
    </Provider>    
    , document.getElementById('root'));

