/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApplicationView from './pages/application/view/applicationView';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <ApplicationView />
  </BrowserRouter>,
  document.getElementById('root'),
);
