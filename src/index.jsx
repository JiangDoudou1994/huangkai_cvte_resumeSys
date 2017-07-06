import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './router/main'; //路由配置
import store from './store/configureStore'

render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.body.appendChild(document.createElement('root'))
);