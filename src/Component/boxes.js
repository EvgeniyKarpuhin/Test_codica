import React, {Component} from "react";
import Weather from './Weather';

const capitalCity = ["Kiev", "Kharkiv", "Odessa", "Lviv"];

class Boxes extends Component {
    state = {
      activePlace: 0,
    };
    render() {
        const activePlace = this.state.activePlace;
        
        return (
          <div className="boxes">
            
            { capitalCity.map((city, index) => (
              
              <div className='countryBox'
              style={
                {width: '200px', 
                height: '300px', 
                border: '2px solid red', 
                margin: '10px',
                paddingTop: '10px'}
              }
              key={index}
            //   onClick={ () => 
            //   this.setState({ activePlace: index })
            // }
            >
            {city}
            <Weather
              key={activePlace}
              name={capitalCity[activePlace]} />
            </div>
            
            ))}
            
    
            
          </div>
        );
      }
}

export default Boxes;