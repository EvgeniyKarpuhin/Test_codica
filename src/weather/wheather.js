import React, {Component} from 'react';

export default class Wheather extends Component {
    state = {
        wheatherData: null
    };

    componentDidMount() {
        const name = this.props.name;
        const URL = "https://api.openweathermap.org/data/2.5/weather?q=" 
        + name + "&lang=ru&units=metric&appid=a059085e330fce68f911321b65962676";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ wheatherData: json });
        });
    }

    render() {
        const wheatherData = this.state.wheatherData;
        if (!wheatherData) return <div>Loading</div>;
        const wheather = wheatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + 
        wheather.icon + ".png";
        return (
            <div>
                <h1>
                    {wheather.main} in {wheather.name}
                    <img src={iconUrl} alt={wheather.description} />
                </h1>
                <p>Current: {wheatherData.main.temp}C</p>
                <p>Hight: {wheatherData.main.temp_max}C</p>
                <p>Low: {wheatherData.main.temp_min}C</p>
                <p>Wind Speed: {wheatherData.wind.speed} м/c</p>
            </div>
        );
    }
}