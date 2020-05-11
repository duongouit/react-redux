import React from 'react';
import logo from './logo.svg';
// import store from './store';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <HomePage />
        </header>
      </Provider>
    </div>
  );
}
export default App;