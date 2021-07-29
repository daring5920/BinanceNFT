import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <h1>Binance NFT sorting by price</h1>,
  document.getElementById('title')
);

ReactDOM.render(
  <h3>Please note only returns the Mystery Boxes with the name "Childhood Fantasy Mystery Box"</h3>,
  document.getElementById('subtitle')
);

ReactDOM.render(
  <p>Credits by Gian Lu (@galese3) & Michael Fenne (@MicFenne) <strong>Send a donation: 0x18Ca610d13d7639678927B20455f2a57C46aE078</strong></p>,
  document.getElementById('credits')
);

//ReactDOM.render(<Table />, document.querySelector('#table'));

ReactDOM.render(<App />, document.querySelector('#prova'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
