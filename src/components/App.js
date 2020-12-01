import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import {  onSearchSubmit } from '../actions';
import './App.css';


class App extends React.Component {


	render() {
		const { weather, city, onSearchSubmit } = this.props;
		return (
			<div className="ui container">
				<div className="search">
					<SearchBar onSubmit={onSearchSubmit} />
				</div>
				<div className="city">
					{city.name && city.country ? `${city.name}, ${city.country}`: ''}
				</div>
        <WeatherList weather={weather} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { 
		weather: state.responseData.weather,
		city: state.responseData.city
	 }
}

//Connecting onSearchSubmit to pass down as a prop to the SearchBar component
export default connect(mapStateToProps, { onSearchSubmit })(App);



