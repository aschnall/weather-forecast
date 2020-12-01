import { combineReducers } from 'redux';

//Initializing weather and city pieces of state to empty arrays
const initialStateResponse = {
	weather: [],
	city: {}
}

//Reducer to handle the API response data
//Actions of type 'WEATHER_DATA' will filter down the response data and assign to weather piece of state
//Actions of type 'CITY_DATA' will pull out the city specific data and filter assign to city piece of state
const responseData = (state = initialStateResponse, action) => {
	switch(action.type) {
		case 'WEATHER_DATA':
			const daily = action.payload.list.filter((item) => {
				return item.dt_txt.includes('15:00:00');
			})
			return Object.assign({}, state, {weather: daily});
		case 'CITY_DATA':
			return Object.assign({}, state, { city: action.payload});
		default:
			return state;
	}
}

//Initializing search term piece of state to an empty string
const initialStateSearch = {
	term: ''
}

//Setting the term piece of state equal to the action's payload which will be the input value
const searchTerm = (state = initialStateSearch, action) => {
	switch(action.type) {
		case 'SEARCH_TERM':
			return Object.assign({}, state, {term: action.payload});
		default:
			return state;
	}
}

export default combineReducers({ searchTerm, responseData });