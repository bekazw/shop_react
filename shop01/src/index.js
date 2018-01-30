import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import initStore from './reducers/init';

let store0 = createStore ( initStore ); 

console.log (store0.getState());

ReactDOM.render(
    <Provider store = { store0 } >
        <App />
    </Provider>    
    , document.getElementById('root'));

