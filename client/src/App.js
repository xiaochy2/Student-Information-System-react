import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SMSApp from './components/SMSApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SMSApp />
      </Provider>
    );
  }
}

export default App;