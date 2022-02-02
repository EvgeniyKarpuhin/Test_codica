import React, {Component } from 'react';
import './index.css';
import Wheather from './weather/wheather';

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

      <Wheather
        key={activePlace}
        name={capitalCity[activePlace]} />
      </div>
    );
  }
}

