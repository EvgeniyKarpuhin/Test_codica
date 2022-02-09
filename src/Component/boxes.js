import React from "react";
import Weather from "./Weather";

let capitalCity = ["Kiev", "Kharkiv", "Odessa", "Lviv", 'Dnepr'];

class Boxes extends React.Component {
  state = {
    activePlace: 0,
  };

  render() {
    const activePlace = this.state.activePlace;

    return (
      <div className="boxes">
        {capitalCity.map((city, index) => (
          <div
            className="countryBox"
            style={{
              width: "250px",
              height: "400px",
              border: "2px solid red",
              margin: "10px",
              paddingTop: "10px",
            }}
            key={index}
            onClick={() => this.setState({ activePlace: index })}
          >
            {city}
            <Weather key={activePlace} name={capitalCity[activePlace]} />
            <button
              className="weatheBtn"
              style={{
                marginTop: "20px",
                padding: "5px",
              }}
            >
              Обновить данные о погоде
            </button>
          </div>
        ))}
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

// const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a059085e330fce68f911321b65962676";
// class Boxes extends React.Component {
//   state = {
//     days: []
//   }

//   componentDidMount = () => {
//     fetch(weatherURL)
//     .then(res => res.json())
//     .then(data => {
//       const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
//       this.setState({days: dailyData})
//     })
//   }

//   formatCards = () => {
//     return this.state.days.map((day, index) => <Weather day={day} key={index}/>)
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
