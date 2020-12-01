import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import App from './components/App';
import reducers from './reducers';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, logger))


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.querySelector('#root')
)
