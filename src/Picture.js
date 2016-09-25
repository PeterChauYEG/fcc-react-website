import React, { Component } from 'react';
import { Link, Redirect } from 'react-router';

// import data
import background from './data/background';
import image from './data/image';

class Picture extends Component {
  constructor() {
    super();
    
    // define state
    this.state = {
      enlarge: false
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log('click');
    this.setState(
      {
        enlarge: !this.state.enlarge
      }
    );
    console.log(this.state.enlarge);
  }
  
  render() {
    const { 
      params: {
        id
      } 
    } = this.props;
    
    const {
      enlarge
    } = this.state;

    if (!background.hasOwnProperty(id)) {
      return (
        <Redirect to='/'/>
      );
    }
    
    return (
      <main className={`${background[id]} cf pa3 pa4-m pa5-l mw-100 min-vh-100 center`}>
        <div className="fr w-100 w-80-l">
          <p className="f6">
            Beitrage zut
          </p>
          <Link 
            to='/' 
            className="link dim black hover-mid-gray"
          >
            <h1 className="f2 f1-l lh-title mt0 mb4 mb5-ns">
              Kunst<br className="dn db-ns" /> des 19. und 20.Jahrhunderts
            </h1>
          </Link>
        </div>
        <div className="f6 lh-copy fl w-100 mb4">
          <div className="fl-ns w-100 w-20-l pr3-m pr5-l">
            <p>
              Jahrbuch <small className="fw6">1968/69</small>
            </p> 
          </div>
          <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
            <p>
              Institut suisse pour l'étude de l'art
            </p> 
          </div>
          <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
            <p>
              Schweizerisches<br className="dn db-l" /> Institut für Kunstwissenschaft
            </p> 
          </div>
          <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
            <p>
              Istituto svizzero di studi d'arte
            </p>
          </div>
          <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
            <p>
              Swiss Institute for Art Research
            </p>
          </div>
        </div>
        {enlarge ?
          <div className={`${background[id]} absolute top-0 right-0 bottom-0 left-0 w-100 z-999`}>
            <img 
              src={image[id]} 
              className="absolute top-0 right-0 bottom-0 left-0 w-100 pointer"
              role="presentation"
              onClick={this.handleClick}
            />
          </div> :
          <img 
            src={image[id]} 
            className="db center grow pointer dim"
            role="presentation"
            onClick={this.handleClick}
          />          
        }
      </main>
    );
  }
}

export default Picture;
