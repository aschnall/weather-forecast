import React from 'react';
import WeatherCard from './WeatherCard';
import moment from 'moment';

//Mapping through the array of data and rendering an instance of WeatherCard with the appropriate props passed down

const WeatherList = ({weather}) => {
	const dailyWeather = weather.map(day => {
		return <WeatherCard 
						date={moment(day.dt*1000).format('ddd, MMM Do')}
						type={day.weather[0].description}
						icon={day.weather[0].icon}
						temp={Math.round((day.main.temp)*9/5 - 459.67)}
						key={day.dt}
					/>
	});

	return (
		<div className='forecast-box'>
			{dailyWeather}
		</div>
	)
}
	

export default WeatherList;


	
