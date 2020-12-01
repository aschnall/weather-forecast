import React from 'react';
import shortid from 'shortid';

const WeatherCard = ({ date, type, icon, temp }) => {

	//Generating a unique key for each card to assure css animation occurs beyond just the first render
	const getId = () => {
		const id = shortid.generate();
		return id;
	}

	//Creating individual cards for each of the 5 days 
	return(
		<div key={getId()} className='daily'>
			<h2>{date}</h2>
			<img src={`http://openweathermap.org/img/w/${icon}.png`} alt={type} style={{height: '100px'}}/>
			<h3>{type}</h3>
			<div className='container' style={{display: 'flex', alignItems: 'center'}}>
				<h3>{temp}&deg;F</h3>
			</div>
		</div>

	);
};

export default WeatherCard;



