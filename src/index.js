import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import Login from './modules/login-logout/views/logIn';
import ThunkMiddleware from 'redux-thunk';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '!!style-loader!css-loader!semantic-ui-css/semantic.min.css'

const createStoreWithMiddleware = applyMiddleware(ThunkMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));