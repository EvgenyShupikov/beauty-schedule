import React from 'react';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.css';
import { store } from './store'
import { BeautySchedule } from './components';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BeautySchedule />
      </div>
    </Provider>
  );
}

export default App;
