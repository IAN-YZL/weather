import React from 'react';
import FutureSet from './FutureSet';
import style from './Future.module.scss';

const getFutureWeather = require('../../api/model/getForecast');

class Future extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
        }

        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        const data = [];
        getFutureWeather().then((res) => {
            for (let i = 0; i < 5; i ++) {
                const dayData = res[i];
                data.push({
                    day: new Date(dayData.date).getDay(),
                    weather: dayData.weather,
                    temp: dayData.temp,
                });
            }
            this.setState({
                data,
                loading: false,
            });
        });
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        
        return (
            (this.state.loading)?(<div>Loading</div>):(
                <div className={style.future}>
                    {this.state.data.map((item) => {
                        return(
                            <FutureSet temp={Math.round(item.temp)} weather={item.weather}>{item.day}</FutureSet>
                        )
                    })}

                </div>    
            )
                

        )
    }
}

export default Future;