import React from "react";
import Weather from './Weather';

const capitalCity = ["Kiev", "Kharkiv", "Odessa", "Lviv"];
// const URL = "https://api.openweathermap.org/data/2.5/weather?q=&lang=ru&units=metric&appid=a059085e330fce68f911321b65962676";
// class WeatherDisplay extends React.Component {
//   render() {
//     return <h1>Weather for city {this.props.name}</h1>
//   }
// }

class Boxes extends React.Component {
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
              >
                <button
              key={index}
              onClick={() =>
              this.setState({activePlace: index})
    } >
      
      {city}
      </button>
      </div>
            ))}

            <Weather
              key={activePlace}
              name={capitalCity[activePlace]} />
              </div>
        );
  }
}


// const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a059085e330fce68f911321b65962676";
// const URL = {
//               key: 'a059085e330fce68f911321b65962676',
//               base: "https://api.openweathermap.org/data/2.5/"
//           }
//           const cityyy = ['Odessa', 'Lviv'];
// class Boxes extends React.Component {
//   state = {
//     cities: []
//   }

//   componentDidMount = () => {
//     fetch(`${URL.base}weather?q=${cityyy}&units=metric&appid=${URL.key}`)
//     .then(res => res.json())
//     .then(data => {
//       const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
//       this.setState({cities: dailyData})
//     })
//   }

//   formatCards = () => {
//     return this.state.cities.map((city, index) => <Weather city={city} key={index}/>)
//   }

//   render() {
//     return (
//       <div className="">
//       <h1 className="display-4 jumbotron">Прогноз погоды на 5 дней</h1>
//       <h5 className="display-4 text-muted">Kiev</h5>
//         <div className="row justify-content-center">

//           {this.formatCards()}

//         </div>
//       </div>
//     )
//   }
// }

export default Boxes;