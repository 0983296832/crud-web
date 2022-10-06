import React from 'react';
import App from "./App"
import "./style.css"
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import { Provider } from "react-redux";
import { store } from './store';

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);