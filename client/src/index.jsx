
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {render} from 'react-dom';
import jwt from 'jsonwebtoken';
import configureStore from './store/configuerStore.jsx';
import attachAuthorizationToken from './utilities/attachAuthToken';
import AppsRoutes from './routes.jsx';

const store = configureStore();

const token = global.localStorage.getItem('token');
if (token) {
  attachAuthorizationToken(token);
  const decoded = jwt.decode(token);
  if (decoded) {
    const userInfo = {
      userId: decoded.userId,
      username: decoded.username,
      email: decoded.email,
      phoneNumber: decoded.phoneNumber
    };
    store.dispatch(
      { type: LOGGEDIN_USER, userInfo }
    );
  }
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppsRoutes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);