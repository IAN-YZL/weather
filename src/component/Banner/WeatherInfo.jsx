import React from 'react';
import style from './Banner.module.scss';

import Temp from './Temp';
import OtherInfo from './OtherInfo';
const getCurrentWeather = require('../../api/model/getCurrent');

class WeatherInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };

        this.loadData = this.loadData.bind(this);
    }

    loadData () {
        getCurrentWeather().then((data) => {
            this.setState({
                data,
                loading: false,
            });
            console.log(this.state.data);
        });
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            // this.state.loading?(
            //     <div>Loading</div>
            // ):
            <div className={style.weatherInfo}>
                {this.state.loading?(<div>Loading</div>):
                    (
                        <div>
                            <Temp temp={Math.round(this.state.data.temp)}>{this.state.data.weather}</Temp>
                            <div className={style.infoSet}>
                                <OtherInfo value={this.state.data.humidity + " %"}>Humidity</OtherInfo>
                                <OtherInfo value={this.state.data.wind + " KM/h"}>Wind</OtherInfo>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default WeatherInfo;