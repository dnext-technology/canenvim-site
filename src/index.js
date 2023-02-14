/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApplicationView from './pages/application/view/applicationView';
import './index.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import tr from 'date-fns/locale/tr';
registerLocale('tr', tr);
setDefaultLocale('tr');

ReactDOM.render(
  <BrowserRouter>
    <ApplicationView />
  </BrowserRouter>,
  document.getElementById('root')
);
