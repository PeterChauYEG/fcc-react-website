import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

// import components
import Home from './Home';
import NoMatch from './Miss';
import Picture from './Picture';

// import css
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/picture/:id" component={Picture} />
          <Miss component={NoMatch} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
