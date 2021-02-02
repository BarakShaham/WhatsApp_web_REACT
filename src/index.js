import React from 'react';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from "./reducers/reducer";

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
;

