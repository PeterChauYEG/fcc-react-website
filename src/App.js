import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

// import components
import Home from './Home';
import NoMatch from './Miss';

// import css
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/picture/1" component={Home} />
          <Match pattern="/picture/2" component={Home} />
          <Match pattern="/picture/3" component={Home} />
          <Match pattern="/picture/4" component={Home} />
          <Match pattern="/picture/5" component={Home} />
          <Match pattern="/picture/6" component={Home} />
          <Match pattern="/picture/7" component={Home} />
          <Match pattern="/picture/8" component={Home} />
          <Match pattern="/picture/9" component={Home} />
          <Miss component={NoMatch} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
