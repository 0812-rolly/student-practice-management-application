import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import App from './components/App';

const store = configureStore();

const AppWithRedux = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {AppWithRedux}
  </React.StrictMode>,
  document.getElementById('root'),
);
