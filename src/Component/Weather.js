import React from "react";

class Weather extends React.Component {
  state = {
    weatherData: null,
  };
  componentDidMount() {
    const name = this.props.name;
    const URL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&lang=ru&units=metric&appid=a059085e330fce68f911321b65962676";

    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ weatherData: json });
      });
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div className="weathers">
          <img src={iconUrl} alt={weather.description} />
        <h1>
          {weather.description}
        </h1>
        <p>Температура: {weatherData.main.temp}°С</p>
        <p>Скорость ветра: {weatherData.wind.speed} м/c</p>
      </div>
    );
  }
}

// class Weather extends React.Component {
//     // Props: day, key(index)

//     render() {
//       const ms = this.props.city.dt * 1000;
//       const weekdayName = new Date(ms).toLocaleString('ru', {city: 'long'});

//       const imgURL = "owf owf-"+ this.props.city.weather[0].id +" owf-5x icon-style"

//       // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32

//       return (
//         <div className="col-auto">
//           <div className="card bg-light">
//             <h3 className="card-title">{weekdayName}</h3>
//             <i className={imgURL}></i>
//             <h2>{Math.round(this.props.day.main.temp)} °C</h2>
//             <div className="card-body">
//               <button className="btn btn-dark btn-outline-light">{this.props.day.weather[0].description}</button>
//             </div>
//           </div>
//         </div>
//       )
//     }
//   }

// class Weather extends React.Component {
//     // Props: day, key(index)

//     render() {
//       const ms = this.props.day.dt * 1000;
//       const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

//       const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

//       // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32

//       return (
//         <div className="col-auto">
//           <div className="card bg-light">
//             <h3 className="card-title">{weekdayName}</h3>
//             <i className={imgURL}></i>
//             <h2>{Math.round(this.props.day.main.temp)} °C</h2>
//             <div className="card-body">
//               <button className="btn btn-dark btn-outline-light">{this.props.day.weather[0].description}</button>
//             </div>
//           </div>
//         </div>
//       )
//     }
//   }

export default Weather;
