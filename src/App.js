import React, { Component } from 'react';
import './index.css';
import Weather from './Weather/weather';

const capitalCity = ["Kiev", "Kharkiv", "Odessa", "Lviv"];

export default class App extends Component {
  state = {
    activePlace: 0,
  };

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="app">
        
        { capitalCity.map((city, index) => (
          <button 
          key={index}
          onClick={ () => 
          this.setState({ activePlace: index })
        }
        >
        {city}
        </button>
        ))}

      <Weather
        key={activePlace}
        name={capitalCity[activePlace]} />
      </div>
    );
  }
}

