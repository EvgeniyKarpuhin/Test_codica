import React, { Component } from 'react';
import './index.css';
import Weather from './Weather/weather';
import './Weather/boxes';

const capitalCity = ["Kiev", "Kharkiv", "Odessa", "Lviv"];

class App extends Component {
  state = {
    activePlace: 0,
  };

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="app">
        { capitalCity.map((city, index) => (
          <div className='countryBox'
          style={
            {width: '100px', 
            height: '200px', 
            border: '2px solid red', 
            margin: '10px',
            paddingTop: '10px'}
          }
          key={index}
          onClick={ () => 
          this.setState({ activePlace: index })
        }
        >
        {city}
        {/* <Weather /> */}
        </div>
        ))}

      <Weather
        key={activePlace}
        name={capitalCity[activePlace]} />
      </div>
    );
  }
}
export default App

