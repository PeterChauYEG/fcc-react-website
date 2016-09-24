import React, { Component } from 'react';
import { Link } from 'react-router';

const image = {
  "1": "http://mrmrs.io/photos/v/022.jpg",
  "2": "http://mrmrs.io/photos/v/024.jpg",
  "3": "http://mrmrs.io/photos/050.jpg",
  "4": "http://mrmrs.io/photos/049.jpg",
  "5": "http://mrmrs.io/photos/051.jpg",
  "6": "http://mrmrs.io/photos/u/001.jpg",
  "7": "http://mrmrs.io/photos/u/002.jpg",
  "8": "http://mrmrs.io/photos/u/003.jpg",
  "9": "http://mrmrs.io/photos/u/004.jpg",
};

const background = {
  "1": "bg-light-gray",
  "2": "bg-white",
  "3": "bg-near-white",
  "4": "bg-light-gray",
  "5": "bg-near-white",
  "6": "bg-white",
  "7": "bg-light-purple",
  "8": "bg-moon-gray",
  "9": "bg-washed-red",
};

class Picture extends Component {
  render() {
    const { 
      params: {
        id
      } 
    } = this.props;
    
    return (
      <main className={`${background[id]} cf pa3 pa4-m pa5-l mw-100 center`}>
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
        <img src={image[id]} className="db center" role="presentation" />
      </main>
    );
  }
}

export default Picture;
