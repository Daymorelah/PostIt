
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from 'react-dom';
import AppsRoutes from './routes.jsx';

render((
  <BrowserRouter>
    <AppsRoutes/>
  </BrowserRouter>),
  document.getElementById('app')
);