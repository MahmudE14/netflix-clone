import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);