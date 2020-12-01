import { KEY } from '../apis/openweather';

//Action creator used to fetch data from the API and dispatch two actions
export const onSearchSubmit = (term) => async dispatch => {
	let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${term}&appid=${KEY}`);
	weatherData = await weatherData.json();
	dispatch({type: 'WEATHER_DATA', payload: weatherData});
	dispatch({type: 'CITY_DATA', payload: weatherData.city});
}

//Action creator for the input value action
export const onInputChange = (text) => {
	return {
		type: 'SEARCH_TERM',
		payload: text
	}
}