import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
} else {
  console.error('Root element with id "root" not found in the document.');
}
