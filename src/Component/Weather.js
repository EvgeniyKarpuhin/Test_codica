import React, {Component} from 'react';

const capitalCity = ["Kiev"];

class Weather extends Component {
    state = {
        weatherData: null
    };

    componentDidMount() {
        // const name = this.props.name;
        const URL = {
            key: 'a059085e330fce68f911321b65962676',
            base: "https://api.openweathermap.org/data/2.5/"
        }
        fetch(`${URL.base}weather?q=${capitalCity}&units=metric&appid=${URL.key}`)
            .then(res => res.json())
            .then(json => {
            this.setState({ weatherData: json });
        });
    }

    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + 
        weather.icon + ".png";
        return (
            <div>
                <h1>
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt={weather.description} />
                </h1>
                <p>Температура: {weatherData.main.temp}°С</p>
                <p>Скорость ветра: {weatherData.wind.speed} м/c</p>
            </div>
        );
    }
}
export default Weather;