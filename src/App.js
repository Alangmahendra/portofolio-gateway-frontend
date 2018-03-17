import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Sandbox from './components/sandBox'
import store from './store/store'
// import Home from './components/Home'
// import Sandbox from './components/sandBox'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <Header/> */}
          <BrowserRouter>
            <div>
              <Home />
              {/* <Route exact path='sandbox' component={Sandbox} /> */}
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
