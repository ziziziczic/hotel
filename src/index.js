import React , { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {IntlProvider} from 'react-intl'

// import { messages, language } from './i18n/i18n'
import messages from './i18n/messages_ko.json'

import { hotelItems } from './assets/data/hotelItems';

export const HotelContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider messages={messages}>
      <BrowserRouter>
        <HotelContext.Provider value={hotelItems}>
          <App />
        </HotelContext.Provider>
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
