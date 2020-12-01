import React from 'react';
import { connect } from 'react-redux';
import { onInputChange } from '../actions';

class SearchBar extends React.Component {

//Preventing default form submit and calling our action creator with the search term piece of state as an argument
	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.props.term);
	}

//Rendering a search bar with an input that a user can type a city into and 
//setting the term piece of state equal to the value of the input
	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="location">Enter Location</label>
						<input 
							type="text" 
							placeholder="Enter Location"
							id="location" 
							onChange={(e) => this.props.onInputChange(e.target.value)}
							value={this.props.term}
						/>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { term: state.searchTerm.term }
}

export default connect(mapStateToProps, { onInputChange } )(SearchBar);