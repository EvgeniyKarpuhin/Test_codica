import React, {Component} from 'react';

export default class Weather extends Component {
    state = {
        weatherData: null
    };

    componentDidMount() {
        const name = this.props.name;
        const URL = "https://api.openweathermap.org/data/2.5/weather?q=" 
        + name + "&lang=ru&units=metric&appid=a059085e330fce68f911321b65962676";
        fetch(URL).then(res => res.json()).then(json => {
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
                <p>Текущая температура: {weatherData.main.temp}°С</p>
                <p>Самая высокая за день: {weatherData.main.temp_max}°С</p>
                <p>Самая низкая за день: {weatherData.main.temp_min}°С</p>
                <p>Скорость ветра: {weatherData.wind.speed} м/c</p>
            </div>
        );
    }
}